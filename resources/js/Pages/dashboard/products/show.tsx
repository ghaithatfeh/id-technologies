import Gallery from "@/Components/Show/Gallery";
import LongTextField from "@/Components/Show/LongTextField";
import SmallTextField from "@/Components/Show/SmallTextField";
import Button from "@/Components/ui/Button";
import PageCard from "@/Components/ui/PageCard";
import Product from "@/Models/Product";
import { translate } from "@/Models/Translatable";
import { Link } from "@inertiajs/react";

const Show = ({ product }: { product: Product }) => {
    return (
        <PageCard
            title="Product Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.products.edit",
                            product.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Name" value={translate(product.name)} />
                <SmallTextField
                    label="Is Avilable?"
                    value={product.is_active ? "Yes" : "No"}
                />
                <SmallTextField
                    label="Category"
                    value={translate(product?.category?.name)}
                />

                <div className="my-2 mb-5 flex items-center justify-between rounded-md bg-gray-50 p-4 text-xl font-bold dark:bg-dark dark:text-white">
                    <label className="text-lg font-semibold">Pdf :</label>
                    <a href={product?.pdf?.url} target={"_blank"} download>
                        <Button sm color={"secondary"} type={"button"}>
                            Download
                        </Button>
                    </a>
                </div>

                <div className="my-2 mb-5 flex items-center justify-between rounded-md bg-gray-50 p-4 text-xl font-bold dark:bg-dark dark:text-white">
                    <label className="text-lg font-semibold">Video :</label>
                    <a href={product?.video?.url} target={"_blank"} download>
                        <Button sm color={"secondary"} type={"button"}>
                            Download
                        </Button>
                    </a>
                </div>
                <SmallTextField label="Image ALT" value={product.image_alt} />

                <SmallTextField
                    label={"Image Description"}
                    value={product.image_description}
                />

                <div className={"md:col-span-2"}>
                    <LongTextField
                        label={"Description"}
                        value={product.description}
                    />
                </div>

                <div className="my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold md:col-span-2 dark:bg-dark dark:text-white">
                    <label className="text-lg font-semibold">Image :</label>
                    <Gallery sources={[product.image?.url]} />
                </div>
            </div>
        </PageCard>
    );
};

export default Show;
