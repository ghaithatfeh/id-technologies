@php
    /** @var \App\Models\Brand $brand */
    /** @var \App\Models\Category|null $category */
    /** @var \Illuminate\Database\Eloquent\Collection<\App\Models\Product> $products */
    /** @var int $subCategoryId */
    /** @var \Illuminate\Database\Eloquent\Collection|null $categories  */
    /** @var string|null $search */

    $title = " - $brand->brand_title";

    $metaTitle = $category->meta_title ?? $brand->brand_title;
    $metaDescription = $category->meta_description ?? $brand->brand_title;

    if ($search) {
        $productsCategories = $products
            ->map(fn ($p) => $p->category_id)
            ->unique()
            ->toArray();
    } else {
        $productsCategories = $subCategoryId ? [$category->id, $subCategoryId] : [$category->id];
    }

    if ($subCategoryId) {
        $subCategory = $category->children->firstWhere("id", $subCategoryId);
        $metaTitle = $subCategory->meta_title ?? "$metaTitle - $subCategory->name";
        $metaDescription = $subCategory->meta_description ?? $metaDescription;
    }
@endphp

@extends("landing.layout")
@section("title", $title)
@section("meta_title", (string) $metaTitle)
@section("og_image")
    <meta property="og:image" content="{{ $brand->logo?->url }}" />
    @foreach ($products->take(2) as $product)
        <meta property="og:image" content="{{ $product->image?->url }}" />
    @endforeach
@endsection

@push("meta")
    <meta name="description" content="{{ $metaDescription }}" />
    <meta property="og:title" content="{{ $metaTitle }}" />
    <meta property="og:description" content="{{ $metaDescription }}" />
    <meta property="og:type" content="product.group" />
@endpush

