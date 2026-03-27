import Eye from "@/Components/icons/Eye";
import Pencil from "@/Components/icons/Pencil";
import Trash from "@/Components/icons/Trash";
import { swal } from "@/helper";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";
import React from "react";
import { toast } from "react-toastify";

type Buttons = "delete" | "edit" | "show";

export interface ActionsButtonsProps<Data extends Record<string, any>> {
    data?: Data;
    id?: number | string;
    buttons: Buttons[];
    children?: React.JSX.Element | undefined;
    baseUrl: string;
    deleteUrl?: string;
    editUrl?: string;
    showUrl?: string;
    setHidden?: (value: ((prevState: number[]) => number[]) | number[]) => void;
}

function ActionsButtons<Data extends Record<string, any>>({
    data,
    id,
    buttons,
    baseUrl,
    deleteUrl,
    showUrl,
    editUrl,
    setHidden,
    children,
}: ActionsButtonsProps<Data>) {
    const dataId = id ?? data?.id ?? undefined;

    const dUrl = deleteUrl ?? `${baseUrl}/${dataId ?? ""}`; // delete url
    const sUrl = showUrl ?? `${baseUrl}/${dataId ?? ""}`; // show url
    const eUrl = editUrl ?? `${baseUrl}/${dataId ?? ""}/edit` + ""; // edit url

    const handleDelete = () => {
        Http.make<boolean>()
            .delete(dUrl)
            .then((res) => {
                if (res.ok()) {
                    toast.success("Deleted !");
                    if (setHidden) {
                        setHidden((prevState) => [dataId, ...prevState]);
                    }
                } else {
                    toast.error("There Is Been An Error In Deleting");
                }
            })
            .catch((e) => {
                toast.error("There Is Been An Error In Deleting");
                console.error(e);
            });
    };

    return (
        <div className={`flex items-center justify-start gap-3`}>
            {buttons.includes("show") && (
                <Link
                    href={sUrl}
                    className="rounded-md p-0.5 hover:bg-white-secondary"
                >
                    <Eye className="h-5 w-5 text-info" />
                </Link>
            )}
            {buttons.includes("edit") && (
                <Link
                    href={eUrl}
                    className="rounded-md p-0.5 hover:bg-white-secondary"
                >
                    <Pencil className="h-5 w-5 text-success" />
                </Link>
            )}

            {buttons.includes("delete") && (
                <button className="rounded-md p-0.5 hover:bg-white-secondary">
                    <Trash
                        className="h-5 w-5 cursor-pointer text-danger"
                        onClick={() => {
                            swal.fire({
                                title: "Do you want to Delete this item ?",
                                showDenyButton: true,
                                showCancelButton: true,
                                confirmButtonText: "Yes",
                                denyButtonText: `No`,
                                confirmButtonColor: "#007BFF",
                            }).then((result) => {
                                if (result.isConfirmed && dataId) {
                                    handleDelete();
                                } else if (result.isDenied) {
                                    toast.info("Didn't Delete");
                                }
                            });
                        }}
                    />
                </button>
            )}
            {children}
        </div>
    );
}

export default ActionsButtons;
