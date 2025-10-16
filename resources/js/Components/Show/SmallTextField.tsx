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
            className={`dark:bg-dark text-lg mb-5 flex ${col && "flex-col items-start"} w-full items-center justify-between rounded-md bg-gray-50 p-4 dark:text-white`}
        >
            <label className="font-semibold">{label} :</label>
            <span>{value}</span>
        </div>
    );
};

export default SmallTextField;
