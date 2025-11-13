import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Category from "@/Models/Category";
import { translate } from "@/Models/Translatable";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";

const CategoryChildrenTable = ({ categoryId }: { categoryId: number }) => {
    return (
        <DataTable
            title="Category Table"
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
                Http.make<Category[]>().get(
                    route("v1.web.protected.categories.children", categoryId),
                    {
                        page: page,
                        search: search,
                        sort_col: sortCol ?? "sort_index",
                        sort_dir: sortDir ?? "asc",
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
                    name: "brand.brand_title",
                    label: "Brand",
                    translatable: true,
                    render: (_cell, record) => {
                        return (
                            record?.brand_id && (
                                <Link
                                    className="underline hover:text-primary"
                                    href={route(
                                        "v1.web.protected.brands.show",
                                        record?.brand_id,
                                    )}
                                >
                                    {translate(record?.brand?.brand_title)}
                                </Link>
                            )
                        );
                    },
                },
                {
                    name: "sort_index",
                    label: "Sort Index",
                    sortable: true,
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route("v1.web.protected.categories.index")}
                            id={record?.id ?? 0}
                            setHidden={setHidden}
                        />
                    ),
                },
            ]}
        />
    );
};

export default CategoryChildrenTable;
