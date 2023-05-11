import {TradingPlatform} from "./tradingPlatform";
import {Stock} from "./stock";
import {BuyTrade, SellTrade} from "./trade";


const tradingPlatform: TradingPlatform = new TradingPlatform();

const apple:Stock = new Stock("AAPL", "Apple Inc.", "Technology");
const microsoft:Stock = new Stock("MSFT", "Microsoft Corporation", "Technology");

tradingPlatform.addSecurity(apple);
tradingPlatform.addSecurity(microsoft);

const trade1:BuyTrade = new BuyTrade(apple, 22, 110);
const trade2:SellTrade = new SellTrade(microsoft, 7, 189);

tradingPlatform.addTrade(trade1);
tradingPlatform.addTrade(trade2);

console.log("Securities:");
console.log(tradingPlatform.getSecuritySymbols());

console.log("Trades:");
console.log(tradingPlatform.getTrades());

console.log("Total value of trades:");
console.log(tradingPlatform.getTotalValue());

console.log("Sector of AAPL stock:");
console.log(tradingPlatform.getSecuritySector("AAPL"));