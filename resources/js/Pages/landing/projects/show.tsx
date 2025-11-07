import LandingFooter from "@/Components/landing/landing-footer";
import LandingNavbar from "@/Components/landing/landing-navbar";
import Project from "@/Models/Project";
import { translate } from "@/Models/Translatable";

const Show = ({ project }: { project: Project }) => {
    return (
        <div className={"h-full w-full"}>
            <div className={"max-h-[13vh] bg-landing-secondary"}>
                <LandingNavbar />
            </div>
            <div
                className={
                    "h-full w-full bg-[url('/images/08-BG.svg')] bg-repeat"
                }
            >
                <div
                    className={
                        "h-full w-full bg-transparent px-10 py-10 md:px-24"
                    }
                >
                    <div
                        className={
                            "relative rounded-md border-2 px-5 py-8 md:px-10 md:py-16"
                        }
                    >
                        <h1
                            className={
                                "absolute -top-8 right-1/2 translate-x-1/2 rounded-3xl bg-landing-primary px-5 py-2 text-center text-sm font-semibold md:px-10 md:py-5 md:text-xl"
                            }
                        >
                            {translate(project.title)}
                        </h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: translate(project.description),
                            }}
                            className={"md:text-base text-xs font-semibold"}
                        ></div>
                    </div>

                    <div
                        className={
                            "grid grid-cols-1 gap-5 py-5 md:grid-cols-2 md:gap-10 md:py-10"
                        }
                    >
                        {project.images?.map((image, index) => (
                            <div className={"h-full"}>
                                <img
                                    className={"h-56 w-full md:h-72"}
                                    src={image.url}
                                />
                            </div>
                        ))}
                    </div>
                    <div
                        className={
                            "grid grid-cols-1 gap-5 py-5 md:grid-cols-2 md:gap-10 md:py-10"
                        }
                    >
                        {project.videos?.map((video, index) => (
                            <div className={"h-full"}>
                                <video
                                    className={"h-56 w-full md:h-72"}
                                    src={video.url}
                                    controls
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <LandingFooter />
        </div>
    );
};

export default Show;
