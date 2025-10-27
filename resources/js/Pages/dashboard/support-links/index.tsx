import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import SupportLink from "@/Models/SupportLink";
import ApiResponse from "@/Modules/Http/ApiResponse";
import Http from "@/Modules/Http/Http";

const Index = ({ exportables }: { exportables: string[] }) => {
    return (
        <DataTable
            title="SupportLink Table"
            createUrl={route("v1.web.protected.support.links.create")}
            importRoute={route("v1.web.protected.support.links.import")}
            exportRoute={route("v1.web.protected.support.links.export")}
            importExampleRoute={route(
                "v1.web.protected.support.links.import.example",
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
                Http.make<SupportLink[]>().get(
                    route("v1.web.protected.support.links.data"),
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
                    name: "product_name",
                    label: "Product Name",
                    translatable: true,
                    sortable: true,
                },
                {
                    name: "type",
                    label: "Type",
                    translatable: true,
                    sortable: true,
                },
                { name: "link", label: "Link", sortable: true },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route(
                                "v1.web.protected.support.links.index",
                            )}
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
