import TableCells from "@/Components/icons/TableCells";
import XMark from "@/Components/icons/XMark";
import { asset } from "@/helper";
import { Link } from "@inertiajs/react";
import React, { ReactNode } from "react";

const sidebarItems = [
    // {
    //     href: route("v1.web.protected.index"),
    //     title: "Dashboard",
    //     icon: () => <PresentationChart />,
    // },
    {
        title: "Brands",
        href: route("v1.web.protected.brands.index"),
        icon: () => <TableCells />,
    },
    {
        title: "Category",
        href: route("v1.web.protected.categories.index"),
        icon: () => <TableCells />,
    },
    {
        title: "Product",
        href: route("v1.web.protected.products.index"),
        icon: () => <TableCells />,
    },
    {
        title: "SupportLink",
        href: route("v1.web.protected.support.links.index"),
        icon: () => <TableCells />,
    },
];

export const Sidebar = ({
    toggleSidebar,
    isOpen,
}: {
    toggleSidebar: () => void;
    isOpen: boolean;
}) => {
    return (
        <div
            className={`bg-white-secondary dark:bg-dark-secondary sticky flex h-full max-h-screen flex-col overflow-y-scroll shadow-xl`}
        >
            <div
                className={`flex ${isOpen ? "justify-around" : "justify-center"} bg-white-secondary dark:bg-dark-secondary sticky top-0 h-[7.7%] max-h-20 items-center px-0 ${isOpen ? "shadow-sm" : " "}`}
            >
                <div className={`flex items-center justify-center gap-1`}>
                    <img
                        src={asset("/images/02-Logo.png")}
                        width={`${isOpen ? "40px" : "40px"}`}
                        alt="Company Logo"
                    />
                    {isOpen && (
                        <a
                            href={route("v1.web.protected.index")}
                            className={`text-brand w-full px-2 text-xl hover:underline dark:text-white`}
                        >
                            ID Technologies
                        </a>
                    )}
                </div>

                {isOpen && (
                    <button
                        className="cursor-pointer"
                        type={"button"}
                        onClick={() => toggleSidebar()}
                    >
                        <XMark className="text-brand h-8 w-8 dark:text-white" />
                    </button>
                )}
            </div>

            <div
                id="sidebar-list"
                className={`bg-white-secondary dark:bg-dark-secondary mt-6 flex w-full flex-col gap-1 px-4 ${isOpen ? "items-start" : "items-center"}`}
            >
                {sidebarItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        href={item.href}
                        title={item.title}
                        icon={item.icon}
                        isOpen={isOpen}
                    />
                ))}
            </div>
        </div>
    );
};

export const SidebarItem = ({
    href,
    title,
    isOpen = false,
    icon = undefined,
}: {
    href: string;
    title: string;
    isOpen: boolean;
    icon?: () => ReactNode;
}) => {
    const selected = window.location.href.startsWith(href);

    return (
        <Link
            className={`text-brand flex w-full items-center gap-5 rounded-lg px-3 py-2 text-lg hover:bg-white hover:text-gray-700 ${
                selected
                    ? "dark:bg-white-secondary bg-sky-100 dark:text-black"
                    : "dark:text-white"
            } ${!isOpen && "justify-center"}`}
            href={href}
        >
            {icon ? icon() : ""}
            {isOpen && <span>{title}</span>}
        </Link>
    );
};

export const CompactSidebarItem = ({
    title,
    children,
    baseRouteName,
}: {
    title: string;
    children?: React.ReactNode;
    baseRouteName?: string;
}) => {
    let selected = false;
    if (baseRouteName) {
        selected = route().current(`${baseRouteName}.*`);
    }
    return (
        <details
            className={`group [&_summary::-webkit-details-marker]:hidden`}
            open={selected}
        >
            <summary
                className={`text-brand flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-lg hover:bg-gray-100 hover:text-gray-700 ${
                    selected
                        ? "dark:bg-white-secondary bg-sky-100 dark:text-black"
                        : "dark:text-white"
                }`}
            >
                <span> {title} </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </summary>
            <ul className="mt-2 space-y-1 px-4">{children}</ul>
        </details>
    );
};
