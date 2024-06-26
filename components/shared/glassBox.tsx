"use client"

import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GlassBox = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default GlassBox;
