import React from "react";
import Brand from "@/Models/Brand";
import Category from "@/Models/Category";
import LandingNavbar from "@/Components/landing/landing-navbar";
import { translate } from "@/Models/Translatable";
import { useTranslation } from "react-i18next";

const Show = ({ brand, category }: { brand: Brand; category: Category }) => {
    const { t } = useTranslation();
    return (
        <div className={"h-full w-full"}>
            <div
                className={
                    "relative h-[70vh] w-full bg-[url('/images/01-Cover.png')] bg-[length:100%_100%] bg-no-repeat"
                }
            >
                <LandingNavbar />
                <div className={"flex items-center justify-center w-full py-24"}>
                    <h1 className={"text-landing-primary text-3xl md:text-6xl max-w-4/6 text-center"}>
                        {translate(brand.brand_title)}
                    </h1>
                </div>

                <div className={'absolute -bottom-20 left-[40%]'}>
                    <img src={brand.logo?.url} className={"w-1/3"}/>
                </div>
            </div>

            <div className={"w-full flex items-start justify-between py-16"}>
                <div className={"w-[35%] flex flex-col items-center justify-between"}>
                    <h1 className={"text-4xl font-bold"}>{t("categories")}</h1>
                </div>
            </div>
        </div>
    );
};

export default Show;
