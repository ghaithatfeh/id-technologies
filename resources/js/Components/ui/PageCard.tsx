import { ReactNode } from "react";

const PageCard = ({
    children,
    title,
    actions,
}: {
    children?: ReactNode;
    title?: string;
    actions?: ReactNode;
}) => {
    return (
        <div
            className={
                "w-full rounded-md bg-white-secondary p-8 dark:bg-dark-secondary"
            }
            style={{
                boxShadow: "0 35px 60px 15px rgba(0, 0, 0, 0.2)",
            }}
        >
            {title || actions ? (
                <div
                    className={`mb-5 flex w-full items-center justify-between rounded-md bg-white p-4 shadow-md dark:bg-dark`}
                >
                    <h2 className="text-xl font-bold dark:text-white">
                        {title}
                    </h2>
                    <div>{actions ? actions : ""}</div>
                </div>
            ) : (
                ""
            )}
            {children}
        </div>
    );
};

export default PageCard;
