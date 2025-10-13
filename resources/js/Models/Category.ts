import Brand from "@/Models/Brand";
interface Category {
    id: number;
    name: string;
    brand_id: number;
    brand?: Brand;
}

export default Category;
