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
    // Function to highlight specific strings in red
    const highlightBrandNames = (text: string) => {
        const brandNames = ["HIKVISION Co", "evolis co", "intercards co", "Unitech co"];
        
        let highlightedText = text;
        
        brandNames.forEach((str) => {
            const regex = new RegExp(`(${str})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="text-red-500 block">$1</span>');
        });
        
        return highlightedText;
    };

    return (
        <div className="group border-b-landing-primary relative h-full w-full overflow-visible rounded-t-3xl border-b-8 bg-white pt-6 pb-10 px-2 shadow-xl min-h-42 flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 rounded-t-lg bg-white bg-[length:125%_130%] bg-center bg-no-repeat" />
                <div
                    className={`absolute inset-0 rounded-t-lg bg-center bg-cover bg-no-repeat opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100`}
                    style={{
                        backgroundImage: `url('${background}')`,
                    }}
                />
            </div>

            <p 
                className="relative z-10 text-center text-lg font-bold text-wrap"
                dangerouslySetInnerHTML={{ __html: highlightBrandNames(content) }}
            />

            <div className="absolute -bottom-7 left-0 z-20 flex w-full items-center justify-center">
                <img
                    src={icon}
                    className="bg-landing-secondary h-16 w-16 rounded-lg p-2 shadow-md"
                />
            </div>
        </div>
    );
};

export default HomeHeroCard;
