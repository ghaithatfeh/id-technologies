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
                    "relative w-full bg-[url('/images/01-Cover.png')] bg-cover bg-center bg-no-repeat"
                }
            >
                <LandingNavbar />
                <div
                    className={
                        "flex h-full w-full flex-col items-center gap-2 pt-16 pb-42"
                    }
                >
                    <h1
                        className={
                            "text-landing-primary px-5 text-center text-3xl leading-20 md:text-4xl"
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
                        "flex flex-wrap px-10 md:px-38 absolute -bottom-12 w-full md:gap-10 gap-5 justify-center"
                    }
                >
                    <img className="w-40 md:w-1/5 shadow-xl rounded-lg md:rounded-xl" src={asset("/images/03-Brand01.png")} />
                    <img className="w-40 md:w-1/5 shadow-xl rounded-lg md:rounded-xl" src={asset("/images/04-Brand02.png")} />
                    <img className="w-40 md:w-1/5 shadow-xl rounded-lg md:rounded-xl" src={asset("/images/05-Brand03.png")} />
                    <img className="w-40 md:w-1/5 shadow-xl rounded-lg md:rounded-xl" src={asset("/images/06-Brand04.png")} />
                </div>
            </div>

            <div
                className={
                    "h-full w-full bg-[url('/images/08-BG.svg')] py-10 pt-30 md:py-48 bg-cover bg-center bg-no-repeat"
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
                                        "border-landing-primary font-bold h-full border break-words p-5 text-wrap text-sm md:text-md"
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

            <div className={"bg-[url('/images/BackgroundFooter.png')]"}>
                <div className={"md:p-10"}>
                    <h2
                        className={
                            "text-landing-primary px-10 py-5 text-center text-2xl font-bold text-wrap md:px-72 leading-12"
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
                                <Globe2
                                    className={"text-landing-primary me-2"}
                                />
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
            </div>
        </>
    );
};

export default CustomerService;
