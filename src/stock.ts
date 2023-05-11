/*
    Inheritance:
        The Stock class inherits properties from the Security class.
 */

import {Security} from "./security";
export class Stock extends Security {
    constructor(symbol: string, name: string, sector: string) {
        super(symbol, name, sector);
    }
}