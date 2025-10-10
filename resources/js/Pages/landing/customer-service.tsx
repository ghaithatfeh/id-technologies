import React from "react";
import LandingNavbar from "@/Components/landing/landing-navbar";
import { useTranslation } from "react-i18next";
import { asset } from "@/helper";
import { FacebookIcon, Globe2, Mail, PhoneIcon } from "lucide-react";

const CustomerService = () => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className={
                    "relative w-[50vh] md:h-[75vh] w-full bg-[url('/images/01-Cover.png')] bg-cover"
                }
            >
                <LandingNavbar />
                <div
                    className={
                        "flex h-full w-full flex-col items-center gap-10 py-18"
                    }
                >
                    <h1 className={"text-landing-primary text-3xl md:text-6xl text-center"}>
                        {t("customer_service")}
                    </h1>
                    <div className={"w-1/3 md:w-1/8"}>
                        <img
                            src={asset("/images/02-Icon.png")}
                            className={"h-full w-full"}
                        />
                    </div>
                </div>
                <div
                    className={
                        "md:absolute -bottom-17 flex flex-col md:grid grid-cols-4 items-center justify-between px-10 md:px-38"
                    }
                >
                    <img src={asset("/images/03-Brand01.png")} />
                    <img src={asset("/images/04-Brand02.png")} />
                    <img src={asset("/images/05-Brand03.png")} />
                    <img src={asset("/images/06-Brand04.png")} />
                </div>
            </div>

            <div
                className={"h-full w-full bg-cover bg-[url('/images/08-BG.svg')] py-16"}
            >
                <div
                    className={
                        "grid grid-cols-2 md:grid-cols-3 items-center justify-between px-10 md:px-38"
                    }
                >
                    <img src={asset("/images/07-Product01.png")} />
                    <img src={asset("/images/08-Product02.png")} />
                    <img src={asset("/images/09-Product03.png")} />
                    <img src={asset("/images/10-Product04.png")} />
                    <img src={asset("/images/11-Product05.png")} />
                    <img src={asset("/images/12-Product06.png")} />
                    <img src={asset("/images/13-Product07.png")} />
                    <img src={asset("/images/14-Product08.png")} />
                    <img src={asset("/images/17-Product11.png")} />
                </div>
            </div>

            <div
                className={"bg-auto md:bg-cover w-full md:py-32"}
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <h2
                    className={
                        "text-landing-primary px-10 py-5 text-center text-xl md:text-2xl font-bold text-wrap md:px-72"
                    }
                >
                    {t("home_footer_quote")}
                </h2>

                <div
                    className={
                        "grid w-full items-center gap-10 px-10 py-5 text-xl md:grid-cols-3 md:gap-24 md:px-50"
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

export default CustomerService;
