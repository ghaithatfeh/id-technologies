import React from "react";
import Brand from "@/Models/Brand";
import Category from "@/Models/Category";
import LandingNavbar from "@/Components/landing/landing-navbar";
import { translate } from "@/Models/Translatable";
import { useTranslation } from "react-i18next";
import { Link } from "@inertiajs/react";
import DownloadFile from "@/Hooks/DownloadFile";
import { FacebookIcon, Globe2, Mail, PhoneIcon } from "lucide-react";

const Show = ({ brand, category }: { brand: Brand; category: Category }) => {
    const { t } = useTranslation();
    return (
        <div className={"w-full"}>
            <div
                className={
                    "relative w-full bg-[url('/images/01-Cover.png')] bg-[length:100%_100%] bg-no-repeat"
                }
            >
                <LandingNavbar />
                <div
                    className={
                        "flex w-full items-center justify-center pt-16 pb-42"
                    }
                >
                    <h1
                        className={
                            "text-landing-primary px-5 text-center text-3xl leading-20 md:text-4xl"
                        }
                    >
                        {translate(brand.brand_title)}
                    </h1>
                </div>

                <div className={"start-[40%] -bottom-20 hidden md:absolute"}>
                    <img src={brand.logo?.url} className={"w-1/3"} />
                </div>
            </div>

            <div
                className={
                    "flex w-full flex-col items-start justify-between px-10 py-10 md:flex-row md:px-36 md:py-36"
                }
            >
                <div
                    className={
                        "flex w-full flex-col items-start justify-between md:w-[35%] md:items-center"
                    }
                >
                    <h1
                        className={
                            "w-full text-start text-2xl font-bold md:text-4xl"
                        }
                    >
                        {t("categories")}
                    </h1>
                    <div
                        className={
                            "flex w-full flex-row flex-wrap items-start gap-5 pt-5 md:flex-col"
                        }
                    >
                        {brand.categories?.map((c: Category) => (
                            <Link
                                className={"flex w-full items-center gap-5"}
                                href={route("landing.brands.show", {
                                    brandId: brand.id,
                                    categoryId: c.id,
                                })}
                            >
                                <input
                                    type={"checkbox"}
                                    className="checked:bg-landing-primary focus:ring-landing-primary/80 h-5 w-5 appearance-none rounded-sm border-2 border-gray-300 focus:ring-2"
                                    defaultChecked={c.id == category.id}
                                />
                                <label className={"text-lg md:text-2xl"}>
                                    {translate(c.name)}
                                </label>
                            </Link>
                        ))}
                    </div>
                </div>

                <div
                    className={
                        "grid h-full w-full grid-cols-1 gap-5 pt-5 md:w-[65%] md:grid-cols-3 md:pt-0"
                    }
                >
                    {category.products?.map((product) => (
                        <div className={"flex h-full w-full flex-col gap-3"}>
                            <div
                                className={
                                    "border-landing-primary h-full min-h-60 w-full rounded-t-xl border-2 md:min-h-72"
                                }
                            >
                                <img
                                    src={product.image?.url}
                                    className={
                                        "h-[80%] max-h-[80%] w-full rounded-t-xl object-fill"
                                    }
                                />
                                <h1
                                    className={
                                        "bg-landing-primary flex h-[20%] w-full items-center justify-center font-bold"
                                    }
                                >
                                    {translate(product.name)}
                                </h1>
                            </div>
                            <a
                                href={product.pdf?.url}
                                target={"_blank"}
                                className={"w-full"}
                            >
                                <button
                                    className={
                                        "bg-landing-secondary w-full cursor-pointer px-5 py-3 text-center font-bold text-white"
                                    }
                                >
                                    {t("download_pdf")}
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"bg-[url('/images/BackgroundFooter.png')]"}>
                <div className={"md:p-10"}>
                    <h2
                        className={
                            "text-landing-primary px-10 py-5 text-center text-2xl font-bold text-wrap md:px-72"
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
        </div>
    );
};

export default Show;
