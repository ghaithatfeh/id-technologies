import Brand from "@/Models/Brand";
import Product from "@/Models/Product";

interface Category {
    id: number;
    name: string;
    brand_id: number;
    brand?: Brand;
    products?: Product[];
    parent_id?: number;
    parent?: Category;
    children?: Category[];
    sort_index?: number;
    meta_title?: string;
    meta_description?: string;
}

export default Category;
