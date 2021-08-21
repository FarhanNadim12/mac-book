//assigning price in Extra Memory Cost,Extra Storage Cost and Delivery Charge 
function assignPrice(buttonId, id, price) {
    document.getElementById(buttonId).addEventListener("click", function () {
        document.getElementById(id).innerText = price;
        totalPrice();
    })

}
assignPrice("eightGb", "memoryCost", "0");
assignPrice("sixteenGb", "memoryCost", "180");
assignPrice("ssd256Gb", "storageCost", "0");
assignPrice("ssd512Gb", "storageCost", "100");
assignPrice("ssd1Tb", "storageCost", "180");
assignPrice("agust25", "deliveryCost", "0");
assignPrice("agust21", "deliveryCost", "20");
//


//calculating total price
function totalPrice() {
    const basePrice = document.getElementById("base-price").innerText;
    const basePriceNumber = parseInt(basePrice);
    const memoryCost = document.getElementById("memoryCost").innerText;
    const memoryCostNumber = parseInt(memoryCost);
    const storageCost = document.getElementById("storageCost").innerText;
    const storageCostNumber = parseInt(storageCost);
    const deliveryCost = document.getElementById("deliveryCost").innerText;
    const deliveryCostNumber = parseInt(deliveryCost);
    const totalCost = basePriceNumber + memoryCostNumber + deliveryCostNumber + storageCostNumber;

    document.getElementById("totalCost").innerText = totalCost;
    document.getElementById("finalPrice").innerText = totalCost;
    return totalCost;
}
//

//verifying promo code and calculating discount 
function usePromo() {
    const promoCode = document.getElementById("promoCode").value;
    if (promoCode == "stevekaku") {
        const totalCost = totalPrice();
        const totalDiscount = totalCost / 100 * 20;
        const finalCost = totalCost - totalDiscount;
        document.getElementById("finalPrice").innerText = finalCost;
    }
    document.getElementById("promoCode").value = "";
}
//

