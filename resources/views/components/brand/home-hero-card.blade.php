<div
    class="group relative flex h-full min-h-42 w-full items-center justify-center overflow-visible rounded-t-3xl border-b-8 border-b-landing-primary bg-white px-4 pt-6 pb-10 shadow-xl"
>
    <div class="absolute inset-0 z-0">
        <div
            class="absolute inset-0 rounded-t-lg bg-white bg-[length:125%_130%] bg-center bg-no-repeat"
        ></div>

        <div
            class="absolute inset-0 rounded-t-lg bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            style="background-image: url('{{ $background }}')"
        ></div>
    </div>

    <p class="relative z-10 text-center text-lg font-bold text-wrap">
        {!! $highlightBrandNames($content) !!}
    </p>

    <div
        class="absolute -bottom-9 left-0 z-20 flex w-full items-center justify-center"
    >
        <img
            src="{{ $icon }}"
            class="h-16 w-16 rounded-lg bg-landing-secondary p-2 shadow-md"
        />
    </div>
</div>
