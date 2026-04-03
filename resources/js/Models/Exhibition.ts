import Media from "@/Models/Media";
interface Exhibition {
    id: number;
    name: string;
    date: string;
    description: string;
    images?: Media[] | undefined;
}

export default Exhibition;
