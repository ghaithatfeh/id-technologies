import { asset } from "@/helper";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isRTL = i18n.language === "ar";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div
                className={
                    "flex items-center justify-between max-h-[13%] px-10 md:ps-28 md:pe-10 py-16"
                }
            >
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-landing-primary z-50"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-8 h-8" />
                    ) : (
                        <Menu className="w-8 h-8" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav
                    className={
                        "hidden md:flex items-center gap-24 w-3/4 text-landing-primary text-xl font-bold ps-13"
                    }
                >
                    <Link
                        href={route("landing.index")}
                        className={"text-landing-primary"}
                    >
                        {t("home")}
                    </Link>

                    <Link href={""}>{t("customer")}</Link>

                    <Link href={""}>{t("about_us")}</Link>

                    <Link href={""}>{t("our_projects")}</Link>

                    <Link href={""}>{t("ar")}</Link>
                </nav>

                <img
                    src={asset("/images/02-Logo.svg")}
                    className={"w-28 h-full"}
                    alt={"id-technologies logo"}
                />
            </div>

            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed top-0 ${isRTL ? "right-0" : "left-0"} h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
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
                        className="text-landing-primary text-xl font-bold hover:opacity-70 transition-opacity"
                        onClick={toggleMenu}
                    >
                        {t("home")}
                    </Link>

                    <Link
                        href={""}
                        className="text-landing-primary text-xl font-bold hover:opacity-70 transition-opacity"
                        onClick={toggleMenu}
                    >
                        {t("customer")}
                    </Link>

                    <Link
                        href={""}
                        className="text-landing-primary text-xl font-bold hover:opacity-70 transition-opacity"
                        onClick={toggleMenu}
                    >
                        {t("about_us")}
                    </Link>

                    <Link
                        href={""}
                        className="text-landing-primary text-xl font-bold hover:opacity-70 transition-opacity"
                        onClick={toggleMenu}
                    >
                        {t("our_projects")}
                    </Link>

                    <Link
                        href={""}
                        className="text-landing-primary text-xl font-bold hover:opacity-70 transition-opacity"
                        onClick={toggleMenu}
                    >
                        {t("ar")}
                    </Link>
                </nav>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};

export default Navbar;
