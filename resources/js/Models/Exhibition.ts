import Media from "@/Models/Media";
interface Exhibition {
    id: number;
    name: string;
    slug: string;
    date: string;
    description: string;
    images?: Media[] | undefined;
}

export default Exhibition;
