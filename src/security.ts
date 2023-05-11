/*
    Encapsulation:
        The Security class encapsulates the data and implements the ISecurity interface.
 */

import {ISecurity} from "./iSecurity";

export class Security implements ISecurity {
    constructor(
        private symbol: string,
        private name: string,
        private sector: string
    ) {}

    getSymbol(): string {
        return this.symbol;
    }

    getName(): string {
        return this.name;
    }

    getSector(): string {
        return this.sector;
    }
}