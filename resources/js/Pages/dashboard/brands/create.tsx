import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import Media from "@/Models/Media";
import Input from "@/Components/form/fields/Input";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Brand from "@/Models/Brand";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        brand_title: string;
        background_image?: File | undefined;
        icon?: File | undefined;
        logo?: File | undefined;
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
                        <Input
                            name="background_image"
                            label={"Background Image"}
                            onChange={(e) =>
                                setData("background_image", e.target.files?.[0])
                            }
                            type={"file"}
                            required
                        />
                        <Input
                            name="icon"
                            label={"Icon"}
                            onChange={(e) =>
                                setData("icon", e.target.files?.[0])
                            }
                            type={"file"}
                            required
                        />
                        <Input
                            name="logo"
                            label={"Logo"}
                            onChange={(e) =>
                                setData("logo", e.target.files?.[0])
                            }
                            type={"file"}
                            required
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
