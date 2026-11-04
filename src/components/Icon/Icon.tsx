import type { SVGProps } from "react";
import "./icon.css";

export type IconProps = SVGProps<SVGSVGElement>;
export function Icon(props: IconProps) {
    return (
        <svg
            className="ds-icon"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        />
    );
}
