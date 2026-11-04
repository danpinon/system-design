import { Button } from "../../components/Button/Button";
import { StarIcon } from "../../components/Icon/icons/StarIcon";
const VARIANTS = [
    "primary",
    "secondary",
    "tertiary",
    "link-color",
    "link-gray",
    "destructive",
] as const;
const SIZES = ["md", "lg", "xl", "2x"] as const;

function ButtonsExamples() {
    return (
        <>
            {VARIANTS.map((variant) => (
                <section>
                    <p>{variant}</p>
                    <div className="component-examples">
                        {SIZES.map((size) => (
                            <Button key={variant} variant={variant} size={size}>
                                <StarIcon />
                                Button CTA
                                <StarIcon />
                            </Button>
                        ))}
                        <Button
                            iconOnly
                            key={variant}
                            variant={variant}
                            size={"2x"}
                        >
                            <StarIcon />
                        </Button>
                    </div>
                </section>
            ))}
        </>
    );
}

export default ButtonsExamples;
