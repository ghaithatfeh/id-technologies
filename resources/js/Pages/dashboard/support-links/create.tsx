import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import SupportLink from "@/Models/SupportLink";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        product_name: string;
        type: string;
        link: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.support.links.store"));
    };

    return (
        <PageCard title="Add New Support Link">
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
                            required
                        />
                        <TranslatableInput
                            name="type"
                            label={"Type"}
                            onChange={(e) => setData("type", e.target.value)}
                            required
                        />
                        <Input
                            name="link"
                            label={"Link"}
                            type={"text"}
                            onChange={(e) => setData("link", e.target?.value)}
                            required
                        />
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
