import Form from "@/Components/form/Form";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import FileUploader, {
    MediaInput,
} from "@/Components/form/fields/file-uploader/FileUploader";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Project from "@/Models/Project";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ project }: { project: Project }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        title: string;
        description: string;
        cover?: MediaInput | null;
        images?: MediaInput[] | null;
        videos?: MediaInput[] | null;
    }>({
        _method: "PUT",
        title: project?.title,
        description: project?.description,
        cover: project?.cover,
        images: project?.images,
        videos: project?.videos,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.protected.projects.update", project.id));
    };

    return (
        <PageCard title="Edit Project">
            <TranslatableInputsContext>
                <Form onSubmit={onSubmit} processing={processing}>
                    <div
                        className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                    >
                        <TranslatableInput
                            name="title"
                            label={"Title"}
                            onChange={(e) => setData("title", e.target.value)}
                            defaultValue={project.title}
                            required
                        />
                        <div className={"md:col-span-2"}>
                            <FileUploader
                                name={"cover"}
                                label={"Cover"}
                                onChange={(file) => setData("cover", file)}
                                acceptedFileTypes={["image/*"]}
                                defaultValue={project.cover}
                            />

                            <FileUploader
                                name={"images"}
                                label={"Images"}
                                onChange={(file) => setData("images", file)}
                                acceptedFileTypes={["image/*"]}
                                isMultiple={true}
                                defaultValue={project.images}
                            />

                            <FileUploader
                                name={"videos"}
                                label={"Videos"}
                                onChange={(file) => setData("videos", file)}
                                acceptedFileTypes={["video/*"]}
                                isMultiple={true}
                                defaultValue={project.videos}
                            />
                            <TranslatableEditor
                                name="description"
                                label={"Description"}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                defaultValue={project.description}
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
