import Button from "@/Components/ui/Button";
import PageCard from "@/Components/ui/PageCard";
import Brand from "@/Models/Brand";
import { Link } from "@inertiajs/react";
import Gallery from "@/Components/Show/Gallery";
import SmallTextField from "@/Components/Show/SmallTextField";
import { translate } from "@/Models/Translatable";

const Show = ({ brand }: { brand: Brand }) => {
    return (
        <PageCard
            title="Brand Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route("v1.web.protected.brands.edit", brand.id)}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5">
                <SmallTextField
                    label="Brand Title"
                    value={translate(brand.brand_title)}
                />
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold dark:text-white">
                    <label className="text-lg font-semibold">
                        Background Image :
                    </label>
                    <Gallery sources={[brand.background_image?.url]} />
                </div>
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold dark:text-white">
                    <label className="text-lg font-semibold">Icon :</label>
                    <Gallery sources={[brand.icon?.url]} />
                </div>
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold dark:text-white">
                    <label className="text-lg font-semibold">Logo :</label>
                    <Gallery sources={[brand.logo?.url]} />
                </div>
            </div>
        </PageCard>
    );
};

export default Show;
