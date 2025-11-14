import ApiSelect from "@/Components/form/fields/Select/ApiSelect";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Brand from "@/Models/Brand";
import Category from "@/Models/Category";
import { translate } from "@/Models/Translatable";
import ApiResponse from "@/Modules/Http/ApiResponse";
import Http from "@/Modules/Http/Http";
import { useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        brand_id: number;
        parent_id?: number;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.protected.categories.store"));
    };

    const [brandId, setBrandId] = useState<number | undefined>(undefined);

    const getMainCategoriesByBrand = async (page?: number, search?: string) => {
        if (brandId) {
            return await Http.make<Category[]>().get(
                route("v1.web.protected.brands.categories.main", brandId),
                { page: page, search: search },
            );
        }
        return new ApiResponse(
            undefined,
            true,
            200,
            "Data retrieved successfully",
            undefined,
        );
    };

    return (
        <PageCard title="Add New Category">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-end gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="name"
                            label={"Name"}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <ApiSelect
                            name="brand_id"
                            label={"Brand"}
                            api={(page, search) =>
                                Http.make<Brand[]>().get(
                                    route("v1.web.protected.brands.data"),
                                    { page: page, search: search },
                                )
                            }
                            getDataArray={(response) => response?.data ?? []}
                            getIsLast={(data) =>
                                data?.paginate?.is_last_page ?? false
                            }
                            getTotalPages={(data) =>
                                data?.paginate?.total_pages ?? 0
                            }
                            onChange={(e) => {
                                const id = Number(e.target.value);
                                if (id) {
                                    setData("brand_id", id);
                                    setBrandId(id);
                                }
                            }}
                            getOptionLabel={(data) =>
                                translate(data.brand_title)
                            }
                            optionValue={"id"}
                            required
                        />

                        <ApiSelect
                            name="parent_id"
                            label={"Parent Category"}
                            api={getMainCategoriesByBrand}
                            getDataArray={(response) => response?.data ?? []}
                            getIsLast={(data) =>
                                data?.paginate?.is_last_page ?? false
                            }
                            getTotalPages={(data) =>
                                data?.paginate?.total_pages ?? 0
                            }
                            onChange={(e) =>
                                setData("parent_id", e.target.value ? Number(e.target.value) : undefined)
                            }
                            getOptionLabel={(data) => translate(data.name)}
                            optionValue={"id"}
                            revalidateKey={brandId}
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
