import Media, { getFileNameFromUrl, isMedia } from "@/Models/Media";
import { MiddlewareProps } from "@/types";
import { usePage } from "@inertiajs/react";
import {
    ActualFileObject,
    FilePondInitialFile,
    ProcessServerConfigFunction,
    ServerUrl,
} from "filepond";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { JSX, useState } from "react";
import { FilePond } from "react-filepond";

export type MediaInput = File | Media;

function toInitialFile(file: Media): FilePondInitialFile {
    return {
        source: file?.url,
        options: {
            type: "local",
            file: {
                name: getFileNameFromUrl(file?.url),
                size: file?.size,
                type: file?.mime_type,
            },
            metadata: {
                ...(file?.mime_type?.startsWith("image/")
                    ? { poster: file?.url }
                    : {}),
                media: file,
            },
        },
    };
}

// @ts-ignore
function FileUploader({
    name,
    isMultiple,
    label,
    acceptedFileTypes,
    onChange,
    defaultValue,
    process,
}: {
    name: string;
    isMultiple: true;
    label?: string;
    acceptedFileTypes?: string[];
    onChange?: (file: MediaInput[] | null) => void;
    defaultValue?: Media[] | Media;
    process?: string | ServerUrl | ProcessServerConfigFunction | null;
}): JSX.Element;

function FileUploader({
    name,
    isMultiple,
    label,
    acceptedFileTypes,
    onChange,
    defaultValue,
    process,
}: {
    name: string;
    isMultiple?: false | undefined;
    label?: string;
    acceptedFileTypes?: string[];
    onChange?: (file: MediaInput | undefined) => void;
    defaultValue?: Media[] | Media;
    process?: string | ServerUrl | ProcessServerConfigFunction | null;
}): JSX.Element;

function FileUploader({
    name,
    isMultiple = false,
    label = undefined,
    acceptedFileTypes = ["image/jpeg", "image/png", "image/jpg"],
    onChange,
    defaultValue = [],
    process,
}: {
    name: string;
    isMultiple?: boolean;
    label?: string;
    acceptedFileTypes?: string[];
    onChange?: (file: MediaInput | MediaInput[] | null | undefined) => void;
    defaultValue?: Media[] | Media;
    process?: string | ServerUrl | ProcessServerConfigFunction | null;
}): JSX.Element {
    defaultValue = defaultValue
        ? Array.isArray(defaultValue)
            ? defaultValue
            : [defaultValue]
        : [];

    const initialFiles: FilePondInitialFile[] | ActualFileObject[] =
        defaultValue.map((file) => toInitialFile(file ?? {}));

    const [files, setFiles] = useState<
        FilePondInitialFile[] | ActualFileObject[]
    >(initialFiles);

    const errors = usePage<MiddlewareProps>().props?.errors;

    return (
        <div
            className={
                "flex flex-col items-start justify-start gap-2"
            }
        >
            {label && (
                <label
                    className={
                        "flex flex-col items-start justify-between text-sm font-medium text-gray-900 dark:text-white"
                    }
                >
                    {label}
                </label>
            )}
            <div className={"w-full"}>
                <FilePond
                    files={files}
                    onupdatefiles={(fileItems) => {
                        const value = fileItems.map((item) => {
                            const media = item.getMetadata("media");

                            return isMedia(media) ? media : (item.file as File);
                        });

                        setFiles(
                            value.map((item) =>
                                isMedia(item) ? toInitialFile(item) : item,
                            ),
                        );

                        if (onChange) {
                            if (isMultiple) {
                                onChange(value.length > 0 ? value : null);
                            } else {
                                value.length > 0
                                    ? onChange(value[0])
                                    : onChange(undefined);
                            }
                        }
                    }}
                    acceptedFileTypes={acceptedFileTypes}
                    allowMultiple={isMultiple}
                    allowFilePoster={true}
                    filePosterMaxHeight={80}
                    filePosterMinHeight={40}
                    server={{ process: process }}
                />
            </div>
            {name && errors?.[name] && (
                <p className={"text-sm text-red-500"}>
                    {errors[name]}
                </p>
            )}
        </div>
    );
}

export default FileUploader;
