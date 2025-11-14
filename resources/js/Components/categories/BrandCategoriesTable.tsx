import ActionsButtons from "@/Components/Datatable/ActionsButtons";
import DataTable from "@/Components/Datatable/DataTable";
import Category from "@/Models/Category";
import Http from "@/Modules/Http/Http";
import { toast } from "react-toastify";
import { useState } from "react";

function CategorySortIndexColumn(
    _data: any,
    record?: Category | undefined,
    _setHidden?: (
        value: ((prevState: number[]) => number[]) | number[],
    ) => void,
    revalidate?: () => void,
) {
    const id = record?.id;
    const [value, setValue] = useState(record?.sort_index);

    const save = async (newVal: number | undefined) => {
        if (newVal === record?.sort_index) return;
        setValue(newVal);
        try {
            const payload = { sort_index: newVal };
            const res = await Http.make().put(
                route("v1.web.protected.categories.update.sort_index", id),
                payload,
            );
            if (res.ok()) {
                toast.success("Updated sort index");
                revalidate && revalidate();
            } else {
                toast.error(res.message);
            }
        } catch (e: any) {
            toast.error(
                e?.response?.data?.message ??
                    "Validation error while updating sort index",
            );
        }
    };

    return (
        <input
            type="number"
            value={value}
            className="dark:bg-dark-primary w-24 rounded border px-2 py-1"
            onBlur={(e) =>
                e.currentTarget.value
                    ? save(Number(e.currentTarget.value))
                    : save(undefined)
            }
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    (e.target as HTMLInputElement).blur();
                }
            }}
            onChange={(e) => {
                setValue(e.target.value ? Number(e.target.value) : undefined);
            }}
        />
    );
}

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
                    render: CategorySortIndexColumn,
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
