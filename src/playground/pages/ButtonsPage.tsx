import { Button } from "../../components/Button/Button";
import { StarIcon } from "../../components/Icon";

const VARIANTS = [
    "primary",
    "secondary",
    "tertiary",
    "link-color",
    "link-gray",
    "destructive",
] as const;
const SIZES = ["md", "lg", "xl", "2x"] as const;
const SHOW_ICON = new Set(["primary", "secondary", "tertiary", "destructive"]);

function ButtonsPage() {
    return (
        <main className="buttons-container">
            <section className="buttons-example">
                {VARIANTS.map((variant) => (
                    <div>
                        {SIZES.map((size) => (
                            <Button key={variant} variant={variant} size={size}>
                                <StarIcon />
                                Button CTA
                                <StarIcon />
                            </Button>
                        ))}
                        {SHOW_ICON.has(variant) && (
                            <Button
                                iconOnly
                                key={variant}
                                variant={variant}
                                size={"2x"}
                            >
                                <StarIcon />
                            </Button>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
}

export default ButtonsPage;
