@extends("landing.layout")
@push("meta")
    <meta property="og:image" content="{{ asset("/images/02-Logo.webp") }}" />
@endpush

@section("title", " - " . trans("site.our_projects"))
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
                {{ trans("site.our_projects") }}
            </h1>
        </div>
    </div>

    <div
        class="h-full w-full bg-[url('/images/08-BG.svg')] bg-cover bg-no-repeat py-10 pt-30 md:py-28"
    >
        <div
            id="project-container"
            class="grid grid-cols-1 gap-10 px-16 md:grid-cols-4"
        >
            @foreach ($projects as $project)
                <div class="project-item">
                    <a
                        href="{{ route("landing.projects.show", $project->slug) }}"
                        class="group"
                    >
                        <div
                            class="overflow-hidden rounded-lg border-6 border-landing-primary bg-landing-primary shadow-md transition-all duration-300 hover:scale-102 hover:shadow-xl"
                        >
                            <img
                                class="h-[17rem] w-full object-cover"
                                src="{{ $project->cover?->url }}"
                            />
                            <p
                                class="px-1 pt-4 pb-3 text-center text-lg font-semibold"
                            >
                                {{ $project->title }}
                            </p>
                        </div>
                    </a>
                </div>
            @endforeach
        </div>

        {{-- 3. Standard Laravel Pagination (Hidden) --}}
        <div class="pagination-wrapper mt-10">
            {{ $projects->links() }}
        </div>

        {{-- 4. Status Indicator --}}
        <div class="page-load-status mt-10 hidden text-center">
            <div
                class="infinite-scroll-request inline-block h-8 w-8 animate-spin rounded-full border-4 border-landing-primary border-t-transparent"
            ></div>
        </div>
    </div>

    <x-ui.footer />
@endsection

@push("scripts")
    {{-- Add this before your closing </body> tag --}}
    <script type="module">
        let elem = document.querySelector('#project-container');
        let infScroll = new InfiniteScroll(elem, {
            // Path to the next page (looks for the 'rel=next' link in Laravel pagination)
            path: '.pagination-wrapper a[rel="next"]',
            // Appends the fetched items to the container
            append: '.project-item',
            // Hides the standard pagination
            hideNav: '.pagination-wrapper',
            // Shows status element during load
            status: '.page-load-status',
            // Smoothly handle history/URL updates (optional)
            history: false,
        });
    </script>
@endpush
