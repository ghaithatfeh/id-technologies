import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Project from "@/Models/Project";
import Http from "@/Modules/Http/Http";
import ImagePreview from "@/Components/Show/ImagePreview";

const Index = () => {
    return (
        <DataTable
            title="Project Table"
            createUrl={route("v1.web.protected.projects.create")}
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
                Http.make<Project[]>().get(
                    route("v1.web.protected.projects.data"),
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
                    name: "title",
                    label: "Title",
                    translatable: true,
                    sortable: true,
                    render: (data) => (
                        <p
                            style={{
                                maxWidth: "300px",
                                textWrap: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {data}
                        </p>
                    ),
                },
                {
                    name: "description",
                    label: "Description",
                    translatable: true,
                    sortable: true,
                    render: (data) => (
                        <p
                            style={{
                                maxWidth: "300px",
                                textWrap: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {data}
                        </p>
                    ),
                },
                {
                    name: "cover",
                    label: "Cover",
                    render: (data) => (
                        <div className={"h-24 w-24"}>
                            <ImagePreview src={data.url} />
                        </div>
                    ),
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route("v1.web.protected.projects.index")}
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
