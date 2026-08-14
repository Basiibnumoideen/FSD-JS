function calculateDeliveryCharge(distance){
    return distance > 5 ? 50 : 20;
}
// fn expression + defualt parameter (discount = 0)
const applyDiscount = (amount,discount=0) => amount - amount * discount;

function placeYourOrder(order,discountType,callbackFn){
    // destructuring 
    const {
        customerName,
        items,
        distance,
    } = order ;

    const totalPrice = items.reduce((sum,{price,quantity=1})=>sum+price*quantity , 0);
    const discountedPrice = discountType(totalPrice);
    const finalAmount = discountedPrice + calculateDeliveryCharge(distance);

    callbackFn(customerName, finalAmount);
}

// sample order 

const order ={
    customerName:"Basi",
    distance:8,
    items:[
        {name:"pizza",price:300, quantity:2 },
        {name:"burger",price:150},
    ],

};

const festivalDiscount = total => applyDiscount(total,0.10);

const footballFinalDiscount = total => applyDiscount(total,0.50);


placeYourOrder(order,festivalDiscount,(name,finalAmount)=>{
    console.log(`order confirmed for ${name}.pay Rs.${finalAmount}`);
});

