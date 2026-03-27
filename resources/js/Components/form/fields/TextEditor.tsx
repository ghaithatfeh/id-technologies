import { usePage } from "@inertiajs/react";
import React from "react";

export interface TextEditorProps extends React.ComponentProps<"textarea"> {
    name: string;
    label?: string;
    className?: string;
    required?: boolean;
}

const TextEditor: React.FC<TextEditorProps> = ({
    name,
    label,
    className,
    required = false,
    ...props
}) => {
    const errors = usePage().props.errors;
    const error = name && errors[name] ? errors[name] : undefined;

    return (
        <div className={className ?? ""}>
            <label className={"dark:text-white"}>
                {label}
                {required ? (
                    <span className="text-sm text-red-500">*</span>
                ) : (
                    ""
                )}
                <textarea
                    id="OrderNotes"
                    className={
                        className ??
                        "w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm dark:bg-dark-secondary"
                    }
                    rows={4}
                    name={name ?? ""}
                    {...props}
                />
            </label>
            {error ? <p className={"text-sm text-red-700"}>{error}</p> : ""}
        </div>
    );
};

export default TextEditor;
