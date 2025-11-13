import ImagePreview from "@/Components/Show/ImagePreview";

const Gallery = ({
    sources,
}: {
    sources: (string | undefined)[] | undefined;
}) => {
    return (
        <div
            className={`flex w-full flex-wrap items-center gap-5 dark:bg-dark dark:text-white`}
        >
            {sources?.map(
                (img: string | undefined, index) =>
                    img && (
                        <div key={index} className="h-40">
                            <ImagePreview src={img} />
                        </div>
                    ),
            )}
        </div>
    );
};

export default Gallery;
