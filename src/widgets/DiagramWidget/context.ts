import {createContext} from "react";
import {TDiagramContext} from "./models";

export const DiagramContext = createContext<TDiagramContext | null>(null)