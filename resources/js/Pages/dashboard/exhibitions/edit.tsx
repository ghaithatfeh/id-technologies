import Input from "@/Components/form/fields/Input";
import TranslatableEditor from "@/Components/form/fields/TranslatableEditor";
import TranslatableInput from "@/Components/form/fields/TranslatableInput";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import TranslatableInputsContext from "@/Contexts/TranslatableInputsContext";
import Exhibition from "@/Models/Exhibition";
import Media from "@/Models/Media";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ exhibition }: { exhibition: Exhibition }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        date: string;
        description: string;
        images?: File[] | Media[] | undefined;
        videos?: File[] | undefined | Media[];
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
                        <Input
                            name="images"
                            label={"Images"}
                            onChange={(e) =>
                                setData(
                                    "images",
                                    e.target.files
                                        ? Array.from(e.target.files)
                                        : [],
                                )
                            }
                            type={"file"}
                            multiple={true}
                            accept={"image/*"}
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
                            accept={"video/*"}
                            multiple
                        />

                        <div className={"md:col-span-2"}>
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
