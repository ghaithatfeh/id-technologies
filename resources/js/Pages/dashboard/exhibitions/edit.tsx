import FileUploader, {
    MediaInput,
} from "@/Components/form/fields/file-uploader/FileUploader";
import Input from "@/Components/form/fields/Input";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Exhibition from "@/Models/Exhibition";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ exhibition }: { exhibition: Exhibition }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        date: string;
        description: string;
        images?: MediaInput[] | null;
        videos?: MediaInput[] | null;
    }>({
        _method: "PUT",
        name: exhibition?.name,
        date: exhibition?.date,
        description: exhibition?.description,
        images: exhibition?.images,
        videos: exhibition?.videos,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.exhibitions.update", exhibition.id));
    };

    return (
        <PageCard title="Edit Exhibition">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="name"
                            label={"Name"}
                            onChange={(e) => setData("name", e.target.value)}
                            defaultValue={exhibition.name}
                            required
                        />
                        <Input
                            name="date"
                            label={"Date"}
                            type={"date"}
                            onChange={(e) => setData("date", e.target?.value)}
                            defaultValue={exhibition.date}
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
                                defaultValue={exhibition.images}
                            />

                            <FileUploader
                                label={"Videos"}
                                name={"videos"}
                                isMultiple
                                onChange={(files) => {
                                    setData("videos", files);
                                }}
                                acceptedFileTypes={["video/*"]}
                                defaultValue={exhibition.videos}
                            />
                            <TranslatableEditor
                                name="description"
                                label={"Description"}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                defaultValue={exhibition.description}
                                required
                            />
                        </div>
                    </div>
                </Form>
            </TranslatableInputsContext>
        </PageCard>
    );
};

export default Edit;
