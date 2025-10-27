import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import SupportLink from "@/Models/SupportLink";

const Edit = ({ supportLink }: { supportLink: SupportLink }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        product_name: string;
        type: string;
        link: string;
    }>({
        _method: "PUT",
        product_name: supportLink?.product_name,
        type: supportLink?.type,
        link: supportLink?.link,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.support.links.update", supportLink.id));
    };

    return (
        <PageCard title="Edit SupportLink">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="product_name"
                            label={"Product Name"}
                            onChange={(e) =>
                                setData("product_name", e.target.value)
                            }
                            defaultValue={supportLink.product_name}
                            required
                        />
                        <TranslatableInput
                            name="type"
                            label={"Type"}
                            onChange={(e) => setData("type", e.target.value)}
                            defaultValue={supportLink.type}
                            required
                        />
                        <Input
                            name="link"
                            label={"Link"}
                            type={"text"}
                            onChange={(e) => setData("link", e.target?.value)}
                            defaultValue={supportLink.link}
                            required
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Edit;
