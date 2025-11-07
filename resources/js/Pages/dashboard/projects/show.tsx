import Button from "@/Components/ui/Button";
import PageCard from "@/Components/ui/PageCard";
import Project from "@/Models/Project";
import { Link } from "@inertiajs/react";
import Gallery from "@/Components/Show/Gallery";
import SmallTextField from "@/Components/Show/SmallTextField";
import { translate } from "@/Models/Translatable";
import LongTextField from "@/Components/Show/LongTextField";

const Show = ({ project }: { project: Project }) => {
    return (
        <PageCard
            title="Project Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.projects.edit",
                            project.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField
                    label="Title"
                    value={translate(project.title)}
                />
                <div className={"md:col-span-2"}>
                    <LongTextField
                        label="Description"
                        value={translate(project.description)}
                    />
                </div>
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold md:col-span-2 dark:text-white">
                    <label className="text-lg font-semibold">Cover :</label>
                    <Gallery sources={[project.cover?.url]} />
                </div>
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold md:col-span-2 dark:text-white">
                    <label className="text-lg font-semibold">Images :</label>
                    <Gallery
                        sources={project?.images?.map((image) => image.url)}
                    />
                </div>
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold md:col-span-2 dark:text-white">
                    <label className="text-lg font-semibold">Videos :</label>
                    {project?.videos?.map((video, index) => (
                        <div
                            className={
                                "flex w-full items-center justify-between border-b py-1"
                            }
                        >
                            <p className={"text-sm font-normal"}>
                                Video {index}
                            </p>
                            <a href={video.url} download>
                                <Button color={"secondary"} sm>
                                    Download Video
                                </Button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </PageCard>
    );
};

export default Show;
