import Button from "@/Components/ui/Button";
import PageCard from "@/Components/ui/PageCard";
import Category from "@/Models/Category";
import { Link } from "@inertiajs/react";
import SmallTextField from "@/Components/Show/SmallTextField";
import { translate } from "@/Models/Translatable";

const Show = ({ category }: { category: Category }) => {
    return (
        <PageCard
            title="Category Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.categories.edit",
                            category.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Name" value={translate(category.name)} />
                <SmallTextField
                    label="Brand"
                    value={translate(category?.brand?.brand_title)}
                />
            </div>
        </PageCard>
    );
};

export default Show;
