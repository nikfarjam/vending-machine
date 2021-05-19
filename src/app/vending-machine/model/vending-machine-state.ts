export const DEFAULT_SUPPLY = 10;
export const DEFAULT_COST = 1.2;

export interface VMState {
    supply: number;
    returnCash: number;
    returnCans: number;
    errorMessage: string;
    infoMessage: string;
}