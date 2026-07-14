const TAX_RATE = 0.08; 

let discountAmount = 5.00; 

var welcomeMessage = "Processing your bill..."; 

const invoiceData = {
    customerName: "Alex",
    itemPrice: 120.00,
    itemCount: 2,
    storeLocation: "Downtown"
};

const { customerName, itemPrice, itemCount } = invoiceData;

function calculateBill(price, count, taxRate, discount) {
    const subtotal = price * count;
    const taxTotal = subtotal * taxRate;
    const finalTotal = subtotal + taxTotal - discount;
    
    return [subtotal, taxTotal, finalTotal];
}

const [subtotal, tax, total] = calculateBill(itemPrice, itemCount, TAX_RATE, discountAmount);
