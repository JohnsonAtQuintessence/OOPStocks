/*
    Abstraction:
        We use the ISecurity interface to abstract the TradingPlatform class from any specific security type.
 */
import {Trade} from "./trade";
import {ISecurity} from "./iSecurity";

export class TradingPlatform {
    private securities: ISecurity[] = [];
    private trades: Trade[] = [];

    addSecurity(security: ISecurity) {
        this.securities.push(security);
    }

    addTrade(trade: Trade) {
        this.trades.push(trade);
    }

    getSecurities(): ISecurity[] {
        return this.securities;
    }

    getTrades(): Trade[] {
        return this.trades;
    }

    // Polymorphism: We use the getTotal() method to calculate the total value of all trades.
    getTotalValue(): number {
        let total = 0;

        for (const trade of this.trades) {
            total += trade.getTotal();
        }

        return total;
    }

    // Abstraction: We only expose the relevant data through public methods.
    getSecuritySymbols(): string[] {
        return this.securities.map((security) => security.getSymbol());
    }

    getSecuritySector(symbol: string): string | undefined {
        const security = this.securities.find(
            (security) => security.getSymbol() === symbol
        );
        return security ? security.getSector() : undefined;
    }
}