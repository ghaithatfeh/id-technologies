import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Category from "@/Models/Category";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";
import { translate } from "@/Models/Translatable";

const Index = ({ exportables }: { exportables: string[] }) => {
    return (
        <DataTable
            title="Categories"
            createUrl={route("v1.web.protected.categories.create")}
            importRoute={route("v1.web.protected.categories.import")}
            exportRoute={route("v1.web.protected.categories.export")}
            importExampleRoute={route(
                "v1.web.protected.categories.import.example",
            )}
            exportables={exportables}
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
                    route("v1.web.protected.categories.data"),
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
                    name: "brand.brand_title",
                    label: "Brand",
                    translatable: true,
                    render: (cell, record, setHidden, revalidate) => {
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
                    name: "parent.id",
                    label: "Parent",
                    translatable: true,
                    render: (cell, record, setHidden, revalidate) => {
                        return (
                            record?.parent_id && (
                                <Link
                                    className="underline hover:text-primary"
                                    href={route(
                                        "v1.web.protected.categories.show",
                                        record?.parent_id,
                                    )}
                                >
                                    {translate(record.parent?.name)}
                                </Link>
                            )
                        );
                    },
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

export default Index;
