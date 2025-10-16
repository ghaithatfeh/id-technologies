import React, { Fragment } from "react";
import LandingNavbar from "@/Components/landing/landing-navbar";
import { useTranslation } from "react-i18next";
import { asset } from "@/helper";
import { FacebookIcon, Globe2, Mail, PhoneIcon } from "lucide-react";
import Product from "@/Models/Product";
import product from "@/Models/Product";
import { translate } from "@/Models/Translatable";

const CustomerService = ({ products }: { products: Product[] }) => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className={
                    "relative w-full bg-[url('/images/01-Cover.png')] bg-cover md:h-[75vh]"
                }
            >
                <LandingNavbar />
                <div
                    className={
                        "flex h-full w-full flex-col items-center gap-10 py-18"
                    }
                >
                    <h1
                        className={
                            "text-landing-primary text-center text-3xl md:text-6xl"
                        }
                    >
                        {t("customer")}
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
                        "-bottom-17 flex grid-cols-4 flex-col items-center justify-between px-10 md:absolute md:grid md:px-38"
                    }
                >
                    <img src={asset("/images/03-Brand01.png")} />
                    <img src={asset("/images/04-Brand02.png")} />
                    <img src={asset("/images/05-Brand03.png")} />
                    <img src={asset("/images/06-Brand04.png")} />
                </div>
            </div>

            <div
                className={
                    "h-full w-full bg-[url('/images/08-BG.svg')] py-10 md:py-24"
                }
            >
                <div
                    className={
                        "flex w-full items-center justify-between px-5 md:grid-cols-3 md:px-38"
                    }
                >
                    <div
                        className={`border-landing-primary grid h-full w-full grid-cols-3 items-center border bg-transparent shadow-2xl`}
                    >
                        <h1
                            className={
                                "bg-landing-primary ltr:border-r-2 ltr:border-r-white rtl:border-l-2 rtl:border-l-white px-5 py-4 md:text-xl font-bold text-wrap"
                            }
                        >
                            {t("product")}
                        </h1>
                        <h1
                            className={
                                "bg-landing-primary col-span-2 px-5 py-4 md:text-xl font-bold text-wrap"
                            }
                        >
                            {t("link")}
                        </h1>
                        {products.map((p, index) => (
                            <Fragment key={index}>
                                <h2
                                    className={
                                        "border-landing-primary text-center font-bold h-full border break-words p-5 text-wrap text-sm md:text-md"
                                    }
                                >
                                    {translate(p.name)}
                                </h2>
                                <h2
                                    className={
                                        "border-landing-primary col-span-2 h-full border break-all p-5 text-wrap text-sm md:text-md"
                                    }
                                >
                                    {p.support_link}
                                </h2>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={
                    "w-full bg-[url('/images/BackgroundFooter.png')] bg-auto md:bg-cover md:py-32"
                }
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <h2
                    className={
                        "text-landing-primary px-10 py-5 text-center text-xl font-bold text-wrap md:px-72 md:text-2xl"
                    }
                >
                    {t("home_footer_quote")}
                </h2>

                <div
                    className={
                        "grid w-full items-center gap-10 px-10 py-5 text-xl text-white md:grid-cols-3 md:gap-24 md:px-50"
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
                            <a dir="ltr" href={"tel:+963933303939"}>
                                +963 933 303 939
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a dir="ltr" href={"tel:+963935288888"}>
                                +963 935 288 888
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a dir="ltr" href={"tel:+963932865566"}>
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
