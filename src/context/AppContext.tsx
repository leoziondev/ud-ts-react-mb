import { createContext } from "react";

export interface IAppContext {
    language: string
    framework: string
    projects: number
} 

export const AppContext = createContext<IAppContext | null>(null)