import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import ImagePreview from "@/Components/Show/ImagePreview";
import Product from "@/Models/Product";
import { translate } from "@/Models/Translatable";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";

const Index = () => {
    return (
        <DataTable
            title="Product Table"
            createUrl={route("v1.web.protected.products.create")}
            getDataArray={(res) => res.data}
            getTotalPages={(res) => res?.paginate?.total_pages ?? 0}
            getTotalRecords={(res) => res.paginate?.total ?? 0}
            api={(
                page?: number | undefined,
                search?: string | undefined,
                sortCol?: string | undefined,
                sortDir?: string | undefined,
                perPage?: number | undefined,
                params?: object | undefined,
            ) =>
                Http.make<Product[]>().get(
                    route("v1.web.protected.products.data"),
                    {
                        page: page,
                        search: search,
                        sort_col: sortCol,
                        sort_dir: sortDir,
                        limit: perPage,
                        ...params,
                    },
                )
            }
            schema={[
                {
                    name: "id",
                    label: "ID",
                    sortable: true,
                },
                {
                    name: "name",
                    label: "Name",
                    translatable: true,
                    sortable: true,
                },
                {
                    name: "is_active",
                    label: "Is Avilable?",
                    sortable: true,
                    render: (cell, record, setHidden, revalidate) => {
                        return cell ? <span>Yes</span> : <span>No</span>;
                    },
                },
                {
                    name: "category.name",
                    label: "Category",
                    translatable: true,
                    render: (cell, record, setHidden, revalidate) => {
                        return (
                            record?.category_id && (
                                <Link
                                    className="underline hover:text-primary"
                                    href={route(
                                        "v1.web.protected.categories.show",
                                        record?.category_id,
                                    )}
                                >
                                    {translate(record?.category?.name)}
                                </Link>
                            )
                        );
                    },
                },
                {
                    name: "image",
                    label: "Image",
                    render: (data) => (
                        <div className={"h-24 w-24"}>
                            <ImagePreview src={data.url} />
                        </div>
                    ),
                },
                {
                    name: "pdf",
                    label: "PDF",
                    render: (data) => (
                        <a
                            className={"hover:underline"}
                            target={"_blank"}
                            href={data.url}
                            download
                        >
                            Download ({data.extension}) File
                        </a>
                    ),
                },
                {
                    name: "video",
                    label: "Video",
                    render: (data) =>
                        data?.url ? (
                            <a
                                className={"hover:underline"}
                                target={"_blank"}
                                href={data.url}
                                download
                            >
                                Download ({data.extension}) File
                            </a>
                        ) : (
                            "No Video"
                        ),
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route("v1.web.protected.products.index")}
                            id={record?.id ?? 0}
                            setHidden={setHidden}
                        />
                    ),
                },
            ]}
        />
    );
};

export default Index;
