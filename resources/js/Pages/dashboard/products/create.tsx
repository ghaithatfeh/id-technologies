import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import Http from "@/Modules/Http/Http";
import Category from "@/Models/Category";
import ApiSelect from "@/Components/form/fields/Select/ApiSelect";
import { translate } from "@/Models/Translatable";
import Input from "@/Components/form/fields/Input";
import Radio from "@/Components/form/fields/Radio";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Media from "@/Models/Media";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        is_active: boolean;
        category_id: number;
        image?: File | undefined | Media;
        pdf?: File | undefined | Media;
        support_link?: string;
        is_featured?: boolean;
    }>({
        name: "",
        is_active: true,
        category_id: 0,
        is_featured: false,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.products.store"));
    };

    return (
        <PageCard title="Add New Product">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-end gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="name"
                            label={"Name"}
                            onChange={(e) => setData("name", e.target.value)}
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
                            checked={true}
                            label={"Is Avilable?"}
                        />
                        <Radio
                            name="is_featured"
                            items={[
                                { label: "Yes", value: true },
                                { label: "No", value: false },
                            ]}
                            onChange={(e) =>
                                setData("is_featured", e.target.value == "true")
                            }
                            checked={false}
                            label={"Is Featured?"}
                        />
                        <Input
                            name="image"
                            label={"Image"}
                            onChange={(e) =>
                                setData("image", e.target.files?.[0])
                            }
                            type={"file"}
                            required
                        />
                        <Input
                            name="pdf"
                            label={"Pdf"}
                            onChange={(e) =>
                                setData("pdf", e.target.files?.[0])
                            }
                            type={"file"}
                            required
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
                            required
                        />

                        <Input
                            name={"support_link"}
                            label={"Support Link"}
                            type={"url"}
                            onChange={(e) => {
                                setData("support_link", e.target.value);
                            }}
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
