import React, { Fragment } from "react";
import LandingNavbar from "@/Components/landing/landing-navbar";
import { useTranslation } from "react-i18next";
import { asset } from "@/helper";
import {
    FacebookIcon,
    Globe2,
    LinkedinIcon,
    Mail,
    PhoneIcon,
} from "lucide-react";
import { translate } from "@/Models/Translatable";
import SupportLink from "@/Models/SupportLink";
import LandingFooter from "@/Components/landing/landing-footer";

const CustomerService = ({ supportLinks }: { supportLinks: SupportLink[] }) => {
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
                            "px-5 text-center text-4xl leading-12 md:leading-20 text-landing-primary md:text-5xl font-bold"
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
                        "absolute -bottom-12 flex w-full flex-wrap justify-center gap-2 md:gap-10 md:px-38 max-w-[90rem] left-1/2 -translate-x-1/2 center"
                    }
                >
                    <img
                        className="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                        src={asset("/images/03-Brand01.png")}
                    />
                    <img
                        className="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                        src={asset("/images/04-Brand02.png")}
                    />
                    <img
                        className="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                        src={asset("/images/05-Brand03.png")}
                    />
                    <img
                        className="max-w-38 rounded-lg shadow-xl md:w-1/5 md:max-w-[unset] md:rounded-xl"
                        src={asset("/images/06-Brand04.png")}
                    />
                </div>
            </div>

            <div
                className={
                    "h-full w-full bg-[url('/images/08-BG.svg')] bg-cover bg-center bg-no-repeat py-10 pt-30 md:py-48"
                }
            >
                <div
                    className={
                        "flex w-full items-center justify-between px-5 md:grid-cols-4 md:px-38 max-w-[83rem] mx-auto"
                    }
                >
                    <div
                        className={`border-landing-primary grid h-full w-full grid-cols-4 items-center border bg-transparent shadow-2xl`}
                    >
                        <h1
                            className={
                                "bg-landing-primary px-5 py-4 font-bold text-wrap md:text-xl ltr:border-r-2 ltr:border-r-white rtl:border-l-2 rtl:border-l-white"
                            }
                        >
                            {t("product")}
                        </h1>
                        <h1
                            className={
                                "bg-landing-primary px-5 py-4 font-bold text-wrap md:text-xl ltr:border-r-2 ltr:border-r-white rtl:border-l-2 rtl:border-l-white"
                            }
                        >
                            {t("type")}
                        </h1>
                        <h1
                            className={
                                "bg-landing-primary col-span-2 px-5 py-4 font-bold text-wrap md:text-xl"
                            }
                        >
                            {t("link")}
                        </h1>
                        {supportLinks.map((p, index) => (
                            <Fragment key={index}>
                                <h2
                                    className={
                                        "border-landing-primary md:text-md h-full border p-5 text-sm font-bold text-wrap break-words"
                                    }
                                >
                                    {translate(p.product_name)}
                                </h2>
                                <h2
                                    className={
                                        "border-landing-primary md:text-md h-full border p-5 text-sm font-bold text-wrap break-words"
                                    }
                                >
                                    {translate(p.type)}
                                </h2>
                                <a
                                    href={p.link}
                                    target={"_blank"}
                                    className={
                                        "border-landing-primary md:text-md col-span-2 h-full border p-5 text-sm text-wrap break-all hover:underline"
                                    }
                                >
                                    {p.link}
                                </a>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <LandingFooter />
        </>
    );
};

export default CustomerService;
