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
                    "h-full w-full bg-[url('/images/08-BG.svg')] bg-cover bg-no-repeat py-10 pt-30 md:py-28"
                }
            >
                <InfiniteScroll data={"projects"}>
                    <div
                        className={
                            "grid grid-cols-1 gap-10 px-16 md:grid-cols-2"
                        }
                    >
                        {projects.data.map((project) => (
                            <Link
                                href={route(
                                    "landing.projects.show",
                                    project.id,
                                )}
                            >
                                <div className="group h-full cursor-pointer overflow-hidden rounded-lg border-6 border-landing-primary bg-landing-primary shadow-md transition-shadow duration-300 hover:shadow-2xl">
                                    <div className="relative h-[80%] overflow-hidden sm:h-[90%]">
                                        <img
                                            className={
                                                "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            }
                                            src={project.cover?.url}
                                        />
                                    </div>
                                    <p
                                        className={
                                            "pt-4 pb-3 text-center font-semibold text-wrap"
                                        }
                                    >
                                        {translate(project.title)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
            <LandingFooter />
        </>
    );
};

export default Index;
