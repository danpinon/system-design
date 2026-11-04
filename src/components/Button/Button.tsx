import type { ReactNode } from "react";
import { clsx } from "clsx";
import "./buttons.css";

export type ButtonProps = {
    children: ReactNode;
    size?: "md" | "lg" | "xl" | "2x";
    variant?:
        | "primary"
        | "secondary"
        | "tertiary"
        | "link-color"
        | "link-gray"
        | "destructive";
    isDisabled?: boolean;
    iconOnly?: boolean;
};

export function Button({
    children,
    size = "md",
    variant = "primary",
    isDisabled = false,
    iconOnly = false,
}: ButtonProps) {
    const classes = clsx([
        `ds-button`,
        `ds-button--${variant}`,
        `ds-button--${size}`,
        iconOnly && "ds-button--icon-only",
    ]);

    return (
        <button className={classes} disabled={isDisabled}>
            <span>{children}</span>
        </button>
    );
}
