import FileUploader, {
    MediaInput,
} from "@/Components/form/fields/file-uploader/FileUploader";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        brand_title: string;
        subtitle?: string;
        background_image?: MediaInput | undefined;
        background_image_alt?: string | undefined;
        background_image_description?: string | undefined;
        icon_alt?: string | undefined;
        icon_description?: string | undefined;
        logo_alt?: string | undefined;
        logo_description?: string | undefined;
        icon?: MediaInput | undefined;
        logo?: MediaInput | undefined;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.brands.store"));
    };

    return (
        <PageCard title="Add New Brand">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="brand_title"
                            label={"Brand Title"}
                            onChange={(e) =>
                                setData("brand_title", e.target.value)
                            }
                            required
                        />
                        <TranslatableInput
                            name="subtitle"
                            label={"Subtitle"}
                            onChange={(e) =>
                                setData("subtitle", e.target.value)
                            }
                            required
                        />
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                name="background_image"
                                label={"Background Image"}
                                onChange={(files) =>
                                    setData("background_image", files)
                                }
                            />
                            <FileUploader
                                name="icon"
                                label={"Icon"}
                                onChange={(files) => setData("icon", files)}
                            />
                            <FileUploader
                                name="logo"
                                label={"Logo"}
                                onChange={(files) => setData("logo", files)}
                            />
                        </div>
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
