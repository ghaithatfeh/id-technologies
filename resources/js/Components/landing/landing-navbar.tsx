import { asset } from "@/helper";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LOCALE_STORAGE_KEY } from "@/providers/locale-provider";
import HTTP from "@/Modules/Http/Http";

const LandingNavbar = () => {
    const {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isRTL = language === "ar";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = async (locale: string) => {
        await HTTP.make().post(route("set-locale"), {
            lang: locale,
        });
        await changeLanguage(locale);
        window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
        toggleMenu();
    };

    return (
        <>
            <div
                className={
                    "flex max-h-[13%] items-center justify-between px-5 py-5 md:py-10 md:px-40 mb-8"
                }
            >
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="text-landing-primary z-50 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-8 w-8" />
                    ) : (
                        <Menu className="h-8 w-8" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav
                    className={
                        "text-landing-primary hidden w-3/4 items-center gap-20 text-lg font-bold md:flex"
                    }
                >
                    <Link
                        className={"hover:underline"}
                        href={route("landing.index")}
                    >
                        {t("home")}
                    </Link>

                    <Link
                        className={"hover:underline"}
                        href={""}
                    >
                        {t("customer")}
                    </Link>

                    <Link className={"hover:underline"} href={""}>
                        {t("about_us")}
                    </Link>

                    <Link className={"hover:underline"} href={""}>
                        {t("our_projects")}
                    </Link>

                    <Link
                        href={""}
                        onClick={() => {
                            handleLanguageChange(
                                language === "ar" ? "en" : "ar",
                            );
                        }}
                        className={"hover:underline"}
                    >
                        {language == "en" ? t("ar") : t("en")}
                    </Link>
                </nav>

                <img
                    src={asset("/images/02-Logo.svg")}
                    className={"h-full w-32"}
                    alt={"id-technologies logo"}
                />
            </div>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 ${isRTL ? "right-0" : "left-0"} z-40 h-full w-64 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
                    isMenuOpen
                        ? "translate-x-0"
                        : isRTL
                          ? "translate-x-full"
                          : "-translate-x-full"
                }`}
            >
                <nav className="flex flex-col gap-6 p-8 pt-24">
                    <Link
                        href={route("landing.index")}
                        className="text-landing-primary text-xl font-bold transition-opacity hover:opacity-70"
                        onClick={toggleMenu}
                    >
                        {t("home")}
                    </Link>

                    <Link
                        href={route("landing.customer.service")}
                        className="text-landing-primary text-xl font-bold transition-opacity hover:opacity-70"
                        onClick={toggleMenu}
                    >
                        {t("customer")}
                    </Link>

                    <Link
                        href={""}
                        className="text-landing-primary text-xl font-bold transition-opacity hover:opacity-70"
                        onClick={toggleMenu}
                    >
                        {t("about_us")}
                    </Link>

                    <Link
                        href={""}
                        className="text-landing-primary text-xl font-bold transition-opacity hover:opacity-70"
                        onClick={toggleMenu}
                    >
                        {t("our_projects")}
                    </Link>

                    <Link
                        href={""}
                        onClick={() => {
                            handleLanguageChange(
                                language === "ar" ? "en" : "ar",
                            );
                        }}
                    >
                        {language == "en" ? t("ar") : t("en")}
                    </Link>
                </nav>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};

export default LandingNavbar;
