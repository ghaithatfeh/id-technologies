<div
    class="mb-8 flex max-h-[13vh] items-center justify-between px-5 py-5 md:px-40 md:py-10"
>
    <button
        id="navbar-toggle"
        class="z-50 text-landing-primary md:hidden"
        aria-label="Toggle Menu"
        data-isopen="false"
    >
        <i data-lucide="menu"></i>
    </button>
    <nav
        class="hidden w-3/4 items-center gap-20 text-lg font-bold text-landing-primary md:flex"
    >
        <a
            class="{{ urlActive(route("landing.index")) ? "text-white underline" : "" }} hover:text-white"
            href="{{ route("landing.index") }}"
        >
            {{ trans("site.home") }}
        </a>

        <a
            class="{{ urlActive(route("landing.customer.service")) ? "text-white underline" : "" }} hover:text-white"
            href="{{ route("landing.customer.service") }}"
        >
            {{ trans("site.customer_service") }}
        </a>

        <a
            class="{{ urlActive(route("landing.projects.index")) ? "text-white underline" : "" }} hover:text-white"
            href="{{ route("landing.projects.index") }}"
        >
            {{ trans("site.our_projects") }}
        </a>

        <form action="{{ route("set-locale") }}" method="POST">
            @csrf
            <input
                class="hidden"
                hidden
                value="{{ app()->getLocale() == "en" ? "ar" : "en" }}"
            />
            <button type="submit" class="hover:text-white">
                {{ app()->getLocale() == "en" ? trans("site.ar") : trans("site.en") }}
            </button>
        </form>
    </nav>
    <img
        src="{{ asset("/images/02-Logo.png") }}"
        class="h-full w-32 md:w-36"
        alt="id-technologies logo"
    />
</div>

<div
    id="mobile-nav-container"
    class="{{ app()->getLocale() == "ar" ? "right-0" : "left-0" }} fixed top-0 z-40 h-full w-64 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
>
    <nav class="flex flex-col gap-6 p-8 pt-24">
        <a
            class="{{ urlActive(route("landing.index")) ? "underline" : "" }} text-xl font-bold text-landing-primary transition-opacity hover:opacity-70"
            href="{{ route("landing.index") }}"
        >
            {{ trans("site.home") }}
        </a>

        <a
            class="{{ urlActive(route("landing.customer.service")) ? "underline" : "" }} text-xl font-bold text-landing-primary transition-opacity hover:opacity-70"
            href="{{ route("landing.customer.service") }}"
        >
            {{ trans("site.customer_service") }}
        </a>

        <a
            class="{{ urlActive(route("landing.projects.index")) ? "underline" : "" }} text-xl font-bold text-landing-primary transition-opacity hover:opacity-70"
            href="{{ route("landing.projects.index") }}"
        >
            {{ trans("site.our_projects") }}
        </a>

        <form action="{{ route("set-locale") }}" method="POST">
            @csrf
            <input
                class="hidden"
                hidden
                value="{{ app()->getLocale() == "en" ? "ar" : "en" }}"
            />
            <button
                type="submit"
                class="text-xl font-bold text-landing-primary transition-opacity hover:opacity-70"
            >
                {{ app()->getLocale() == "en" ? trans("site.ar") : trans("site.en") }}
            </button>
        </form>
    </nav>
</div>

@push("scripts")
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const navbarToggle = document.getElementById('navbar-toggle');
            const mobileNavContainer = document.getElementById(
                'mobile-nav-container',
            );

            function onToggleMenu() {
                navbarToggle.setAttribute(
                    'data-isopen',
                    navbarToggle.getAttribute('data-isopen') === 'true'
                        ? 'false'
                        : 'true',
                );
                const isOpen =
                    navbarToggle.getAttribute('data-isopen') === 'true';
                if (isOpen) {
                    mobileNavContainer.classList.add('translate-x-0');
                    mobileNavContainer.classList.remove('translate-x-full');
                    mobileNavContainer.classList.remove('-translate-x-full');
                    navbarToggle.innerHTML = '  <i data-lucide="x"></i>';
                    if (!document.getElementById('mobile-menu-overlay')) {
                        const overlay = document.createElement('div');
                        overlay.classList.add(
                            'fixed inset-0 z-30 bg-black opacity-50 md:hidden',
                        );
                        overlay.id = 'mobile-menu-overlay';
                        document.body.prepend(overlay);
                    }
                } else {
                    document.getElementById('mobile-menu-overlay')?.remove();
                    mobileNavContainer.classList.remove('translate-x-0');
                    if ('{{ app()->getLocale() }}' == 'ar') {
                        mobileNavContainer.classList.add('translate-x-full');
                    } else {
                        mobileNavContainer.classList.add('-translate-x-full');
                    }
                    navbarToggle.innerHTML = '  <i data-lucide="menu"></i>';
                }
            }

            navbarToggle.addEventListener('onclick', onToggleMenu);
        });
    </script>
@endpush
