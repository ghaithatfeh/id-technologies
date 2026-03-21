import Category from "@/Models/Category";
import Media from "@/Models/Media";
interface Brand {
    id: number;
    brand_title: string;
    background_image: Media;
    icon: Media;
    logo: Media;
    background_image_alt?: string | undefined;
    background_image_description?: string | undefined;
    icon_alt?: string | undefined;
    icon_description?: string | undefined;
    logo_alt?: string | undefined;
    logo_description?: string | undefined;

    categories?: Category[];
}

export default Brand;
