import { initContract } from "@ts-rest/core";
import { ProspectContract } from "./prospects-contract";

const c = initContract();

export const RootContract = c.router({
        prospect: ProspectContract
    }
    );
