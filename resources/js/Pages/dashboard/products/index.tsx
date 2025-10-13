import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Product from "@/Models/Product";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";
import { translate } from "@/Models/Translatable";
import ImagePreview from "@/Components/Show/ImagePreview";

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
                    label: "Is Active ?",
                    sortable: true,
                    render: (cell, record, setHidden, revalidate) => {
                        return cell ? <span>Yes</span> : <span>No</span>;
                    },
                },
                {
                    name: "category.name",
                    label: "Category Name",
                    translatable: true,
                    render: (cell, record, setHidden, revalidate) => {
                        return (
                            record?.category_id && (
                                <Link
                                    className="hover:text-primary underline"
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
                        >
                            Download ({data.extension}) File
                        </a>
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
