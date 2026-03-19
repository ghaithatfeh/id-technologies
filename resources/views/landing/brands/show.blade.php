@php
    /** @var \App\Models\Brand $brand */
    /** @var \App\Models\Category|null $category */
    /** @var \Illuminate\Database\Eloquent\Collection<\App\Models\Product> $products */
    /** @var int $subCategoryId */
    /** @var \Illuminate\Database\Eloquent\Collection|null $categories  */
@endphp

@extends("landing.layout")
@section("content")
    <div class="w-full">
        <div
            class="relative w-full bg-cover bg-center bg-no-repeat"
            style="
                background-image: url('{{ asset("/images/01-Cover.png") }}');
            "
        >
            <x-ui.navbar />
            <div class="flex w-full items-center justify-center pt-16 pb-42">
                <h1
                    class="px-5 text-center text-4xl leading-12 font-bold text-landing-primary md:text-5xl md:leading-20"
                >
                    {{ $brand->brand_title }}
                </h1>
            </div>

            <div
                class="absolute -bottom-10 flex w-full flex-wrap justify-center px-10 md:-bottom-12 md:px-38"
            >
                <img
                    src="{{ $brand->logo?->url }}"
                    class="w-1/2 rounded-lg shadow-xl md:w-1/5 md:rounded-xl"
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
                                            "brandId" => $brand->id,
                                            "categoryId" => $c->id,
                                        ]), }}"
                                >
                                    <input
                                        type="checkbox"
                                        class="h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-gray-300 checked:bg-landing-primary focus:ring-2 focus:ring-landing-primary/80"
                                        @checked($c->id == $category->id)
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
                                                "brandId" => $brand->id,
                                                "categoryId" => $child->parent_id,
                                                "subCategoryId" => $child->id,
                                            ]), }}"
                                    >
                                        <input
                                            type="checkbox"
                                            class="h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-gray-300 checked:bg-landing-primary focus:ring-2 focus:ring-landing-primary/80"
                                            @checked($child->id == $subCategoryId)
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
                    class="grid h-full w-full grid-cols-1 gap-5 pt-5 md:w-[65%] md:grid-cols-3 md:pt-0"
                >
                    @foreach ($products as $product)
                        <div class="flex h-full w-full flex-col gap-3">
                            <div
                                class="h-full min-h-60 w-full rounded-t-xl border-2 border-landing-primary md:max-h-72 md:min-h-72"
                            >
                                <img
                                    src="{{ $product->image?->url }}"
                                    class="h-[80%] max-h-[80%] w-full rounded-t-xl object-cover"
                                    alt="{{ $product->name }}"
                                />
                                <h1
                                    class="flex h-[20%] w-full items-center justify-center bg-landing-primary font-bold"
                                >
                                    {{ $product->name }}
                                </h1>
                            </div>
                            <a
                                href="{{ $product->pdf?->url }}"
                                target="_blank"
                                class="w-full"
                                download
                            >
                                <button
                                    class="w-full cursor-pointer bg-landing-secondary px-5 py-3 text-center font-bold text-white"
                                >
                                    {{ trans("site.download_pdf") }}
                                </button>
                            </a>
                            @if (isset($product->video))
                                <a
                                    href="{{ $product->video?->url }}"
                                    target="_blank"
                                    class="w-full"
                                    download
                                >
                                    <button
                                        class="w-full cursor-pointer bg-landing-secondary px-5 py-3 text-center font-bold text-white"
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
        <x-ui.footer />
    </div>
@endsection
