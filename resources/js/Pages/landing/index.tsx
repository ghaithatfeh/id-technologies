import { asset } from "@/helper";
import { Link } from "@inertiajs/react";
import { FacebookIcon, Globe2, Mail, PhoneIcon, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className={"w-full md:h-screen relative"}
                style={{
                    backgroundImage: `url("${asset("images/01-BG.jpg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className={
                        "flex items-center justify-between max-h-[13%] ps-28 pe-10 py-16"
                    }
                >
                    <nav
                        className={
                            "flex items-center gap-14 w-3/4 text-landing-primary text-lg font-bold"
                        }
                    >
                        <Link href={""} className={"text-landing-primary"}>
                            Home
                        </Link>

                        <Link href={""}>Customer</Link>

                        <Link href={""}>About Us</Link>

                        <Link href={""}>Our Projects</Link>

                        <Link href={""}>AR</Link>
                    </nav>

                    <img
                        src={asset("/images/02-Logo.svg")}
                        className={"w-28 h-full"}
                        alt={"id-technologies logo"}
                    />
                </div>
                <div className={"w-[55%] pt-10 pb-5 px-24 "}>
                    <h2
                        className={
                            "ms-18 text-2xl font-bold text-landing-primary mb-3"
                        }
                    >
                        {t("partners_in_development")}
                    </h2>
                    <div className={"flex items-center gap-5"}>
                        <div
                            className={
                                "flex flex-col gap-3 py-6 px-3 rounded-2xl bg-white"
                            }
                        >
                            <PhoneIcon className={"w-8 h-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Mail className={"w-8 h-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Settings className={"w-8 h-8"} strokeWidth={1} />
                        </div>

                        <div className={"flex flex-col gap-2"}>
                            <div className={"flex items-center gap-2"}>
                                <span
                                    className={
                                        "border border-landing-primary w-10 h-4 rounded-md"
                                    }
                                />
                                <p className={"text-white text-xl"}>
                                    {t("hero_first_title")}
                                </p>
                            </div>
                            <div className={"flex items-center gap-2"}>
                                <span
                                    className={
                                        "border border-landing-primary w-10 h-4 rounded-md"
                                    }
                                />
                                <p className={"text-white text-xl"}>
                                    {t("hero_second_title")}
                                </p>
                            </div>
                            <div className={"flex items-center gap-2"}>
                                <span
                                    className={
                                        "border border-landing-primary w-10 h-4 rounded-md"
                                    }
                                />
                                <p className={"text-white text-xl"}>
                                    {t("hero_third_title")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        "absolute -bottom-16 flex items-center justify-between px-44 gap-12 w-full"
                    }
                >
                    <div
                        className={
                            "bg-white rounded-t-2xl shadow-lg p-5 border-b-8 border-b-landing-primary !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-xl flex items-center justify-center text-center"
                            }
                        >
                            {t("security_and_protection")}
                        </p>
                    </div>
                    <div
                        className={
                            "bg-landing-primary/80 rounded-t-2xl shadow-lg p-5 !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-xl flex items-center justify-center text-center"
                            }
                        >
                            {t("plastic_cards_and_printers")}
                        </p>
                    </div>
                    <div
                        className={
                            "bg-white rounded-t-2xl shadow-lg p-5 border-b-8 border-b-landing-primary !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-lg flex items-center justify-center text-center"
                            }
                        >
                            {t("technologies_and_prepaid")}
                        </p>
                    </div>
                    <div
                        className={
                            "bg-white rounded-t-2xl shadow-lg p-5 border-b-8 border-b-landing-primary !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-xl flex items-center justify-center text-center"
                            }
                        >
                            {t("barcodes_systems")}
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={
                    "w-full flex flex-col gap-10 items-start justify-between p-24"
                }
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className={"flex flex-col items-start w-full"}>
                    <h2
                        className={
                            "px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                        }
                    >
                        {t("about_us")}:
                    </h2>
                    <div className="w-80 h-[2px] bg-gradient-to-r from-black to-transparent rounded-full" />
                    <p className={"pe-24 mt-5 text-lg"}>
                        {t("about_us_description")}
                    </p>
                </div>

                <div className={"flex flex-col items-start w-full"}>
                    <h2
                        className={
                            "px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                        }
                    >
                        {t("our_mission")}:
                    </h2>
                    <div className="w-80 h-[2px] bg-gradient-to-r from-black to-transparent rounded-full" />
                    <p className={"pe-24 mt-5 text-lg"}>
                        {t("our_mission_description")}
                    </p>
                </div>

                <div className={"flex flex-col items-start w-full"}>
                    <h2
                        className={
                            "px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                        }
                    >
                        {t("our_vision")}:
                    </h2>
                    <div className="w-80 h-[2px] bg-gradient-to-r from-black to-transparent rounded-full" />
                    <p className={"pe-24 mt-5 text-lg"}>
                        {t("our_vision_description")}
                    </p>
                </div>
            </div>

            <div className={"flex flex-col items-start w-full"}>
                <h2
                    className={
                        "mx-24 px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                    }
                >
                    {t("our_services")}:
                </h2>
                <div
                    className={"bg-landing-secondary px-24 py-10 w-full"}
                    style={{
                        backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={"flex flex-col items-start w-full"}>
                        <h2
                            className={
                                "font-bold text-2xl text-landing-primary"
                            }
                        >
                            {t("offer")}:
                        </h2>
                        <div
                            className={
                                "flex flex-col items-start text-white mt-10 text-xl gap-2"
                            }
                        >
                            <p>{t("service_security_services")}</p>
                            <p>{t("service_plastic_cards")}</p>
                            <p>{t("service_barcodes_systems")}</p>
                            <p>{t("service_gaming")}</p>
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
                        "grid grid-cols-4 items-center px-52 justify-between w-full max-w-full gap-10 py-10"
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

                <div className={" flex items-center justify-center py-5"}>
                    <div className={"w-[75vw] h-0.5 bg-black"}></div>
                </div>

                <h2
                    className={
                        "text-2xl text-landing-primary text-wrap font-bold text-center px-72 py-5"
                    }
                >
                    {t("home_footer_quote")}
                </h2>

                <div
                    className={
                        "py-5 w-full px-72 grid grid-cols-3 items-center text-xl gap-24"
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
