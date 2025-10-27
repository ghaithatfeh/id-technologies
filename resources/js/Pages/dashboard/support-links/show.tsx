import Button from "@/Components/ui/Button";
import PageCard from "@/Components/ui/PageCard";
import SupportLink from "@/Models/SupportLink";
import { Link } from "@inertiajs/react";
import SmallTextField from "@/Components/Show/SmallTextField";
import { translate } from "@/Models/Translatable";

const Show = ({ supportLink }: { supportLink: SupportLink }) => {
    return (
        <PageCard
            title="Support Link Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.support.links.edit",
                            supportLink.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField
                    label="Product Name"
                    value={translate(supportLink.product_name)}
                />
                <SmallTextField
                    label="Type"
                    value={translate(supportLink.type)}
                />
                <SmallTextField label="Link" value={supportLink.link} />
            </div>
        </PageCard>
    );
};

export default Show;
