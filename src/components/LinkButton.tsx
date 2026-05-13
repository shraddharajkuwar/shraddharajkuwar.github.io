import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface ButtonProps {
    text: string;
    link: string;
    external?: boolean;
    onClick?: () => void;
}

const LinkButton: React.FC<ButtonProps> = ({
    text,
    link,
    external = false,
    onClick,
}) => {
    return (
        <a
            href={link}
            className="primary-btn"
            target={external ? "_blank" : "_self"}
            rel="noreferrer"
            onClick={onClick}
        >
            <span>{text}</span>

            <ArrowRightAltIcon className="arrow-icon" />
        </a>
    );
};

export default LinkButton;