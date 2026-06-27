import LongTextField from "@/Components/Show/LongTextField";
import SmallTextField from "@/Components/Show/SmallTextField";
import Button from "@/Components/ui/Button";
import PageCard from "@/Components/ui/PageCard";
import Seo from "@/Models/Seo";
import { translate } from "@/Models/Translatable";
import { Link } from "@inertiajs/react";

const Show = ({ seo }: { seo: Seo }) => {
    return (
        <PageCard
            title="SEO Record Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link href={route("v1.web.protected.seo.edit", seo.id)}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Page" value={seo.page} />
                <SmallTextField
                    label="Meta Title"
                    value={translate(seo.meta_title)}
                />
                <div className={"md:col-span-2"}>
                    <LongTextField
                        label="Meta Description"
                        value={translate(seo.meta_description)}
                    />
                </div>
            </div>
        </PageCard>
    );
};

export default Show;
