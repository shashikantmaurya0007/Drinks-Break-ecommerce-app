const calculatePriceDetails = (products, setPriceDetails) => {
    const priceDetails = products.reduce(
        (acc, curr) => {
            return {
                ...acc,
                totalCostPrice: acc.totalCostPrice + curr.price * curr.qty,
                totalQty: acc.totalQty + curr.qty,
                totalDiscount: acc.totalDiscount + (curr.price - curr.finalPrice) * curr.qty,
                totalAmountToPay: acc.totalAmountToPay + curr.finalPrice * curr.qty,
            };
        }, {
            totalCostPrice: 0,
            totalQty: 0,
            totalDiscount: 0,
            totalAmountToPay: 0,
        }
    );

    setPriceDetails(priceDetails);
};

export { calculatePriceDetails };