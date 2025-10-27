import Category from "@/Models/Category";
import Media from "@/Models/Media";
interface Product {
    id: number;
    name: string;
    is_active: boolean;
    category_id: number;
    image?: Media | undefined;
    pdf?: Media | undefined;
    category?: Category;
    is_featured?: boolean;
    video?: Media;
}

export default Product;
