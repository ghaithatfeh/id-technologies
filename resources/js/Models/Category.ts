import Product from "@/Models/Product";
import Brand from "@/Models/Brand";
interface Category {
    id: number;
    name: string;
    brand_id: number;
    brand?: Brand;
    products?: Product[];
}

export default Category;
