import { createContext } from "react";
import { Planet } from "src/shared/types";

interface PropsContext {
    planet: string,
}

export const Context = createContext<PropsContext>({
    planet: ''
});

