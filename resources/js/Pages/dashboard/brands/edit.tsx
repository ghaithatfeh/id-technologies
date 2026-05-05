import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import FileUploader from "@/Components/form/fields/file-uploader/FileUploader";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Brand from "@/Models/Brand";
import Media from "@/Models/Media";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ brand }: { brand: Brand }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        brand_title: string;
        subtitle?: string;
        background_image?: File | undefined | Media;
        icon?: File | undefined | Media;
        logo?: File | undefined | Media;

        background_image_alt?: string | undefined;
        background_image_description?: string | undefined;
        icon_alt?: string | undefined;
        icon_description?: string | undefined;
        logo_alt?: string | undefined;
        logo_description?: string | undefined;
    }>({
        _method: "PUT",
        ...brand,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.brands.update", brand.id));
    };

    return (
        <PageCard title="Edit Brand">
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
                            defaultValue={brand.brand_title}
                            required
                        />

                        <TranslatableInput
                            name="subtitle"
                            label={"Subtitle"}
                            onChange={(e) =>
                                setData("subtitle", e.target.value)
                            }
                            defaultValue={brand.subtitle}
                            required
                        />
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                acceptedFileTypes={["image/*"]}
                                name="background_image"
                                label={"Background Image"}
                                onChange={(files) =>
                                    setData("background_image", files)
                                }
                                defaultValue={brand.background_image}
                            />
                        </div>
                        <Input
                            name="background_image_alt"
                            label={"Background Image ALT"}
                            onChange={(e) =>
                                setData("background_image_alt", e.target.value)
                            }
                            defaultValue={brand.background_image_alt}
                        />
                        <Input
                            name="background_image_description"
                            label={"Background Image Description"}
                            onChange={(e) =>
                                setData(
                                    "background_image_description",
                                    e.target.value,
                                )
                            }
                            defaultValue={brand.background_image_description}
                        />
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                acceptedFileTypes={["image/*"]}
                                name="icon"
                                label={"Icon"}
                                onChange={(files) => setData("icon", files)}
                                defaultValue={brand.icon}
                            />
                        </div>
                        <Input
                            name="icon_alt"
                            label={"Icon ALT"}
                            onChange={(e) =>
                                setData("icon_alt", e.target.value)
                            }
                            defaultValue={brand.icon_alt}
                        />
                        <Input
                            name="icon_description"
                            label={"Icon Description"}
                            onChange={(e) =>
                                setData("icon_description", e.target.value)
                            }
                            defaultValue={brand.icon_description}
                        />

                        <div className={"md:col-span-2"}>
                            <FileUploader
                                acceptedFileTypes={["image/*"]}
                                name="logo"
                                label={"Logo"}
                                onChange={(files) => setData("logo", files)}
                                defaultValue={brand.logo}
                            />
                        </div>
                        <Input
                            name="logo_alt"
                            label={"Logo ALT"}
                            onChange={(e) =>
                                setData("logo_alt", e.target.value)
                            }
                            defaultValue={brand.logo_alt}
                        />
                        <Input
                            name="logo_description"
                            label={"Logo Description"}
                            onChange={(e) =>
                                setData("logo_description", e.target.value)
                            }
                            defaultValue={brand.logo_description}
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Edit;
