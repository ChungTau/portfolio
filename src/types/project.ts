import { ReactElement, ReactNode } from "react";

export interface ProjectType{
    title: string;
    imgSrc?: string | "../../assets/example-project.jpg";
    code:string;
    tech: Array<string>;
    description:string;
    modalContent: JSX.Element;
}