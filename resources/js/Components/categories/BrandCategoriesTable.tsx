import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Category from "@/Models/Category";
import Http from "@/Modules/Http/Http";

const BrandCategoriesTable = ({ brandId }: { brandId: number }) => {
    return (
        <DataTable
            title="Brand Categories"
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
                    route("v1.web.protected.brands.categories.main", brandId),
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
                    name: "sort_index",
                    label: "Sort Index",
                    sortable: true,
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden) => (
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

export default BrandCategoriesTable;
