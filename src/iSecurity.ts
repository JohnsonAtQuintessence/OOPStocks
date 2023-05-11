/*
    Abstraction:
        We define an interface to abstract the common methods between Security and other future security types.
 */

export interface ISecurity {
    getSymbol(): string;
    getName(): string;
    getSector(): string;
}