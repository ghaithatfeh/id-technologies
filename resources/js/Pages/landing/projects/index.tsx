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
                            "px-5 text-center text-4xl leading-12 md:leading-20 text-landing-primary md:text-5xl text-bold"
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
                            "grid grid-cols-1 gap-10 px-16 md:grid-cols-4"
                        }
                    >
                        {projects.data.map((project) => (
                            <Link
                                href={route(
                                    "landing.projects.show",
                                    project.id,
                                )}
                            >
                                <div className="group cursor-pointer overflow-hidden rounded-lg border-6 border-landing-primary bg-landing-primary shadow-md transition-all duration-300 hover:shadow-xl hover:scale-101">
                                    <img
                                        className={
                                            "h-[17rem] w-full object-cover"
                                        }
                                        src={project.cover?.url}
                                    />
                                    <p
                                        className={
                                            "text-lg text-center font-semibold text-wrap py-3"
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
