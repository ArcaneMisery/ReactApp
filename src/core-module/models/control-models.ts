import { RegisterOptions } from "react-hook-form";

export type rules = Omit<RegisterOptions<any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;

export interface ITypes {
    key: string; 
    value: string;
}