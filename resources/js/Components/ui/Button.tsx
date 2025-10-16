import LoadingSpinner from "@/Components/icons/LoadingSpinner";
import React from "react";

interface IButtonProps extends React.ComponentProps<"button"> {
    color?:
        | "brand"
        | "primary"
        | "secondary"
        | "success"
        | "info"
        | "warning"
        | "danger"
        | "light"
        | "dark";
    sm?:boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({
    className,
    children,
    disabled,
    color = "primary",
    sm = false,
    ...props
}) => {
    return (
        <button
            className={
                className ??
                `disabled:hover:bg-opacity-15 flex cursor-pointer items-center disabled:cursor-not-allowed bg-${color} border hover:bg-white hover:dark:bg-transparent border-${color} hover:border-${color} text-white hover:text-${color} rounded-md ${sm ? "p-1 text-sm" : "p-2"}`
            }
            disabled={disabled}
            {...props}
        >
            {children}
            {disabled ? <LoadingSpinner /> : ""}
        </button>
    );
};

export default Button;
