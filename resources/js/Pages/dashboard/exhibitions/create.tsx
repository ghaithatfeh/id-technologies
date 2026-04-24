import FileUploader, {
    MediaInput,
} from "@/Components/form/fields/file-uploader/FileUploader";
import Input from "@/Components/form/fields/Input";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        date: string;
        description: string;
        images?: MediaInput[] | null;
        videos?: MediaInput[] | null;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.exhibitions.store"));
    };

    return (
        <PageCard title="Add New Exhibition">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="name"
                            label={"Name"}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <Input
                            name="date"
                            label={"Date"}
                            type={"date"}
                            onChange={(e) => setData("date", e.target?.value)}
                            required
                        />
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                label={"Images"}
                                name={"images"}
                                isMultiple
                                onChange={(files) => {
                                    setData("images", files);
                                }}
                                acceptedFileTypes={["image/*"]}
                            />

                            <FileUploader
                                label={"Videos"}
                                name={"videos"}
                                isMultiple
                                onChange={(files) => {
                                    setData("videos", files);
                                }}
                                acceptedFileTypes={["video/*"]}
                            />

                            <TranslatableEditor
                                name="description"
                                label={"Description"}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Create;
