@php
    use App\Models\Exhibition;
    use Illuminate\Support\Collection;

    /** @var Collection<int, Exhibition> $exhibitions */
    /** @var Exhibition|null $selectedExhibition */

    $selectedImages = $selectedExhibition?->images ?? [];
    $selectedVideos = $selectedExhibition?->videos ?? [];
    $selectedMedia = collect($selectedImages)
        ->map(fn ($image) => ["type" => "image", "item" => $image])
        ->merge(
            collect($selectedVideos)->map(
                fn ($video) => ["type" => "video", "item" => $video],
            ),
        )
        ->values();
@endphp

@extends("landing.layout")

@push("meta")
    <meta
        name="description"
        content="{{ $selectedExhibition?->description }}"
    />
    <meta property="og:title" content="{{ $selectedExhibition?->name }}" />
    <meta
        property="og:description"
        content="{{ $selectedExhibition?->description }}"
    />
@endpush

@section("title", " - " . trans("site.exhibitions"))
@section("content")
    <div
        class="relative w-full bg-cover bg-center bg-no-repeat"
        style="
            background-image: url('{{ asset("/images/our-projects.webp") }}');
        "
    >
        <x-ui.navbar />

        <div class="flex h-full w-full flex-col items-center gap-2 pt-16 pb-42">
            <h1
                class="px-5 text-center text-4xl leading-12 font-bold text-landing-primary md:text-5xl md:leading-20"
            >
                {{ trans("site.exhibitions_title") }}
            </h1>
        </div>
    </div>

    <div
        class="min-h-screen bg-cover bg-top bg-no-repeat py-10 pt-30 md:py-16"
        style="background-image: url('{{ asset("/images/08-BG.svg") }}')"
    >
        <div class="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-12">
            <div
                class="rounded-[2rem] border border-landing-primary/10 bg-white/80 p-5 shadow-xl backdrop-blur md:p-8"
            >
                <div
                    class="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <h2 class="text-2xl font-bold text-landing-primary">
                            {{ trans("site.browse_exhibitions") }}
                        </h2>
                        <p
                            class="mt-2 text-sm leading-7 text-slate-600 md:text-base"
                        >
                            {{ trans("site.exhibitions_subtitle") }}
                        </p>
                    </div>
                </div>

                <div class="flex flex-wrap gap-3">
                    @forelse ($exhibitions as $exhibition)
                        <a
                            href="{{ route("landing.exhibitions.index", ["exhibitionSlug" => $exhibition->slug]) }}"
                            class="{{ $selectedExhibition?->id === $exhibition->id ? "border-landing-secondary bg-landing-secondary text-white" : "border-landing-primary bg-white text-landing-primary hover:border-landing-secondary hover:text-landing-secondary" }} rounded-full border px-4 py-2 text-sm font-semibold transition"
                        >
                            {{ $exhibition->name }}
                        </a>
                    @empty
                        <p class="text-base font-medium text-slate-500">
                            {{ trans("site.no_exhibitions_available") }}
                        </p>
                    @endforelse
                </div>
            </div>

            @if ($selectedExhibition)
                <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div
                        class="overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-2xl"
                    >
                        <div
                            class="relative aspect-[4/3] overflow-hidden bg-slate-100"
                        >
                            @if ($selectedMedia->isNotEmpty())
                                <div
                                    id="exhibition-carousel"
                                    dir="ltr"
                                    class="flex h-full w-full transition-transform duration-500 ease-out"
                                >
                                    @foreach ($selectedMedia as $media)
                                        <div
                                            class="relative h-full w-full shrink-0 grow-0 basis-full"
                                        >
                                            @if ($media["type"] === "image")
                                                <img
                                                    src="{{ $media["item"]->url }}"
                                                    alt="{{ $selectedExhibition->name }}"
                                                    class="h-full w-full object-cover"
                                                />
                                            @else
                                                <video
                                                    class="h-full w-full object-cover"
                                                    src="{{ $media["item"]->url }}"
                                                    muted
                                                    playsinline
                                                    autoplay
                                                    loop
                                                    preload="metadata"
                                                >
                                                    Your browser does not
                                                    support the video tag.
                                                </video>

                                                <button
                                                    type="button"
                                                    class="video-fullscreen absolute right-4 bottom-4 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-landing-primary shadow-lg transition-colors hover:bg-white"
                                                    aria-label="Open video in fullscreen"
                                                    title="Open video in fullscreen"
                                                >
                                                    <i
                                                        data-lucide="expand"
                                                        class="size-5"
                                                    ></i>
                                                </button>
                                            @endif
                                        </div>
                                    @endforeach
                                </div>
                            @else
                                <div
                                    class="flex h-full items-center justify-center bg-slate-100 px-6 text-center text-lg font-semibold text-slate-500"
                                >
                                    {{ trans("site.no_exhibition_images") }}
                                </div>
                            @endif

                            @if ($selectedMedia->count() > 1)
                                <button
                                    type="button"
                                    id="slider-prev"
                                    class="absolute top-1/2 left-4 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-landing-primary shadow-lg transition hover:bg-white"
                                    aria-label="{{ trans("site.previous_image") }}"
                                >
                                    <i
                                        data-lucide="chevron-left"
                                        class="size-6"
                                    ></i>
                                </button>

                                <button
                                    type="button"
                                    id="slider-next"
                                    class="absolute top-1/2 right-4 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-landing-primary shadow-lg transition hover:bg-white"
                                    aria-label="{{ trans("site.next_image") }}"
                                >
                                    <i
                                        data-lucide="chevron-right"
                                        class="size-6"
                                    ></i>
                                </button>
                            @endif
                        </div>

                        @if ($selectedMedia->count() > 1)
                            <div
                                class="flex items-center justify-center gap-2 px-6 py-5"
                            >
                                @foreach ($selectedMedia as $media)
                                    <button
                                        type="button"
                                        class="slider-dot {{ $loop->first ? "bg-landing-secondary" : "bg-slate-300" }} h-3 w-3 cursor-pointer rounded-full transition"
                                        data-index="{{ $loop->index }}"
                                        aria-label="{{ trans("site.go_to_image") }} {{ $loop->iteration }}"
                                    ></button>
                                @endforeach
                            </div>
                        @endif
                    </div>

                    <div
                        class="flex h-full flex-col justify-between rounded-[2rem] bg-landing-secondary p-6 text-white shadow-2xl md:p-8"
                    >
                        <div>
                            <p
                                class="text-sm font-semibold tracking-[0.18em] text-white/70 uppercase"
                            >
                                {{ trans("site.exhibition_details") }}
                            </p>
                            <h2
                                class="mt-4 text-3xl leading-tight font-bold md:text-4xl"
                            >
                                {{ $selectedExhibition->name }}
                            </h2>
                            <div
                                class="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold"
                            >
                                {{ trans("site.exhibition_date") }}:
                                <span class="ms-2">
                                    {{ $selectedExhibition->date?->translatedFormat("d F Y") }}
                                </span>
                            </div>
                        </div>

                        <div
                            class="mt-8 rounded-[1.5rem] bg-white/10 p-5 md:p-6"
                        >
                            <p
                                class="mb-3 text-sm font-semibold tracking-[0.18em] text-white/70 uppercase"
                            >
                                {{ trans("site.description") }}
                            </p>
                            <div class="text-base leading-8 text-white/95">
                                {!! nl2br(e($selectedExhibition->description?->forceTranslate())) !!}
                            </div>
                        </div>
                    </div>
                </div>
            @else
                <div
                    class="rounded-[2rem] border border-dashed border-landing-primary/20 bg-white/70 px-6 py-20 text-center text-lg font-semibold text-slate-500 shadow-lg"
                >
                    {{ trans("site.no_exhibitions_available") }}
                </div>
            @endif
        </div>
    </div>

    <x-ui.footer />
