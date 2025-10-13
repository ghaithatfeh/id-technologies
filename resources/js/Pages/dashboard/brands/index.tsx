import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Brand from "@/Models/Brand";
import Http from "@/Modules/Http/Http";
import ImagePreview from "@/Components/Show/ImagePreview";

const Index = () => {
    return (
        <DataTable
            title="Brands"
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
                Http.make<Brand[]>().get(
                    route("v1.web.protected.brands.data"),
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
                    name: "brand_title",
                    label: "Brand Title",
                    translatable: true,
                    sortable: true,
                },
                {
                    name: "background_image",
                    label: "Background Image",
                    render: (data) => (
                        <div className={"w-24 h-24"}>
                            <ImagePreview src={data.url} />
                        </div>
                    ),
                },
                {
                    name: "logo",
                    label: "Logo",
                    render: (data) => (
                        <div className={"w-24 h-24"}>
                            <ImagePreview src={data.url} />
                        </div>
                    ),
                },
                {
                    name: "icon",
                    label: "Icon",
                    render: (data) => (
                        <div className={"w-24 h-24"}>
                            <ImagePreview src={data.url} />
                        </div>
                    ),
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden) => (
                        <ActionsButtons
                            buttons={["edit", "show"]}
                            baseUrl={route("v1.web.protected.brands.index")}
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
