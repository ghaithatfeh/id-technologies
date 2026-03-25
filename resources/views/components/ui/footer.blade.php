<div
    style="
        background-image: url('{{ asset("/images/BackgroundFooter.png") }}');
        background-size: cover;
    "
    class="py-10"
>
    <div class="md:p-10">
        <h2
            class="px-10 py-5 text-center text-2xl leading-12 font-bold text-wrap text-landing-primary md:px-72"
        >
            {{ trans("site.home_footer_quote") }}
        </h2>

        <!-- Contact Grid -->
        <div
            class="grid w-full items-start gap-6 px-6 py-5 text-lg text-white md:grid-cols-3 md:gap-10 md:px-20"
            dir="ltr"
        >
            <!-- Email Column -->
            <div class="flex flex-col gap-3">
                @foreach (["sales1@idtechco.com", "sales2@idtechco.com", "sales4@idtechco.com"] as $email)
                    <a
                        href="mailto:{{ $email }}"
                        class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-landing-primary hover:text-black"
                    >
                        <i
                            class="me-3 text-landing-primary group-hover:text-black"
                            data-lucide="mail"
                        ></i>
                        <span class="truncate">{{ $email }}</span>
                    </a>
                @endforeach
            </div>

            <!-- WhatsApp/Phone Column -->
            <div class="flex flex-col gap-3">
                @foreach ([
                        "+963 933 303 939" => "963933303939",
                        "+963 935 288 888" => "963935288888",
                        "+963 932 865 566" => "963932865566"
                    ]
                    as $display => $value)
                    <a
                        href="https://wa.me/{{ $value }}"
                        target="_blank"
                        class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-landing-primary hover:text-black"
                    >
                        <i
                            class="me-3 text-landing-primary group-hover:text-black"
                            data-lucide="phone"
                        ></i>
                        <span dir="ltr">{{ $display }}</span>
                    </a>
                @endforeach
            </div>

            <!-- Social/Web Column -->
            <div class="flex flex-col gap-3">
                <a
                    href="https://www.idtechcho.com"
                    target="_blank"
                    class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-landing-primary hover:text-black"
                >
                    <i
                        class="me-3 text-landing-primary group-hover:text-black"
                        data-lucide="globe-2"
                    ></i>
                    <span>www.idtechcho.com</span>
                </a>
                <a
                    href="https://www.facebook.com/IDTechco/"
                    target="_blank"
                    class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-landing-primary hover:text-black"
                >
                    <i
                        class="me-3 text-landing-primary group-hover:text-black"
                        data-lucide="facebook"
                    ></i>
                    <span>ID Technologies Co</span>
                </a>
                <a
                    href="https://www.linkedin.com/company/id-technologies-co/"
                    target="_blank"
                    class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-landing-primary hover:text-black"
                >
                    <i
                        class="me-3 text-landing-primary group-hover:text-black"
                        data-lucide="linkedin"
                    ></i>
                    <span>ID Technologies Co</span>
                </a>
            </div>
        </div>

        <!-- Google Maps Section -->
        <div class="mt-10 flex justify-center px-6">
            <a
                href="https://www.google.com/maps/search/?api=1&query=ID+Technologies+Co"
                target="_blank"
                class="flex w-full items-center justify-center rounded-full bg-landing-primary px-10 py-4 text-xl font-bold text-landing-secondary transition-all duration-300 hover:scale-105 hover:bg-landing-secondary hover:text-landing-primary hover:shadow-lg hover:shadow-landing-primary/20 md:w-auto"
            >
                <i class="me-3" data-lucide="map-pin"></i>
                {{ trans("site.find_us_on_maps") }}
            </a>
        </div>
    </div>
</div>
