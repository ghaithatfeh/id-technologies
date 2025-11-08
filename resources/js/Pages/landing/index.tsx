import LandingNavbar from "@/Components/landing/landing-navbar";
import { asset } from "@/helper";
import {
    FacebookIcon,
    Globe2,
    LinkedinIcon,
    Mail,
    PhoneIcon,
    Settings,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import HomeHeroCard from "@/Components/landing/home-hero-card";
import Brand from "@/Models/Brand";
import { translate } from "@/Models/Translatable";
import { Link } from "@inertiajs/react";
import Product from "@/Models/Product";

const Index = ({
    brands,
    featured_product,
}: {
    brands: Brand[];
    featured_product?: Product;
}) => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className={`relative w-full bg-[url('/images/01-BG.jpg')] rtl:bg-[url('/images/01-BGRTL.jpg')]`}
                style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <LandingNavbar />
                <div
                    className={
                        "flex h-full w-full flex-col items-center justify-between gap-4 px-10 pb-24 md:flex-row md:px-16 md:pe-32 md:pb-46"
                    }
                >
                    <div className={"w-full max-w-4xl"}>
                        <h2
                            className={
                                "text-landing-primary mb-3 text-2xl font-bold md:ps-26"
                            }
                        >
                            {t("partners_in_development")}
                        </h2>
                        <div className={"flex items-center gap-12"}>
                            <div
                                className={
                                    "hidden flex-col gap-6 rounded-2xl bg-white px-3 py-6 md:flex"
                                }
                            >
                                <a
                                    target="_blank"
                                    href={"https://wa.me/+963933303939"}
                                >
                                    <PhoneIcon
                                        className={"h-8 w-8"}
                                        strokeWidth={1}
                                    />
                                </a>
                                <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                                <a href="mailto:sales1@idtechco.com">
                                    <Mail
                                        className={"h-8 w-8"}
                                        strokeWidth={1}
                                    />
                                </a>
                                <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                                <Settings
                                    className={"h-8 w-8"}
                                    strokeWidth={1}
                                />
                            </div>

                            <div className={"mt-6 flex flex-col gap-8"}>
                                <div className={"flex items-start gap-2"}>
                                    <span
                                        className={
                                            "border-landing-primary my-2 me-2 rounded-md border p-2"
                                        }
                                    />
                                    <p
                                        className={
                                            "text-xl leading-8 text-white"
                                        }
                                    >
                                        {t("hero_first_title")}
                                    </p>
                                </div>
                                <div className={"flex items-start gap-2"}>
                                    <span
                                        className={
                                            "border-landing-primary my-2 me-2 rounded-md border p-2"
                                        }
                                    />
                                    <p
                                        className={
                                            "text-xl leading-8 text-white"
                                        }
                                    >
                                        {t("hero_second_title")}
                                    </p>
                                </div>
                                <div className={"flex items-start gap-2"}>
                                    <span
                                        className={
                                            "border-landing-primary my-2 me-2 rounded-md border p-2"
                                        }
                                    />
                                    <p
                                        className={
                                            "text-xl leading-8 text-white"
                                        }
                                    >
                                        {t("hero_third_title")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {featured_product && (
                        <div className={"mt-24 md:mt-12"}>
                            <Link
                                href={route("landing.brands.show", {
                                    brandId:
                                        featured_product.category?.brand_id,
                                    categoryId: featured_product.category_id,
                                })}
                            >
                                <div
                                    className={
                                        "bg-landing-primary relative max-h-full rounded-xl p-5 pb-2 shadow-xl hover:shadow-3xl transition-shadow duration-300 group"
                                    }
                                >
                                    <h1
                                        className={
                                            "border-landing-primary absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border-2 bg-white px-5 py-2 text-center font-bold whitespace-nowrap z-10"
                                        }
                                    >
                                        {t("featured_product")}
                                    </h1>
                                    <img
                                        src={featured_product.image?.url}
                                        className={"h-44 w-44 object-cover transition-transform duration-300 group-hover:scale-102 rounded"}
                                        alt={t("featured_product")}
                                    />
                                    <h2
                                        className={
                                            "mt-2 w-full text-center text-xl font-bold"
                                        }
                                    >
                                        {translate(featured_product?.name)}
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="-bottom-[12%] grid w-full grid-cols-2 items-center justify-between gap-4 px-6 md:absolute md:grid-cols-4 md:gap-10 md:px-44">
                    {brands.map((brand) => (
                        <Link
                            className={"h-full w-full"}
                            href={route("landing.brands.show", brand.id)}
                        >
                            <HomeHeroCard
                                content={translate(brand.brand_title)}
                                icon={brand.icon.url}
                                background={brand.background_image.url}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div
                className={
                    "flex w-full flex-col items-start justify-between gap-16 px-10 pt-24 md:px-24 md:pt-52"
                }
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // backgroundAttachment: "fixed",
                }}
            >
                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary w-50 py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                        }
                    >
                        {t("about_us")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80 rtl:bg-gradient-to-l" />
                    <p
                        className={
                            "mt-5 text-lg leading-10 font-semibold md:pe-24"
                        }
                    >
                        {t("about_us_description")}
                    </p>
                </div>

                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary w-50 py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                        }
                    >
                        {t("our_mission")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80 rtl:bg-gradient-to-l" />
                    <p
                        className={
                            "mt-5 text-lg leading-10 font-semibold md:pe-24"
                        }
                    >
                        {t("our_mission_description")}
                    </p>
                </div>

                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary w-50 py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                        }
                    >
                        {t("our_vision")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80 rtl:bg-gradient-to-l" />
                    <p
                        className={
                            "mt-5 text-lg leading-10 font-semibold md:pe-24"
                        }
                    >
                        {t("our_vision_description")}
                    </p>
                </div>

                <h2
                    className={
                        "bg-landing-primary mt-16 w-50 py-5 ps-8 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                    }
                >
                    {t("our_services")}:
                </h2>
            </div>

            <div className={"relative flex w-full flex-col items-start"}>
                <div
                    className={
                        "bg-landing-secondary w-full px-10 py-10 md:px-24"
                    }
                    style={{
                        backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className={"flex w-full flex-col items-start py-8"}>
                        <h2
                            className={
                                "text-landing-primary text-2xl font-bold"
                            }
                        >
                            {t("our_services_description")}:
                        </h2>
                        <div
                            className={
                                "mt-10 flex flex-col items-start gap-6 text-xl text-white"
                            }
                        >
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon01.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">
                                    {t("service_security_services")}
                                </p>
                            </div>
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon02.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">
                                    {t("service_plastic_cards")}
                                </p>
                            </div>
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon04.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">
                                    {t("service_barcodes_systems")}
                                </p>
                            </div>

                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon03.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">
                                    {t("service_gaming")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={"w-full pt-12"}
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div
                    className={
                        "flex w-full max-w-full grid-cols-4 flex-wrap items-center justify-center gap-10 px-10 py-10 md:grid md:px-52"
                    }
                >
                    <img
                        className="w-46 md:w-auto"
                        alt={"brand-logo"}
                        src={asset("/images/11-Brand.png")}
                    />
                    <img
                        className="w-46 md:w-auto"
                        alt={"brand-logo"}
                        src={asset("/images/10-Brand.png")}
                    />
                    <img
                        className="w-46 md:w-auto"
                        alt={"brand-logo"}
                        src={asset("/images/12-Brand.png")}
                    />
                    <img
                        className="w-46 md:w-auto"
                        alt={"brand-logo"}
                        src={asset("/images/09-Brand.png")}
                    />
                </div>

                <div className={"flex items-center justify-center py-5"}>
                    <div
                        className={"h-0.5 w-[80vw] bg-black md:w-[75vw]"}
                    ></div>
                </div>

                <h2
                    className={
                        "text-landing-primary px-10 py-5 text-center text-2xl leading-12 font-bold text-wrap md:px-72"
                    }
                >
                    {t("home_footer_quote")}
                </h2>

                <div
                    className={
                        "mt-8 grid w-full items-center gap-10 px-10 py-10 text-xl md:grid-cols-3 md:gap-24 md:px-50"
                    }
                    dir="ltr"
                >
                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales1@idtechco.com"}>
                                sales1 @idtechco.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales2@idtechco.com"}>
                                sales2@idtechco.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales4@idtechco.com"}>
                                sales4@idtechco.com
                            </a>
                        </div>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                dir="ltr"
                                target="_blank"
                                href={"https://wa.me/+963933303939"}
                            >
                                +963 933 303 939
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                dir="ltr"
                                target="_blank"
                                href={"https://wa.me/+963935288888"}
                            >
                                +963 935 288 888
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                dir="ltr"
                                target="_blank"
                                href={"https://wa.me/+963932865566"}
                            >
                                +963 932 865 566
                            </a>
                        </div>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <Globe2 className={"text-landing-primary me-2"} />
                            <a
                                target={"_blank"}
                                href={"https://www.idtechcho.com"}
                            >
                                www.idtechcho.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <FacebookIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                target={"_blank"}
                                href={"https://www.facebook.com/IDTechco/"}
                            >
                                ID Technologies Co
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <LinkedinIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                target={"_blank"}
                                href={
                                    "https://www.linkedin.com/company/id-technologies-co/"
                                }
                            >
                                ID Technologies Co
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
