import LandingFooter from "@/Components/landing/landing-footer";
import LandingNavbar from "@/Components/landing/landing-navbar";
import Project from "@/Models/Project";
import { translate } from "@/Models/Translatable";
import { InfiniteScroll, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Index = ({ projects }: { projects: { data: Project[] } }) => {
    const { t } = useTranslation();
    return (
        <>
            <div
                className={
                    "relative w-full bg-[url('/images/our-projects.jpg')] bg-cover bg-center bg-no-repeat"
                }
            >
                <LandingNavbar />
                <div
                    className={
                        "flex h-full w-full flex-col items-center gap-2 pt-16 pb-42"
                    }
                >
                    <h1
                        className={
                            "px-5 text-center text-3xl leading-20 text-landing-primary md:text-4xl"
                        }
                    >
                        {t("our_projects")}
                    </h1>
                </div>
            </div>
            <div
                className={
                    "h-full w-full bg-[url('/images/08-BG.svg')] bg-repeat"
                }
            >
                <div
                    className={
                        "h-full w-full bg-transparent py-10 pt-30 md:py-48"
                    }
                >
                    <InfiniteScroll data={"projects"}>
                        <div
                            className={
                                "grid cursor-pointer grid-cols-1 gap-10 px-16 md:grid-cols-2"
                            }
                        >
                            {projects.data.map((project) => (
                                <Link
                                    href={route(
                                        "landing.projects.show",
                                        project.id,
                                    )}
                                    className={
                                        "flex h-full max-h-80 flex-col items-center border-2 border-landing-primary"
                                    }
                                >
                                    <img
                                        className={"h-[80%] w-full"}
                                        src={project.cover?.url}
                                    />
                                    <p
                                        className={
                                            "flex h-1/3 w-full items-center justify-center overflow-hidden bg-landing-primary p-1 text-center font-semibold text-wrap md:h-[20%]"
                                        }
                                    >
                                        {translate(project.title)}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
            <LandingFooter />
        </>
    );
};

export default Index;