@endsection

@push("scripts")
    <script type="module">
        document.addEventListener('DOMContentLoaded', () => {
            const selector = document.getElementById('exhibition-selector');
            selector?.addEventListener('change', (event) => {
                const target = event.target;
                if (target instanceof HTMLSelectElement && target.value) {
                    window.location.href = target.value;
                }
            });

            const carousel = document.getElementById('exhibition-carousel');
            const dots = Array.from(document.querySelectorAll('.slider-dot'));
            const prevButton = document.getElementById('slider-prev');
            const nextButton = document.getElementById('slider-next');
            const totalSlides =
                carousel instanceof HTMLElement ? carousel.children.length : 0;
            const slides =
                carousel instanceof HTMLElement
                    ? Array.from(carousel.children)
                    : [];
            const slideVideos =
                carousel instanceof HTMLElement
                    ? Array.from(carousel.querySelectorAll('video'))
                    : [];
            const fullscreenButtons = Array.from(
                document.querySelectorAll('.video-fullscreen'),
            );
            let fullscreenVideo = null;

            if (!(carousel instanceof HTMLElement) || totalSlides === 0) {
                return;
            }

            let currentIndex = 0;
            let autoplayInterval;

            const updateSlider = (newIndex) => {
                currentIndex = (newIndex + totalSlides) % totalSlides;
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

                dots.forEach((dot, index) => {
                    dot.classList.toggle(
                        'bg-landing-secondary',
                        index === currentIndex,
                    );
                    dot.classList.toggle(
                        'bg-slate-300',
                        index !== currentIndex,
                    );
                });

                slideVideos.forEach((video) => {
                    const slide = video.parentElement;
                    const slideIndex = slide ? slides.indexOf(slide) : -1;

                    if (slideIndex === currentIndex) {
                        video.controls = video === fullscreenVideo;
                        video.muted = video !== fullscreenVideo;
                        video.currentTime = 0;
                        void video.play().catch(() => {});
                    } else {
                        video.controls = false;
                        video.muted = true;
                        video.pause();
                    }
                });
            };

            const syncFullscreenControls = () => {
                const activeFullscreenVideo =
                    document.fullscreenElement instanceof HTMLVideoElement
                        ? document.fullscreenElement
                        : null;

                fullscreenVideo = activeFullscreenVideo;

                slideVideos.forEach((video) => {
                    video.controls = video === fullscreenVideo;
                    video.muted = video !== fullscreenVideo;
                });
            };

            if (totalSlides <= 1) {
                updateSlider(0);
                return;
            }

            const restartAutoplay = () => {
                window.clearInterval(autoplayInterval);
                autoplayInterval = window.setInterval(() => {
                    updateSlider(currentIndex + 1);
                }, 5000);
            };

            const stopAutoplay = () => {
                window.clearInterval(autoplayInterval);
            };

            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', restartAutoplay);

            prevButton?.addEventListener('click', () => {
                updateSlider(currentIndex - 1);
                restartAutoplay();
            });
            nextButton?.addEventListener('click', () => {
                updateSlider(currentIndex + 1);
                restartAutoplay();
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateSlider(index);
                    restartAutoplay();
                });
            });

            fullscreenButtons.forEach((button) => {
                button.addEventListener('click', async () => {
                    const slide = button.parentElement;
                    const video = slide?.querySelector('video');

                    if (!(video instanceof HTMLVideoElement)) {
                        return;
                    }

                    if (document.fullscreenElement !== video) {
                        fullscreenVideo = video;
                        video.controls = true;
                        video.muted = false;
                        await video.requestFullscreen?.().catch(() => {});
                    }

                    if ('webkitEnterFullscreen' in video) {
                        fullscreenVideo = video;
                        video.controls = true;
                        video.muted = false;
                        video.webkitEnterFullscreen?.();
                    }
                });
            });

            document.addEventListener('fullscreenchange', () => {
                syncFullscreenControls();
                updateSlider(currentIndex);
            });

            slideVideos.forEach((video) => {
                video.addEventListener('webkitbeginfullscreen', () => {
                    fullscreenVideo = video;
                    video.controls = true;
                    video.muted = false;
                });

                video.addEventListener('webkitendfullscreen', () => {
                    fullscreenVideo = null;
                    video.controls = false;
                    video.muted = true;
                    updateSlider(currentIndex);
                });
            });

            updateSlider(0);
            restartAutoplay();
        });
    </script>
@endpush
