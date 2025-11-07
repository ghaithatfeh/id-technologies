import Media from "@/Models/Media";
interface Project {
    id: number;
    title: string;
    description: string;
    cover?: Media | undefined;
    images?: Media[] | undefined;
    videos?: Media[] | undefined;
}

export default Project;
