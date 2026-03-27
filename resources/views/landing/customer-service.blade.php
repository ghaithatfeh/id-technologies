@php
    use App\Models\SupportLink;
    use Illuminate\Support\Collection;

    /** @var Collection<SupportLink> $supportLinks*/
@endphp

@extends("landing.layout")

@push("meta")
    <meta property="og:image" content="{{ asset("/images/02-Logo.webp") }}" />
@endpush

@section("title", " - " . trans("site.customer_service"))
@section("content")
    <div
        class="relative w-full bg-[url('/images/01-Cover.webp')] bg-cover bg-center bg-no-repeat"
        style="background-image: url('{{ asset("images/01-Cover.webp") }}')"
    >
        <x-ui.navbar />
        <div class="flex h-full w-full flex-col items-center gap-2 pt-16 pb-42">
            <h1
                class="px-5 text-center text-4xl leading-12 font-bold text-landing-primary md:text-5xl md:leading-20"
            >
                {{ trans("site.customer") }}
            </h1>
            <div class="w-1/3 md:w-1/8">
                <img
                    src="{{ asset("/images/02-Icon.webp") }}"
                    class="h-full w-full"
                />
            </div>
        </div>
        <div
            class="center absolute -bottom-12 left-1/2 flex w-full max-w-[90rem] -translate-x-1/2 flex-wrap justify-center gap-2 md:gap-10 md:px-38"
        >
            <img
                class="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                src="{{ asset("/images/03-Brand01.webp") }}"
            />
            <img
                class="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                src="{{ asset("/images/04-Brand02.webp") }}"
            />
            <img
                class="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                src="{{ asset("/images/05-Brand03.webp") }}"
            />
            <img
                class="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                src="{{ asset("/images/06-Brand04.webp") }}"
            />
        </div>
    </div>

    <div
        class="h-full w-full py-10 pt-30 md:py-48"
        style="
            background-image: url('{{ asset("/images/08-BG.svg") }}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        "
    >
        <div
            class="mx-auto flex w-full max-w-[83rem] items-center justify-between px-5 md:grid-cols-4 md:px-38"
        >
            <div
                class="grid h-full w-full grid-cols-4 items-center border border-landing-primary bg-transparent shadow-2xl"
            >
                <h1
                    class="bg-landing-primary px-5 py-4 font-bold text-wrap md:text-xl ltr:border-r-2 ltr:border-r-white rtl:border-l-2 rtl:border-l-white"
                >
                    {{ trans("site.product") }}
                </h1>
                <h1
                    class="bg-landing-primary px-5 py-4 font-bold text-wrap md:text-xl ltr:border-r-2 ltr:border-r-white rtl:border-l-2 rtl:border-l-white"
                >
                    {{ trans("site.type") }}
                </h1>
                <h1
                    class="col-span-2 bg-landing-primary px-5 py-4 font-bold text-wrap md:text-xl"
                >
                    {{ trans("site.link") }}
                </h1>
                @foreach ($supportLinks as $link)
                    <h2
                        class="md:text-md h-full border border-landing-primary p-5 text-sm font-bold text-wrap break-words"
                    >
                        {{ $link->product_name }}
                    </h2>
                    <h2
                        class="md:text-md h-full border border-landing-primary p-5 text-sm font-bold text-wrap break-words"
                    >
                        {{ $link->type }}
                    </h2>
                    <a
                        href="{{ $link->link }}"
                        target="_blank"
                        class="md:text-md col-span-2 h-full border border-landing-primary p-5 text-sm text-wrap break-all hover:underline"
                    >
                        {{ $link->link }}
                    </a>
                @endforeach
            </div>
        </div>
    </div>

    <x-ui.footer />
@endsection
