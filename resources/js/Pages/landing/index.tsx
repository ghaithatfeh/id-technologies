import LandingNavbar from "@/Components/landing/landing-navbar";
import { asset } from "@/helper";
import { FacebookIcon, Globe2, Mail, PhoneIcon, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import HomeHeroCard from "@/Components/landing/home-hero-card";
import Brand from "@/Models/Brand";
import { translate } from "@/Models/Translatable";
import { Link } from "@inertiajs/react";

const Index = ({ brands }: { brands: Brand[] }) => {
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
                <div className={"w-full px-10 pb-46 md:px-16 md:w-3/4"}>
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
                            <PhoneIcon className={"h-8 w-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Mail className={"h-8 w-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Settings className={"h-8 w-8"} strokeWidth={1} />
                        </div>

                        <div className={"flex flex-col gap-8 mt-6"}>
                            <div className={"flex items-start gap-2"}>
                                <span
                                    className={
                                        "border-landing-primary me-2 my-2 rounded-md border p-2"
                                    }
                                />
                                <p className={"text-xl text-white leading-8"}>
                                    {t("hero_first_title")}
                                </p>
                            </div>
                            <div className={"flex items-start gap-2"}>
                                <span
                                    className={
                                        "border-landing-primary me-2 my-2 rounded-md border p-2"
                                    }
                                />
                                <p className={"text-xl text-white leading-8"}>
                                    {t("hero_second_title")}
                                </p>
                            </div>
                            <div className={"flex items-start gap-2"}>
                                <span
                                    className={
                                        "border-landing-primary me-2 my-2 rounded-md border p-2"
                                    }
                                />
                                <p className={"text-xl text-white leading-8"}>
                                    {t("hero_third_title")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-bottom-[12%] grid w-full grid-cols-1 items-center justify-between gap-10 px-14 md:absolute md:grid-cols-4 md:px-44">
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
                            "bg-landing-primary text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl w-50 py-5 ps-8"
                        }
                    >
                        {t("about_us")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80" />
                    <p className={"mt-5 text-lg md:pe-24 font-semibold leading-10"}>
                        {t("about_us_description")}
                    </p>
                </div>

                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl w-50 py-5 ps-8"
                        }
                    >
                        {t("our_mission")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80" />
                    <p className={"mt-5 text-lg md:pe-24 font-semibold leading-10"}>
                        {t("our_mission_description")}
                    </p>
                </div>

                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl w-50 py-5 ps-8"
                        }
                    >
                        {t("our_vision")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80" />
                    <p className={"mt-5 text-lg md:pe-24 font-semibold leading-10"}>
                        {t("our_vision_description")}
                    </p>
                </div>
                
                <h2
                    className={
                        "bg-landing-primary mt-16 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl w-50 py-5 ps-8"
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
                                <p className="leading-10">{t("service_security_services")}</p>
                            </div>
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon02.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">{t("service_plastic_cards")}</p>
                            </div>
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon04.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">{t("service_barcodes_systems")}</p>
                            </div>

                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon03.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p className="leading-10">{t("service_gaming")}</p>
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
                        "flex w-full max-w-full grid-cols-4 flex-col items-center justify-between gap-10 px-10 py-10 md:grid md:px-52"
                    }
                >
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/09-Brand.png")}
                    />
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/10-Brand.png")}
                    />
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/11-Brand.png")}
                    />
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/12-Brand.png")}
                    />
                </div>

                <div className={"flex items-center justify-center py-5"}>
                    <div
                        className={"h-0.5 w-[80vw] bg-black md:w-[75vw]"}
                    ></div>
                </div>

                <h2
                    className={
                        "text-landing-primary px-10 py-5 text-center text-2xl font-bold text-wrap md:px-72"
                    }
                >
                    {t("home_footer_quote")}
                </h2>

                <div
                    className={
                        "grid w-full items-center gap-10 px-10 py-10 text-xl md:grid-cols-3 md:gap-24 md:px-50 mt-8"
                    }
                >
                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales1@idtechco.com"}>
                                sales1@idtechco.com
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
                            <a href={"mailto:sales3@idtechco.com"}>
                                sales3@idtechco.com
                            </a>
                        </div>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a href={"tel:+963933303939"}>+963 933 303 939</a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a href={"tel:+963935288888"}>+963 935 288 888</a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a href={"tel:+963932865566"}>+963 932 865 566</a>
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
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                target={"_blank"}
                                href={"https://www.facebook.com/IDTechco/"}
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
