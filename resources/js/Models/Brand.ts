import Category from "@/Models/Category";
import Media from "@/Models/Media";
interface Brand {
    id: number;
    brand_title: string;
    background_image: Media;
    icon: Media;
    logo: Media;

    categories?: Category[];
}

export default Brand;
