import React from "react";
import { asset } from "@/helper";

const HomeHeroCard = ({
    content,
    icon,
    background,
}: {
    content: string;
    icon: string;
    background: string;
}) => {
    return (
        <div className="group border-b-landing-primary relative h-full w-full overflow-visible rounded-t-lg border-b-8 bg-white p-6 shadow-md">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 rounded-t-lg bg-white bg-[length:125%_130%] bg-center bg-no-repeat"></div>
                <div
                    className={`absolute inset-0 rounded-t-lg bg-[url('${background}')] bg-[length:125%_130%] bg-center bg-no-repeat opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100`}
                ></div>
            </div>

            <p className="relative z-10 text-center text-lg font-bold text-wrap">
                {content}
            </p>

            <div className="absolute -bottom-7 left-0 z-20 flex w-full items-center justify-center">
                <img
                    src={icon}
                    className="bg-landing-secondary h-12 w-12 rounded-lg p-2 shadow-md"
                />
            </div>
        </div>
    );
};

export default HomeHeroCard;
