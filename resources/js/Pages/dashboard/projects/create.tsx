import Form from "@/Components/form/Form";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import FileUploader, {
    MediaInput,
} from "@/Components/form/fields/file-uploader/FileUploader";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        title: string;
        description: string;
        cover?: MediaInput | null;
        images?: MediaInput[] | null;
        videos?: MediaInput[] | null;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.protected.projects.store"));
    };

    return (
        <PageCard title="Add New Project">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="title"
                            label={"Title"}
                            onChange={(e) => setData("title", e.target.value)}
                            required
                        />

                        <div className={"md:col-span-2"}>
                            <FileUploader
                                name={"cover"}
                                label={"Cover"}
                                onChange={(file) => setData("cover", file)}
                                acceptedFileTypes={["image/*"]}
                            />

                            <FileUploader
                                name={"images"}
                                label={"Images"}
                                onChange={(file) => setData("images", file)}
                                acceptedFileTypes={["image/*"]}
                                isMultiple={true}
                            />

                            <FileUploader
                                name={"videos"}
                                label={"Videos"}
                                onChange={(file) => setData("videos", file)}
                                acceptedFileTypes={["video/*"]}
                                isMultiple={true}
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
