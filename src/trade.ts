import {ISecurity} from "./iSecurity";

export enum TradeType {
    Buy = "BUY",
    Sell = "SELL",
}

export abstract class Trade {
    protected constructor(
        private quantity: number,
        private price: number,
        private tradeType: TradeType
    ) {}

    getQuantity(): number {
        return this.quantity;
    }

    getPrice(): number {
        return this.price;
    }

    getTradeType(): TradeType {
        return this.tradeType;
    }

    // Polymorphism: We use the abstract getTotal() method to calculate the total price of a trade.
    // The BuyTrade and SellTrade classes implement this method differently.
    // By using abstract methods and providing specific implementations in each subclass, we can enable polymorphism and calculate the total value of each trade in a flexible and extensible way.
    abstract getTotal(): number;
}


/*
    Inheritance:
        The BuyTrade class inherits properties from the Trade class.
 */
export class BuyTrade extends Trade {

    constructor(
        private security: ISecurity,
        quantity: number,
        price: number
    ) {
        super(quantity, price, TradeType.Buy);
    }

    getTotal(): number {
        return super.getQuantity() * super.getPrice();
    }
}


/*
      Inheritance:
        The SellTrade class inherits properties from the Trade class.
 */
export class SellTrade extends Trade {
    constructor(
        private security: ISecurity,
        quantity: number,
        price: number
    ) {
        super(quantity, price, TradeType.Sell);
    }

    getTotal(): number {
        return super.getQuantity() * super.getPrice() * -1;
    }
}