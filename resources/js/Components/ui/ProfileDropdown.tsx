import ChevronDown from "@/Components/icons/ChevronDown";
import { MiddlewareProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { UserCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {
    const [open, setOpen] = useState(false);
    const { authUser } = usePage<MiddlewareProps>().props;
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-auto">
            <button
                className="inline-flex hover:cursor-pointer items-center justify-center rounded-lg bg-transparent px-0 py-2 text-center text-sm focus:outline-none dark:text-white"
                type="button"
                onClick={() => setOpen((prevState) => !prevState)}
            >
                <UserCircle className={"me-1"} />
                {authUser?.first_name} {authUser?.last_name}
                <ChevronDown className="ms-3 h-4 w-4" />
            </button>

            <div
                className={`${
                    open ? "absolute" : "hidden"
                } bg-white-secondary dark:bg-dark-secondary start-0 z-10 w-44 rounded-lg shadow`}
            >
                <ul className="h-full text-sm text-gray-700 shadow-md dark:text-white">
                    <li>
                        <Link
                            id="user-details"
                            href={route("v1.web.protected.me")}
                            className="block cursor-pointer rounded-md p-2 hover:bg-gray-50 dark:hover:text-black"
                        >
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="logout"
                            href={route("v1.web.protected.logout")}
                            className="block cursor-pointer rounded-md p-2 hover:bg-gray-50 dark:hover:text-black"
                        >
                            Sign Out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileDropdown;
