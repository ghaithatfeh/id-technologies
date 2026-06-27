import Form from "@/Components/form/Form";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Seo from "@/Models/Seo";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ seo }: { seo: Seo }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        page: string;
        meta_title: string;
        meta_description: string;
    }>({
        _method: "PUT",
        page: seo?.page,
        meta_title: seo?.meta_title,
        meta_description: seo?.meta_description,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.seo.update", seo.id));
    };

    return (
        <PageCard title={`Edit SEO Record: ${seo.page}`}>
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="meta_title"
                            label={"Meta Title"}
                            onChange={(e) =>
                                setData("meta_title", e.target.value)
                            }
                            defaultValue={seo.meta_title}
                        />
                        <div className={"md:col-span-2"}>
                            <TranslatableEditor
                                name="meta_description"
                                label={"Meta Description"}
                                onChange={(e) =>
                                    setData("meta_description", e.target.value)
                                }
                                defaultValue={seo.meta_description}
                            />
                        </div>
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Edit;
