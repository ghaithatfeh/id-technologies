import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import Http from "@/Modules/Http/Http";
import Category from "@/Models/Category";
import ApiSelect from "@/Components/form/fields/Select/ApiSelect";
import { translate } from "@/Models/Translatable";
import Media from "@/Models/Media";
import Input from "@/Components/form/fields/Input";
import Radio from "@/Components/form/fields/Radio";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Product from "@/Models/Product";

const Edit = ({ product }: { product: Product }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        is_active: boolean;
        category_id: number;
        image?: File | undefined | Media;
        pdf?: File | undefined | Media;
    }>({
        _method: "PUT",
        name: product?.name,
        is_active: product?.is_active,
        category_id: product?.category_id,
        pdf: product?.pdf,
        image: product?.image,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.products.update", product.id));
    };

    return (
        <PageCard title="Edit Product">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="name"
                            label={"Name"}
                            onChange={(e) => setData("name", e.target.value)}
                            defaultValue={product.name}
                        />
                        <Radio
                            name="is_active"
                            items={[
                                { label: "Yes", value: true },
                                { label: "No", value: false },
                            ]}
                            onChange={(e) =>
                                setData("is_active", e.target.value == "true")
                            }
                            checked={(val: any) => val == product.is_active}
                            label={"Is Active ?"}
                        />
                        <Input
                            name="image"
                            label={"Image"}
                            onChange={(e) =>
                                setData("image", e.target.files?.[0])
                            }
                            type={"file"}
                        />
                        <Input
                            name="pdf"
                            label={"Pdf"}
                            onChange={(e) =>
                                setData("pdf", e.target.files?.[0])
                            }
                            type={"file"}
                        />
                        <ApiSelect
                            name="category_id"
                            label={"Category"}
                            api={(page, search) =>
                                Http.make<Category[]>().get(
                                    route("v1.web.protected.categories.data"),
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
                                setData("category_id", Number(e.target.value))
                            }
                            getOptionLabel={(data) => translate(data.name)}
                            optionValue={"id"}
                            defaultValue={product?.category}
                            required
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Edit;