@section("content")
    <div class="w-full">
        <div
            class="relative w-full bg-cover bg-center bg-no-repeat"
            style="
                background-image: url('{{ asset("/images/01-Cover.webp") }}');
            "
        >
            <x-ui.navbar />
            <div
                class="flex w-full flex-col items-center justify-center gap-5 pt-16 pb-42 md:gap-10"
            >
                <h1
                    class="px-5 text-center text-4xl leading-12 font-bold text-landing-primary md:text-5xl md:leading-20"
                >
                    {{ $brand->brand_title }}
                </h1>
                <p
                    class="px-5 text-center text-2xl text-landing-primary md:px-20 md:text-3xl"
                >
                    {{ $brand->subtitle }}
                </p>
            </div>

            <div
                class="absolute -bottom-10 flex w-full flex-wrap justify-center px-10 md:-bottom-12 md:px-38"
            >
                <img
                    src="{{ $brand->logo?->url }}"
                    class="w-1/2 rounded-lg shadow-xl md:w-1/5 md:rounded-xl"
                    alt="{{ $brand->logo_alt }}"
                    title="{{ $brand->logo_description }}"
                />
            </div>
        </div>

        <div
            class="h-full w-full bg-repeat"
            style="background-image: url('{{ asset("/images/08-BG.svg") }}')"
        >
            <div
                class="flex h-full w-full flex-col items-start justify-between px-10 py-10 pt-20 md:flex-row md:px-36 md:py-36"
            >
                <div
                    class="flex w-full flex-col items-start justify-between md:w-[35%] md:items-center"
                >
                    <h1
                        class="w-full text-start text-2xl font-bold md:text-4xl"
                    >
                        {{ trans("site.categories") }}
                    </h1>
                    <div
                        class="flex w-full flex-row flex-wrap items-start gap-5 pt-5 md:flex-col"
                    >
                        @foreach ($categories->sortBy("sort_index") as $c)
                            <div class="flex flex-col gap-2">
                                <a
                                    class="flex w-full cursor-pointer items-center gap-5"
                                    href="{{ route("landing.brands.show", [
                                            "brandSlug" => $brand->slug,
                                            "categorySlug" => $c->slug,
                                        ]), }}"
                                >
                                    <input
                                        type="checkbox"
                                        class="h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-gray-300 checked:bg-landing-primary focus:ring-2 focus:ring-landing-primary/80"
                                        @checked(in_array($c->id, $productsCategories) || $c->children->some(fn ($child) => in_array($child->id, $productsCategories)))
                                        onclick="
                                        event.preventDefault();
                                        window.location.href = '{{ route("landing.brands.show", [
                                                "brandSlug" => $brand->slug,
                                                "categorySlug" => $c->slug,
                                            ]), }}'"
                                    />
                                    <label
                                        class="cursor-pointer text-lg md:text-2xl"
                                    >
                                        {{ $c->name }}
                                    </label>
                                </a>
                                @foreach ($c->children->sortBy("sort_index") as $child)
                                    <a
                                        class="ms-10 flex w-full cursor-pointer items-center gap-5"
                                        href="{{ route("landing.brands.show", [
                                                "brandSlug" => $brand->slug,
                                                "categorySlug" => $child->parent?->slug,
                                                "subCategorySlug" => $child->slug,
                                            ]), }}"
                                    >
                                        <input
                                            type="checkbox"
                                            class="h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-gray-300 checked:bg-landing-primary focus:ring-2 focus:ring-landing-primary/80"
                                            @checked(in_array($child->id, $productsCategories))
                                            onclick="event.preventDefault(); window.location.href = '{{ route("landing.brands.show", [
                                                    "brandSlug" => $brand->slug,
                                                    "categorySlug" => $child->parent?->slug,
                                                    "subCategorySlug" => $child->slug,
                                                ]), }}';"
                                        />
                                        <label
                                            class="cursor-pointer text-lg md:text-2xl"
                                        >
                                            {{ $child->name }}
                                        </label>
                                    </a>
                                @endforeach
                            </div>
                        @endforeach
                    </div>
                </div>

                <div
                    class="flex h-full w-full flex-col gap-5 pt-5 md:w-[65%] md:pt-0"
                >
                    <form
                        method="GET"
                        action="{{ url()->current() }}"
                        class="w-full"
                    >
                        <div
                            class="flex w-full overflow-hidden rounded-lg border-2 border-landing-primary"
                        >
                            <input
                                type="search"
                                name="search"
                                value="{{ $search }}"
                                placeholder="{{ trans("site.search_products") }}"
                                class="w-full border-none px-4 py-3 text-lg outline-none"
                            />
                            <button
                                type="submit"
                                class="cursor-pointer bg-landing-primary px-6 py-3 font-bold text-white"
                            >
                                {{ trans("site.search") }}
                            </button>
                        </div>
                    </form>

                    @if ($search)
                        <div class="flex items-center gap-3 text-sm">
                            <span class="text-gray-500">
                                {{ $products->count() }}
                                {{ trans("site.results_for") }}
                                &ldquo;{{ $search }}&rdquo;
                            </span>
                            <a
                                href="{{ url()->current() }}"
                                class="font-semibold text-landing-secondary underline"
                            >
                                {{ trans("site.clear_search") }}
                            </a>
                        </div>
                    @endif

                    <div
                        class="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-3"
                    >
                        @foreach ($products as $product)
                            <div
                                class="flex h-full w-full flex-col gap-3 overflow-hidden rounded-md border-2 border-landing-primary bg-white pb-2"
                            >
                                <div
                                    class="h-full min-h-60 w-full md:max-h-72 md:min-h-72"
                                >
                                    <img
                                        src="{{ $product->image?->url }}"
                                        class="h-[80%] max-h-[80%] w-full object-cover"
                                        alt="{{ $product->name }}"
                                    />
                                    <h1
                                        class="mb-2 flex h-[20%] w-full items-center justify-center bg-landing-primary font-bold text-landing-secondary"
                                    >
                                        {{ $product->name }}
                                    </h1>
                                </div>
                                @if (isset($product->description))
                                    <p class="h-full p-2 text-sm whitespace-pre-line">{{ $product->description }}</p>
                                @endif

                                <a
                                    href="{{ $product->pdf?->url }}"
                                    target="_blank"
                                    class="w-full px-2"
                                >
                                    <button
                                        class="w-full cursor-pointer rounded-md bg-landing-secondary px-5 py-3 text-center font-bold text-white"
                                    >
                                        {{ trans("site.download_pdf") }}
                                    </button>
                                </a>
                                @if (isset($product->video))
                                    <a
                                        href="{{ $product->video?->url }}"
                                        target="_blank"
                                        class="w-full px-2"
                                        download
                                    >
                                        <button
                                            class="w-full cursor-pointer rounded-md bg-landing-secondary px-5 py-3 text-center font-bold text-white"
                                        >
                                            {{ trans("site.download_video") }}
                                        </button>
                                    </a>
                                @endif
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
        <x-ui.footer />
    </div>
@endsection

@push("scripts")
    <script type="application/ld+json">
        {
                "@@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
        @foreach ($products as $index => $product)
            {
              "@type": "ListItem",
              "position": {{ $index + 1 }},
                    "url": "{{ url()->current() }}",
                    "name": "{{ $product->name }}",
                    "image": "{{ $product->image?->url }}"
                  }
            @if(!$loop->last)
                ,
            @endif
        @endforeach
               ]
        }
    </script>
@endpush
