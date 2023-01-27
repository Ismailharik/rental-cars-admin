export interface StockInfo{
    stockFeedbacks:{date:Date,totalPrice:number}[],
    totalUser:string,
    lastYearProfit:number,
    lastMonthProfit:number,
    newOrders:number
}