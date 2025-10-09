import LandingNavbar from "@/Components/landing/Navbar";
import { asset } from "@/helper";
import { FacebookIcon, Globe2, Mail, PhoneIcon, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className={`relative w-full bg-[url('/images/01-BG.jpg')] md:h-screen rtl:bg-[url('/images/01-BGRTL.jpg')]`}
                style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <LandingNavbar />
                <div className={"w-full px-10 pt-10 pb-5 md:w-[55%] md:px-24"}>
                    <h2
                        className={
                            "text-landing-primary mb-3 text-2xl font-bold md:ps-18"
                        }
                    >
                        {t("partners_in_development")}
                    </h2>
                    <div className={"flex items-center gap-5"}>
                        <div
                            className={
                                "hidden flex-col gap-3 rounded-2xl bg-white px-3 py-6 md:flex"
                            }
                        >
                            <PhoneIcon className={"h-8 w-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Mail className={"h-8 w-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Settings className={"h-8 w-8"} strokeWidth={1} />
                        </div>

                        <div className={"flex flex-col gap-2"}>
                            <div className={"flex items-start gap-2"}>
                                <span
                                    className={
                                        "border-landing-primary my-1 h-4 w-17 rounded-md border md:w-10 rtl:h-6 rtl:w-10"
                                    }
                                />
                                <p className={"text-xl text-white"}>
                                    {t("hero_first_title")}
                                </p>
                            </div>
                            <div className={"flex items-start gap-2"}>
                                <span
                                    className={
                                        "border-landing-primary my-1 h-4 w-17 rounded-md border md:w-10 rtl:h-6 rtl:w-10"
                                    }
                                />
                                <p className={"text-xl text-white"}>
                                    {t("hero_second_title")}
                                </p>
                            </div>
                            <div className={"flex items-start gap-2"}>
                                <span
                                    className={
                                        "border-landing-primary my-1 h-4 w-17 rounded-md border md:w-10 rtl:h-6 rtl:w-10"
                                    }
                                />
                                <p className={"text-xl text-white"}>
                                    {t("hero_third_title")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        "-bottom-18 flex w-full flex-col items-center justify-between gap-12 px-14 md:absolute md:flex-row md:px-44"
                    }
                >
                    <div
                        className={
                            "border-b-landing-primary relative h-40 rounded-t-2xl border-b-8 bg-white p-5 shadow-lg md:!w-[25%]"
                        }
                    >
                        <p
                            className={
                                "flex items-center justify-center text-center text-xl"
                            }
                        >
                            {t("security_and_protection")}
                        </p>
                        <div className={"flex items-center justify-center"}>
                            <img
                                src={asset("/images/Icon01.svg")}
                                className={
                                    "bg-landing-secondary absolute -bottom-8 h-14 w-14 rounded-lg p-2"
                                }
                            />
                        </div>
                    </div>
                    <div
                        className={
                            "bg-landing-primary/80 relative h-40 rounded-t-2xl p-5 shadow-lg md:block md:!w-[25%]"
                        }
                    >
                        <p
                            className={
                                "flex items-center justify-center text-center text-xl"
                            }
                        >
                            {t("plastic_cards_and_printers")}
                        </p>
                        <div className={"flex items-center justify-center"}>
                            <img
                                src={asset("/images/Icon02.svg")}
                                className={
                                    "bg-landing-secondary absolute -bottom-6 h-14 w-14 rounded-lg p-2"
                                }
                            />
                        </div>
                    </div>
                    <div
                        className={
                            "border-b-landing-primary relative h-40 rounded-t-2xl border-b-8 bg-white p-5 shadow-lg md:block md:!w-[25%]"
                        }
                    >
                        <p
                            className={
                                "flex items-center justify-center text-center text-lg"
                            }
                        >
                            {t("technologies_and_prepaid")}
                        </p>
                        <div className={"flex items-center justify-center"}>
                            <img
                                src={asset("/images/Icon03.svg")}
                                className={
                                    "bg-landing-secondary absolute -bottom-8 h-14 w-14 rounded-lg p-2 md:-bottom-6"
                                }
                            />
                        </div>
                    </div>
                    <div
                        className={
                            "border-b-landing-primary h-40 rounded-t-2xl border-b-8 bg-white p-5 shadow-lg md:!w-[25%]"
                        }
                    >
                        <p
                            className={
                                "flex items-center justify-center text-center text-xl"
                            }
                        >
                            {t("barcodes_systems")}
                        </p>
                        <div className={"flex items-center justify-center"}>
                            <img
                                src={asset("/images/Icon02.svg")}
                                className={
                                    "bg-landing-secondary absolute -bottom-6 h-14 w-14 rounded-lg p-2"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    "flex w-full flex-col items-start justify-between gap-10 px-10 py-24 md:px-24 md:py-32"
                }
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary px-10 py-5 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                        }
                    >
                        {t("about_us")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80" />
                    <p className={"mt-5 text-lg md:pe-24"}>
                        {t("about_us_description")}
                    </p>
                </div>

                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary px-10 py-5 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                        }
                    >
                        {t("our_mission")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80" />
                    <p className={"mt-5 text-lg md:pe-24"}>
                        {t("our_mission_description")}
                    </p>
                </div>

                <div className={"flex w-full flex-col items-start"}>
                    <h2
                        className={
                            "bg-landing-primary px-10 py-5 text-xl font-bold ltr:rounded-tr-2xl rtl:rounded-tl-2xl"
                        }
                    >
                        {t("our_vision")}:
                    </h2>
                    <div className="h-[2px] w-40 rounded-full bg-gradient-to-r from-black to-transparent md:w-80" />
                    <p className={"mt-5 text-lg md:pe-24"}>
                        {t("our_vision_description")}
                    </p>
                </div>
            </div>

            <div className={"flex w-full flex-col items-start"}>
                <h2
                    className={
                        "bg-landing-primary mx-10 rounded-tr-2xl px-10 py-5 text-xl font-bold md:mx-24"
                    }
                >
                    {t("our_services")}:
                </h2>
                <div
                    className={
                        "bg-landing-secondary w-full px-10 py-10 md:px-24"
                    }
                    style={{
                        backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={"flex w-full flex-col items-start"}>
                        <h2
                            className={
                                "text-landing-primary text-2xl font-bold"
                            }
                        >
                            {t("our_services_description")}:
                        </h2>
                        <div
                            className={
                                "mt-10 flex flex-col items-start gap-2 text-xl text-white"
                            }
                        >
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon01.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p>{t("service_security_services")}</p>
                            </div>
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon02.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p>{t("service_plastic_cards")}</p>
                            </div>
                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon04.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p>{t("service_barcodes_systems")}</p>
                            </div>

                            <div className={"flex items-start gap-4"}>
                                <img
                                    src={asset("/images/Icon03.svg")}
                                    className={"h-12 w-12 rounded-lg p-2"}
                                />
                                <p>{t("service_gaming")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={"w-full"}
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
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
                        "grid w-full items-center gap-10 px-10 py-5 text-xl md:grid-cols-3 md:gap-24 md:px-72"
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
