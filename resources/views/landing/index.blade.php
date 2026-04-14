@php
    use App\Models\Brand;
    use App\Models\Product;

    /** @var Product $featuredProduct */
    /** @var Brand[] $brands */
@endphp

@extends("landing.layout")
@section("title", " - " . trans("site.home"))
@section("content")
    <div
        class="relative w-full"
        style="
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-image: {{ app()->getLocale() == "ar" ? "url(" . asset("images/01-BGRTL.webp") . ")" : "url(" . asset("images/01-BG.webp") . ")" }};
        "
    >
        <x-contact-floating-utility/>

        <x-ui.navbar />
        <div
            class="flex h-full w-full flex-col items-center justify-between gap-4 px-10 pb-24 md:flex-row md:px-16 md:pe-32 md:pb-46"
        >
            <div class="flex w-full max-w-4xl flex-col items-start md:ps-26">
                <h2 class="mb-3 text-2xl font-bold text-landing-primary">
                    {{ trans("site.partners_in_development") }}
                </h2>
                <div class="mt-6 flex flex-col gap-8">
                    <div class="flex items-start gap-2">
                        <span
                            class="my-2 me-2 rounded-md border border-landing-primary p-2"
                        ></span>
                        <p class="text-xl leading-8 text-white">
                            {{ trans("site.hero_first_title") }}
                        </p>
                    </div>
                    <div class="flex items-start gap-2">
                        <span
                            class="my-2 me-2 rounded-md border border-landing-primary p-2"
                        ></span>
                        <p class="text-xl leading-8 text-white">
                            {{ trans("site.hero_second_title") }}
                        </p>
                    </div>
                    <div class="flex items-start gap-2">
                        <span
                            class="my-2 me-2 rounded-md border border-landing-primary p-2"
                        ></span>
                        <p class="text-xl leading-8 text-white">
                            {{ trans("site.hero_third_title") }}
                        </p>
                    </div>
                </div>
            </div>

            @if (isset($featuredProduct))
                <div class="mt-24 md:mt-12">
                    <a
                        href="{{ route("landing.brands.show", [
                                "brandSlug" => $featuredProduct->category?->brand->slug,
                                "categorySlug" => $featuredProduct->category?->slug,
                            ]), }}"
                    >
                        <div
                            class="hover:shadow-3xl group relative max-h-full rounded-xl bg-landing-primary p-5 pb-2 shadow-xl transition-shadow duration-300"
                        >
                            <h1
                                class="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded-full border-2 border-landing-primary bg-white px-5 py-2 text-center font-bold whitespace-nowrap"
                            >
                                {{ trans("site.featured_product") }}
                            </h1>
                            <img
                                src="{{ $featuredProduct->image?->url }}"
                                class="h-44 w-52 rounded object-cover transition-transform duration-300 group-hover:scale-102"
                                alt="{{ trans("site.featured_product") }}"
                            />
                            <h2
                                class="mt-2 w-full text-center text-xl font-bold"
                            >
                                {{ $featuredProduct->name }}
                            </h2>
                        </div>
                    </a>
                </div>
            @endif
        </div>

        <div
            class="-bottom-[12%] grid w-full grid-cols-2 items-center justify-between gap-4 px-6 md:absolute md:grid-cols-4 md:gap-10 md:px-44"
        >
            @foreach ($brands as $brand)
                <a
                    class="h-full w-full max-w-[17rem]"
                    href="{{
                        route("landing.brands.show", [
                            "brandSlug" => $brand->slug,
                        ])
                    }}"
                >
                    <x-brand.home-hero-card :brand="$brand" />
                </a>
            @endforeach
        </div>
    </div>

    <div
        class="flex w-full flex-col items-start justify-between gap-16 px-10 pt-24 md:px-24 md:pt-52"
        style="
            background-image: url('{{ asset("images/08-BG.svg") }}');
            background-size: cover;
            background-repeat: no-repeat;
        "
    >
        <div class="flex w-full flex-col items-start">
            <h2
                class="w-50 bg-landing-primary py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
            >
                {{ trans("site.about_us") }}:
            </h2>
            <div
                class="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80 rtl:bg-gradient-to-l"
            ></div>
            <p class="mt-5 text-lg leading-10 font-semibold md:pe-24">
                {{ trans("site.about_us_description") }}
            </p>
        </div>
        <div class="flex w-full flex-col items-start">
            <h2
                class="w-50 bg-landing-primary py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
            >
                {{ trans("site.our_mission") }}:
            </h2>
            <div
                class="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80 rtl:bg-gradient-to-l"
            ></div>
            <p class="mt-5 text-lg leading-10 font-semibold md:pe-24">
                {{ trans("site.our_mission_description") }}
            </p>
        </div>
        <div class="flex w-full flex-col items-start">
            <h2
                class="w-50 bg-landing-primary py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
            >
                {{ trans("site.our_vision") }}:
            </h2>
            <div
                class="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80 rtl:bg-gradient-to-l"
            ></div>
            <p class="mt-5 text-lg leading-10 font-semibold md:pe-24">
                {{ trans("site.our_vision_description") }}
            </p>
        </div>
        <h2
            class="mt-16 w-50 bg-landing-primary py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
        >
            {{ trans("site.our_services") }}:
        </h2>
    </div>

    <div class="relative flex w-full flex-col items-start">
        <div
            class="w-full bg-landing-secondary px-10 py-10 md:px-24"
            style="
                background-image: url('{{ asset("images/08-BG.svg") }}');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-attachment: fixed;
            "
        >
            <div class="flex w-full flex-col items-start py-8">
                <h2 class="text-2xl font-bold text-landing-primary">
                    {{ trans("site.our_services_description") }}:
                </h2>
                <div
                    class="mt-10 flex flex-col items-start gap-6 text-xl text-white"
                >
                    <div class="flex items-start gap-4">
                        <img
                            src="{{ asset("images/Icon01.svg") }}"
                            class="size-12 rounded-lg p-2"
                        />
                        <p class="leading-10">
                            {!! trans("site.service_security_services") !!}
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <img
                            src="{{ asset("images/Icon02.svg") }}"
                            class="size-12 rounded-lg p-2"
                        />
                        <p class="leading-10">
                            {!! trans("site.service_plastic_cards") !!}
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <img
                            src="{{ asset("images/Icon04.svg") }}"
                            class="size-12 rounded-lg p-2"
                        />
                        <p class="leading-10">
                            {!! trans("site.service_barcodes_systems") !!}
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <img
                            src="{{ asset("images/Icon03.svg") }}"
                            class="size-12 rounded-lg p-2"
                        />
                        <p class="leading-10">
                            {!! trans("site.service_gaming") !!}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="w-full pt-12 pb-16"
        style="
            background-image: url('{{ asset("images/08-BG.svg") }}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
        "
    >
        <!-- Brand Logos Section -->
        <div
            class="flex w-full max-w-full grid-cols-4 flex-wrap items-center justify-center gap-10 px-10 py-10 md:grid md:px-52"
        >
            <img
                src="{{ asset("images/11-Brand.webp") }}"
                class="w-46 opacity-80 transition-opacity hover:opacity-100 md:w-auto"
                alt="brand-logo"
            />
            <img
                class="w-46 opacity-80 transition-opacity hover:opacity-100 md:w-auto"
                alt="brand-logo"
                src="{{ asset("/images/10-Brand.svg") }}"
            />
            <img
                class="w-46 opacity-80 transition-opacity hover:opacity-100 md:w-auto"
                alt="brand-logo"
                src="{{ asset("/images/12-Brand.webp") }}"
            />
            <img
                class="w-46 opacity-80 transition-opacity hover:opacity-100 md:w-auto"
                alt="brand-logo"
                src="{{ asset("/images/09-Brand.webp") }}"
            />
        </div>

        <!-- Decorative Divider -->
        <div class="flex items-center justify-center py-5">
            <div class="h-0.5 w-[80vw] bg-black/20 md:w-[75vw]"></div>
        </div>

        <!-- Quote Section -->
        <h2
            class="px-10 py-5 text-center text-2xl leading-12 font-bold text-wrap text-landing-primary md:px-72"
        >
            {{ trans("site.home_footer_quote") }}
        </h2>

        <!-- Interactive Contact Grid -->
        <div
            class="mt-8 grid w-full items-start gap-6 px-10 py-5 text-lg md:grid-cols-3 md:gap-10 md:px-50"
            dir="ltr"
        >
            <!-- Email Column -->
            <div class="flex flex-col gap-4">
                @foreach (["sales1@idtechco.com", "sales2@idtechco.com", "sales4@idtechco.com"] as $email)
                    <a
                        href="mailto:{{ $email }}"
                        class="group flex items-center rounded-xl border border-black/10 bg-white/5 p-3 shadow-sm transition-all duration-300 hover:border-landing-primary hover:bg-landing-primary"
                    >
                        <i
                            data-lucide="mail"
                            class="me-3 text-landing-primary transition-colors group-hover:text-black"
                        ></i>
                        <span
                            class="truncate font-medium text-black group-hover:text-black"
                        >
                            {{ $email }}
                        </span>
                    </a>
                @endforeach
            </div>

            <!-- Phone/WhatsApp Column -->
            <div class="flex flex-col gap-4">
                @foreach ([
                        "+963 933 303 939" => "963933303939",
                        "+963 935 288 888" => "963935288888",
                        "+963 932 865 566" => "963932865566"
                    ]
                    as $display => $val)
                    <a
                        href="https://wa.me/{{ $val }}"
                        target="_blank"
                        class="group flex items-center rounded-xl border border-black/10 bg-white/5 p-3 shadow-sm transition-all duration-300 hover:border-landing-primary hover:bg-landing-primary"
                    >
                        <i
                            data-lucide="phone"
                            class="me-3 text-landing-primary transition-colors group-hover:text-black"
                        ></i>
                        <span
                            dir="ltr"
                            class="font-medium text-black group-hover:text-black"
                        >
                            {{ $display }}
                        </span>
                    </a>
                @endforeach
            </div>

            <!-- Social Column -->
            <div class="flex flex-col gap-4">
                <a
                    href="https://www.idtechcho.com"
                    target="_blank"
                    class="group flex items-center rounded-xl border border-black/10 bg-white/5 p-3 shadow-sm transition-all duration-300 hover:border-landing-primary hover:bg-landing-primary"
                >
                    <i
                        data-lucide="globe-2"
                        class="me-3 text-landing-primary group-hover:text-black"
                    ></i>
                    <span class="font-medium text-black group-hover:text-black">
                        www.idtechcho.com
                    </span>
                </a>
                <a
                    href="https://www.facebook.com/IDTechco/"
                    target="_blank"
                    class="group flex items-center rounded-xl border border-black/10 bg-white/5 p-3 shadow-sm transition-all duration-300 hover:border-landing-primary hover:bg-landing-primary"
                >
                    <i
                        data-lucide="facebook"
                        class="me-3 text-landing-primary group-hover:text-black"
                    ></i>
                    <span class="font-medium text-black group-hover:text-black">
                        ID Technologies Co
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/company/id-technologies-co/"
                    target="_blank"
                    class="group flex items-center rounded-xl border border-black/10 bg-white/5 p-3 shadow-sm transition-all duration-300 hover:border-landing-primary hover:bg-landing-primary"
                >
                    <i
                        data-lucide="linkedin"
                        class="me-3 text-landing-primary group-hover:text-black"
                    ></i>
                    <span class="font-medium text-black group-hover:text-black">
                        ID Technologies Co
                    </span>
                </a>
            </div>
        </div>

        <!-- Google Maps CTA -->
        <div class="mt-12 flex justify-center px-10">
            <a
                href="https://maps.app.goo.gl/c9g4dfcNDoNLYMoGA"
                target="_blank"
                class="flex items-center gap-3 rounded-full bg-landing-secondary px-10 py-4 text-center text-xl font-bold text-landing-primary shadow-xl transition-all hover:scale-105 hover:bg-landing-primary hover:text-landing-secondary"
            >
                <i data-lucide="map-pin"></i>
                {{ trans("site.find_us_on_maps") }}
            </a>
        </div>
    </div>
@endsection
