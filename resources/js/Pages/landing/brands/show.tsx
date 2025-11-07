import LandingFooter from "@/Components/landing/landing-footer";
import LandingNavbar from "@/Components/landing/landing-navbar";
import Brand from "@/Models/Brand";
import Category from "@/Models/Category";
import { translate } from "@/Models/Translatable";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Show = ({ brand, category }: { brand: Brand; category: Category }) => {
    const { t } = useTranslation();
    return (
        <div className={"w-full"}>
            <div
                className={
                    "relative w-full bg-[url('/images/01-Cover.png')] bg-cover bg-center bg-no-repeat"
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
                            "px-5 text-center text-3xl leading-12 text-landing-primary md:text-4xl md:leading-20"
                        }
                    >
                        {translate(brand.brand_title)}
                    </h1>
                </div>

                <div
                    className={
                        "absolute -bottom-10 flex w-full flex-wrap justify-center px-10 md:-bottom-12 md:px-38"
                    }
                >
                    <img
                        src={brand.logo?.url}
                        className={
                            "w-1/2 rounded-lg shadow-xl md:w-1/5 md:rounded-xl"
                        }
                    />
                </div>
            </div>

            <div
                className={
                    "h-full w-full bg-[url('/images/08-BG.svg')] bg-repeat"
                }
            >
                <div
                    className={
                        "flex w-full h-full flex-col items-start justify-between px-10 py-10 pt-20 md:flex-row md:px-36 md:py-36"
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
                                        className="h-5 w-5 appearance-none rounded-sm border-2 border-gray-300 checked:bg-landing-primary focus:ring-2 focus:ring-landing-primary/80"
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
                            <div
                                className={"flex h-full w-full flex-col gap-3"}
                            >
                                <div
                                    className={
                                        "h-full min-h-60 w-full rounded-t-xl border-2 border-landing-primary md:max-h-72 md:min-h-72"
                                    }
                                >
                                    <img
                                        src={product.image?.url}
                                        className={
                                            "h-[80%] max-h-[80%] w-full rounded-t-xl object-fill"
                                        }
                                        alt={product.name}
                                    />
                                    <h1
                                        className={
                                            "flex h-[20%] w-full items-center justify-center bg-landing-primary font-bold"
                                        }
                                    >
                                        {translate(product.name)}
                                    </h1>
                                </div>
                                <a
                                    href={product.pdf?.url}
                                    target={"_blank"}
                                    className={"w-full"}
                                    download
                                >
                                    <button
                                        className={
                                            "w-full cursor-pointer bg-landing-secondary px-5 py-3 text-center font-bold text-white"
                                        }
                                    >
                                        {t("download_pdf")}
                                    </button>
                                </a>
                                {product?.video && (
                                    <a
                                        href={product.video?.url}
                                        target={"_blank"}
                                        className={"w-full"}
                                        download
                                    >
                                        <button
                                            className={
                                                "w-full cursor-pointer bg-landing-secondary px-5 py-3 text-center font-bold text-white"
                                            }
                                        >
                                            {t("download_video")}
                                        </button>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <LandingFooter />
        </div>
    );
};

export default Show;
