import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Seo from "@/Models/Seo";
import Http from "@/Modules/Http/Http";

const Index = () => {
    return (
        <DataTable
            title="SEO"
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
                Http.make<Seo[]>().get(route("v1.web.protected.seo.data"), {
                    page: page,
                    search: search,
                    sort_col: sortCol,
                    sort_dir: sortDir,
                    limit: perPage,
                    ...params,
                })
            }
            schema={[
                {
                    name: "id",
                    label: "ID",
                    sortable: true,
                },
                {
                    name: "page",
                    label: "Page",
                    sortable: true,
                },
                {
                    name: "meta_title",
                    label: "Meta Title",
                    translatable: true,
                    sortable: true,
                },
                {
                    name: "meta_description",
                    label: "Meta Description",
                    translatable: true,
                    sortable: true,
                    render(data) {
                        return (
                            <div
                                className={
                                    "max-w-40 overflow-hidden overflow-ellipsis"
                                }
                            >
                                {data}
                            </div>
                        );
                    },
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route("v1.web.protected.seo.index")}
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
