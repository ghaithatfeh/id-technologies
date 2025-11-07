import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import PageCard from "@/Components/ui/PageCard";
import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Project from "@/Models/Project";
import Media from "@/Models/Media";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";

const Edit = ({ project }: { project: Project }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        title: string;
        description: string;
        cover?: File | undefined | Media;
        images?: File[] | undefined | Media[];
        videos?: File[] | undefined | Media[];
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

                        <Input
                            name="cover"
                            label={"Cover"}
                            onChange={(e) =>
                                setData("cover", e.target.files?.[0])
                            }
                            type={"file"}
                        />
                        <Input
                            name="images"
                            label={"Images"}
                            onChange={(e) =>
                                setData(
                                    "images",
                                    e.target.files
                                        ? Array.from(e.target.files)
                                        : undefined,
                                )
                            }
                            type={"file"}
                            multiple
                        />
                        <Input
                            name="videos"
                            label={"Videos"}
                            onChange={(e) =>
                                setData(
                                    "videos",
                                    e.target.files
                                        ? Array.from(e.target.files)
                                        : undefined,
                                )
                            }
                            type={"file"}
                            multiple
                        />
                        <div className={"md:col-span-2"}>
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
