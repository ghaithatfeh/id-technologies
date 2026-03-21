@php
    use Illuminate\Support\Facades\Route;
@endphp

<div
    class="mb-8 flex max-h-[13vh] items-center justify-between px-5 py-5 md:px-40 md:py-10"
>
    <button
        id="navbar-toggle"
        class="z-50 text-landing-primary md:hidden"
        aria-label="Toggle Menu"
        data-isopen="false"
    >
        <i id="menu-icon" data-lucide="menu"></i>
        <i id="close-icon" data-lucide="x" class="hidden"></i>
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

        <a
            class="cursor-pointer text-xl font-bold text-landing-primary transition-opacity hover:opacity-70"
            href="{{
                route(Route::currentRouteName(), [
                    ...request()
                        ->route()
                        ->parameters(),
                    "locale" => app()->getLocale() == "en" ? "ar" : "en",
                ])
            }}"
        >
            {{ app()->getLocale() == "en" ? trans("site.ar") : trans("site.en") }}
        </a>
    </nav>
    <img
        src="{{ asset("/images/02-Logo.png") }}"
        class="h-full w-32 md:w-36"
        alt="id-technologies logo"
    />
</div>

<div
    id="mobile-nav-container"
    class="{{ app()->getLocale() == "ar" ? "right-0 translate-x-full" : "left-0 -translate-x-full" }} fixed top-0 z-40 h-full w-64 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
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

        <a
            class="cursor-pointer text-xl font-bold text-landing-primary transition-opacity hover:opacity-70"
            href="{{
                route(Route::currentRouteName(), [
                    ...request()
                        ->route()
                        ->parameters(),
                    "locale" => app()->getLocale() == "en" ? "ar" : "en",
                ])
            }}"
        >
            {{ app()->getLocale() == "en" ? trans("site.ar") : trans("site.en") }}
        </a>
    </nav>
</div>

@push("scripts")
    <script type="module">
        document.addEventListener('DOMContentLoaded', () => {
            const navbarToggle = document.getElementById('navbar-toggle');
            const mobileNavContainer = document.getElementById(
                'mobile-nav-container',
            );
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');

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
                    mobileNavContainer.classList.remove(
                        'translate-x-full',
                        '-translate-x-full',
                    );
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');

                    if (!document.getElementById('mobile-menu-overlay')) {
                        const overlay = document.createElement('div');
                        overlay.classList.add(
                            'fixed',
                            'inset-0',
                            'z-30',
                            'bg-black',
                            'bg-opacity-50',
                            'md:hidden',
                        );
                        overlay.id = 'mobile-menu-overlay';
                        overlay.addEventListener('click', onToggleMenu);
                        document.body.appendChild(overlay);
                    }
                } else {
                    document.getElementById('mobile-menu-overlay')?.remove();
                    mobileNavContainer.classList.remove('translate-x-0');
                    if ('{{ app()->getLocale() }}' == 'ar') {
                        mobileNavContainer.classList.add('translate-x-full');
                    } else {
                        mobileNavContainer.classList.add('-translate-x-full');
                    }
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }

            navbarToggle.addEventListener('click', onToggleMenu);
        });
    </script>
@endpush
