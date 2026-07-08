@extends("landing.layout")
@section("title", " - " . $project->title)

@php
    $metaTitle = $seo?->meta_title ?? $project->title;
    $metaDescription = $seo?->meta_description ?? $project->title;
@endphp

@section("meta_title", (string) $metaTitle)

@push("meta")
    <meta name="description" content="{{ $metaDescription }}" />
    <meta property="og:title" content="{{ $metaTitle }}" />
    <meta property="og:description" content="{{ $metaDescription }}" />
    <meta property="og:type" content="article" />
@endpush

@section("content")
<div class="h-full w-full">
    <div class="max-h-[13vh] bg-landing-secondary">
        <x-ui.navbar />
    </div>

    <div class="h-full w-full bg-repeat" style="background-image: url('{{ asset(" /images/08-BG.svg") }}')">
        <div class="h-full w-full bg-transparent px-10 py-10 md:px-24">
            {{-- Project Title and Description Card --}}
            <div class="relative rounded-md border-2 px-5 py-8 md:px-10 md:py-16">
                <h1
                    class="absolute -top-8 right-1/2 translate-x-1/2 rounded-3xl bg-landing-primary px-5 py-2 text-center text-sm font-semibold md:px-10 md:py-5 md:text-xl">
                    {{ $project->title }}
                </h1>

                {{-- Use {!! !!} to render HTML content from the description --}}
                <div class="text-xs font-semibold md:text-base">
                    {!! $project->description !!}
                </div>
            </div>

            {{-- Media Gallery (Images & Videos) --}}
            <div class="flex flex-wrap items-center justify-center">
                {{-- Images Loop --}}
                @foreach ($project->images ?? [] as $image)
                <div class="h-96 overflow-hidden rounded w-full sm:w-1/3 p-5 md:p-8">
                    <img class="h-full w-full object-cover rounded" src="{{ $image->url }}" alt="{{ $project->title }}" />
                </div>
                @endforeach

                {{-- Videos Loop --}}
                @foreach ($project->videos ?? [] as $video)
                <div class="h-96 overflow-hidden rounded w-full sm:w-1/3 p-5 md:p-8">
                    <video class="h-full w-full object-cover rounded" src="{{ $video->url }}" controls>
                        Your browser does not support the video tag.
                    </video>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <x-ui.footer />
</div>
@endsection
