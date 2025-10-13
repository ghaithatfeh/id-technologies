import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import ApiResponse from "@/Modules/Http/ApiResponse";
import Http from "@/Modules/Http/Http";
import Brand from "@/Models/Brand";
import ApiSelect from "@/Components/form/fields/Select/ApiSelect";
import { translate } from "@/Models/Translatable";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Category from "@/Models/Category";

const Edit = ({ category }: { category: Category }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        brand_id: number;
    }>({ _method: "PUT", name: category?.name, brand_id: category?.brand_id });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.categories.update", category.id));
    };

    return (
        <PageCard title="Edit Category">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-end gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="name"
                            label={"Name"}
                            onChange={(e) => setData("name", e.target.value)}
                            defaultValue={category.name}
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
                            onChange={(e) =>
                                setData("brand_id", Number(e.target.value))
                            }
                            getOptionLabel={(data) =>
                                translate(data.brand_title)
                            }
                            optionValue={"id"}
                            defaultValue={category?.brand}
                            required
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Edit;
