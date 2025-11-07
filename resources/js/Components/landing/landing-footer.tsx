import {
    FacebookIcon,
    Globe2,
    LinkedinIcon,
    Mail,
    PhoneIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function LandingFooter() {
    const { t } = useTranslation();
    return (
        <div className={"bg-[url('/images/BackgroundFooter.png')]"}>
            <div className={"md:p-10"}>
                <h2
                    className={
                        "px-10 py-5 text-center text-2xl leading-12 font-bold text-wrap text-landing-primary md:px-72"
                    }
                >
                    {t("home_footer_quote")}
                </h2>

                <div
                    className={
                        "grid w-full items-center gap-10 px-10 py-5 text-xl text-white md:grid-cols-3 md:gap-24 md:px-50"
                    }
                    dir="ltr"
                >
                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <Mail className={"me-2 text-landing-primary"} />
                            <a href={"mailto:sales1@idtechco.com"}>
                                sales1 @idtechco.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <Mail className={"me-2 text-landing-primary"} />
                            <a href={"mailto:sales2@idtechco.com"}>
                                sales2@idtechco.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <Mail className={"me-2 text-landing-primary"} />
                            <a href={"mailto:sales4@idtechco.com"}>
                                sales4@idtechco.com
                            </a>
                        </div>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"me-2 text-landing-primary"}
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
                                className={"me-2 text-landing-primary"}
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
                                className={"me-2 text-landing-primary"}
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
                            <Globe2 className={"me-2 text-landing-primary"} />
                            <a
                                target={"_blank"}
                                href={"https://www.idtechcho.com"}
                            >
                                www.idtechcho.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <FacebookIcon
                                className={"me-2 text-landing-primary"}
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
                                className={"me-2 text-landing-primary"}
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
        </div>
    );
}

export default LandingFooter;
