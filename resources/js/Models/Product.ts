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
    support_link?: string;
    is_featured?: boolean;
}

export default Product;
