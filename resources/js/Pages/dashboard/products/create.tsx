import FileUploader, {
    MediaInput,
} from "@/Components/form/fields/file-uploader/FileUploader";
import Input from "@/Components/form/fields/Input";
import Radio from "@/Components/form/fields/Radio";
import ApiSelect from "@/Components/form/fields/Select/ApiSelect";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Category from "@/Models/Category";
import { translate } from "@/Models/Translatable";
import Http from "@/Modules/Http/Http";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        is_active: boolean;
        category_id: number;
        image?: MediaInput | null;
        pdf?: MediaInput | null;
        is_featured?: boolean;
        video?: MediaInput | null;
        image_alt?: string | undefined;
        image_description?: string | undefined;
        description?: string;
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
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                name={"image"}
                                label={"Image"}
                                onChange={(file) => setData("image", file)}
                                acceptedFileTypes={["image/*"]}
                            />
                        </div>

                        <Input
                            name="image_alt"
                            label={"Image ALT"}
                            onChange={(e) =>
                                setData("image_alt", e.target.value)
                            }
                        />
                        <Input
                            name="image_description"
                            label={"Image Description"}
                            onChange={(e) =>
                                setData("image_description", e.target.value)
                            }
                        />
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                name={"pdf"}
                                label={"PDF"}
                                onChange={(file) => setData("pdf", file)}
                                acceptedFileTypes={[".pdf", "application/pdf"]}
                            />
                        </div>

                        <div className={"md:col-span-2"}>
                            <FileUploader
                                name={"video"}
                                label={"Video"}
                                onChange={(file) => setData("video", file)}
                                acceptedFileTypes={["video/*"]}
                            />
                        </div>

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
                        <div className={"md:col-span-2"}>
                            <TranslatableEditor
                                name={"description"}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                                label={"Description"}
                            />
                        </div>
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
