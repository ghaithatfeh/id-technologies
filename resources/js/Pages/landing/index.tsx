import { asset } from "@/helper";
import { Link } from "@inertiajs/react";
import { FacebookIcon, Globe2, Mail, PhoneIcon, Settings } from "lucide-react";

const Index = () => {
    return (
        <>
            <div
                className={"w-full md:h-screen relative"}
                style={{
                    backgroundImage: `url("${asset("images/01-BG.jpg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className={
                        "flex items-center justify-between max-h-[13%] ps-28 pe-10 py-16"
                    }
                >
                    <nav
                        className={
                            "flex items-center gap-14 w-3/4 text-landing-primary text-lg font-bold"
                        }
                    >
                        <Link href={""} className={"text-landing-primary"}>
                            Home
                        </Link>

                        <Link href={""}>Customer</Link>

                        <Link href={""}>About Us</Link>

                        <Link href={""}>Our Projects</Link>

                        <Link href={""}>AR</Link>
                    </nav>

                    <img
                        src={asset("/images/02-Logo.svg")}
                        className={"w-28 h-full"}
                        alt={"id-technologies logo"}
                    />
                </div>
                <div className={"w-[55%] pt-10 pb-5 px-24 "}>
                    <h2
                        className={
                            "ms-18 text-2xl font-bold text-landing-primary mb-3"
                        }
                    >
                        Partners in Development
                    </h2>
                    <div className={"flex items-center gap-5"}>
                        <div
                            className={
                                "flex flex-col gap-3 py-6 px-3 rounded-2xl bg-white"
                            }
                        >
                            <PhoneIcon className={"w-8 h-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Mail className={"w-8 h-8"} strokeWidth={1} />
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-black to-transparent" />
                            <Settings className={"w-8 h-8"} strokeWidth={1} />
                        </div>

                        <div className={"flex flex-col gap-2"}>
                            <div className={"flex items-center gap-2"}>
                                <span
                                    className={
                                        "border border-landing-primary w-10 h-4 rounded-md"
                                    }
                                />
                                <p className={"text-white text-xl"}>
                                    Sabbagh Brothers - Auto Identification
                                    Technology established in 2004. The company
                                    specializes in providing comprehensive
                                    technology solutions.
                                </p>
                            </div>
                            <div className={"flex items-center gap-2"}>
                                <span
                                    className={
                                        "border border-landing-primary w-10 h-4 rounded-md"
                                    }
                                />
                                <p className={"text-white text-xl"}>
                                    Believing that technology is the key to
                                    success, we dedicate our expertise to
                                    deliver the best services to our clients in
                                    the field of smart technologies.
                                </p>
                            </div>
                            <div className={"flex items-center gap-2"}>
                                <span
                                    className={
                                        "border border-landing-primary w-10 h-4 rounded-md"
                                    }
                                />
                                <p className={"text-white text-xl"}>
                                    Today, we are proud to have a wide network
                                    of clients and distributors, which
                                    strengthens our position as a trusted
                                    partner in the journey of development and
                                    growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        "absolute -bottom-16 flex items-center justify-between px-44 gap-12 w-full"
                    }
                >
                    <div
                        className={
                            "bg-white rounded-t-2xl shadow-lg p-5 border-b-8 border-b-landing-primary !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-xl flex items-center justify-center text-center"
                            }
                        >
                            Security and Protection Systems “HIKVISION Co”
                        </p>
                    </div>
                    <div
                        className={
                            "bg-landing-primary/80 rounded-t-2xl shadow-lg p-5 !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-xl flex items-center justify-center text-center"
                            }
                        >
                            Plastic Card Printers and its accessories “evolis
                            co”
                        </p>
                    </div>
                    <div
                        className={
                            "bg-white rounded-t-2xl shadow-lg p-5 border-b-8 border-b-landing-primary !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-lg flex items-center justify-center text-center"
                            }
                        >
                            Technologies/Prepaid Entertainment Systems
                            “intercards co”
                        </p>
                    </div>
                    <div
                        className={
                            "bg-white rounded-t-2xl shadow-lg p-5 border-b-8 border-b-landing-primary !w-[25%] h-36"
                        }
                    >
                        <p
                            className={
                                "text-xl flex items-center justify-center text-center"
                            }
                        >
                            Barcode Systems “Unitech co”
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={
                    "w-full flex flex-col gap-10 items-start justify-between p-24"
                }
                style={{
                    backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className={"flex flex-col items-start w-full"}>
                    <h2
                        className={
                            "px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                        }
                    >
                        About Us:
                    </h2>
                    <div className="w-80 h-[2px] bg-gradient-to-r from-black to-transparent rounded-full" />
                    <p className={"pe-24 mt-5 text-lg"}>
                        We are company specialized in providing comprehensive
                        technology solutions, aimed at simplifying and enhancing
                        the operations across various sectors. We believe that
                        technology is the key of security, our goal to be your
                        trusted partner on the digital transformation journey,
                        in order to offer advanced systems and solutions satisfy
                        your needs.
                    </p>
                </div>

                <div className={"flex flex-col items-start w-full"}>
                    <h2
                        className={
                            "px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                        }
                    >
                        Our Mission:
                    </h2>
                    <div className="w-80 h-[2px] bg-gradient-to-r from-black to-transparent rounded-full" />
                    <p className={"pe-24 mt-5 text-lg"}>
                        Providing comprehensive technology solutions that help
                        companies simplify their operations, increase efficiency
                        and enhance security. We work to understand the
                        challenges you face in order to offer the most effective
                        solutions, from advanced systems to ongoing technical
                        support.
                    </p>
                </div>

                <div className={"flex flex-col items-start w-full"}>
                    <h2
                        className={
                            "px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                        }
                    >
                        Our Vision:
                    </h2>
                    <div className="w-80 h-[2px] bg-gradient-to-r from-black to-transparent rounded-full" />
                    <p className={"pe-24 mt-5 text-lg"}>
                        To be the leading and trusted technology partner for
                        companies seeking digital transformation and the
                        implementation of the latest smart technologies, by
                        delivering optimal products and innovative solutions
                        that exceed their expectations.
                    </p>
                </div>
            </div>

            <div className={"flex flex-col items-start w-full"}>
                <h2
                    className={
                        "mx-24 px-10 py-5 bg-landing-primary font-bold text-xl rounded-tr-2xl"
                    }
                >
                    Our Services:
                </h2>
                <div
                    className={"bg-landing-secondary px-24 py-10 w-full"}
                    style={{
                        backgroundImage: `url("${asset("images/08-BG.svg")}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={"flex flex-col items-start w-full"}>
                        <h2
                            className={
                                "font-bold text-2xl text-landing-primary"
                            }
                        >
                            We offer a wide range of integrated technology
                            solutions that meet the needs of various sectors:
                        </h2>
                        <div
                            className={
                                "flex flex-col items-start text-white mt-10 text-xl gap-2"
                            }
                        >
                            <p>
                                <strong>Security Systems</strong>: Advanced
                                solutions for access control, surveillance
                                systems, and entry cards to ensure the highest
                                levels of security.
                            </p>
                            <p>
                                <strong>Plastic Card Printers</strong>
                                :We provide the latest professional plastic card
                                printers, along with maintenance services and
                                supply of consumables.
                            </p>
                            <p>
                                <strong>Barcode Systems</strong>: Automated
                                solutions for inventory management, point of
                                sale, and business operations to increase
                                efficiency and speed.
                            </p>
                            <p>
                                <strong>Gaming and Prepaid Systems</strong>:
                                Comprehensive solutions for managing games and
                                services based on prepaid card systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full"}>
                <div
                    className={
                        "grid grid-cols-4 items-center px-52 justify-between w-full max-w-full gap-10 py-10"
                    }
                >
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/09-Brand.png")}
                    />
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/10-Brand.png")}
                    />
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/11-Brand.png")}
                    />
                    <img
                        alt={"brand-logo"}
                        src={asset("/images/12-Brand.png")}
                    />
                </div>

                <div className={" flex items-center justify-center py-5"}>
                    <div className={"w-[75vw] h-0.5 bg-black"}></div>
                </div>

                <h2
                    className={
                        "text-2xl text-landing-primary text-wrap font-bold text-center px-72 py-5"
                    }
                >
                    Let us help you turn your ideas into reality and achieve
                    sustainable profits and success in the world of technology.
                </h2>

                <div
                    className={
                        "py-5 w-full px-72 grid grid-cols-3 items-center text-xl gap-24"
                    }
                >
                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales1@idtechco.com"}>
                                sales1@idtechco.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales2@idtechco.com"}>
                                sales2@idtechco.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <Mail className={"text-landing-primary me-2"} />
                            <a href={"mailto:sales3@idtechco.com"}>
                                sales3@idtechco.com
                            </a>
                        </div>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a href={"tel:+963933303939"}>+963 933 303 939</a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a href={"tel:+963935288888"}>+963 935 288 888</a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a href={"tel:+963932865566"}>+963 932 865 566</a>
                        </div>
                    </div>

                    <div className={"flex flex-col items-start"}>
                        <div className={"flex items-center"}>
                            <Globe2 className={"text-landing-primary me-2"} />
                            <a
                                target={"_blank"}
                                href={"https://www.idtechcho.com"}
                            >
                                www.idtechcho.com
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <FacebookIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a
                                target={"_blank"}
                                href={"https://www.facebook.com/IDTechco/"}
                            >
                                ID Technologies Co
                            </a>
                        </div>

                        <div className={"flex items-center"}>
                            <PhoneIcon
                                className={"text-landing-primary me-2"}
                            />
                            <a target={"_blank"} href={"https://www.facebook.com/IDTechco/"}>
                                ID Technologies Co
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
