import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Exhibition from "@/Models/Exhibition";
import Http from "@/Modules/Http/Http";

const Index = ({ exportables }: { exportables: string[] }) => {
    return (
        <DataTable
            title="Exhibition Table"
            createUrl={route("v1.web.protected.exhibitions.create")}
            importRoute={route("v1.web.protected.exhibitions.import")}
            exportRoute={route("v1.web.protected.exhibitions.export")}
            importExampleRoute={route(
                "v1.web.protected.exhibitions.import.example",
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
                Http.make<Exhibition[]>().get(
                    route("v1.web.protected.exhibitions.data"),
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
                { name: "date", label: "Date", sortable: true },
                {
                    name: "description",
                    label: "Description",
                    translatable: true,
                    sortable: true,
                    render(data) {
                        return (
                            <p
                                className={
                                    "w-full max-w-52 overflow-hidden overflow-ellipsis"
                                }
                            >
                                {data}
                            </p>
                        );
                    },
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route(
                                "v1.web.protected.exhibitions.index",
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
