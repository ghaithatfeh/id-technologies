const SmallTextField = ({
    label,
    value,
    col,
}: {
    label?: string;
    value?: any;
    col?: boolean;
}) => {
    return (
        <div
            className={`mb-5 flex items-start dark:bg-dark ${col && "flex-col items-start"} w-full items-center justify-between rounded-md bg-gray-50 p-4 dark:text-white`}
        >
            <label className="font-semibold">{`${label} :`}</label>
            <span className={"text-wrap"}>{value}</span>
        </div>
    );
};

export default SmallTextField;
