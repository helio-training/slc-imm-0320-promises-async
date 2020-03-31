// Building a "Full Stack" system using TimeOuts to represent network/process delays
// The numbers at the end of the logs are desires order
// BACKEND - Kitchen
const kitchen = () => {
    console.log('Order received', 4); 
    setTimeout(()=> {
        console.log('Food Prepared', 5); 
    }, 3000)
}

// FRONTEND - Table
const table = () => {
    console.log('Sitting at table', 2); 
    setTimeout(()=> {
        console.log('Ordering Food', 3);
        kitchen();
    }, 1000)
    console.log('Paying the check', 6); 
}

// ENTRY POINT 
const main = () => {
    console.log('Entering Restaurant', 1); 
    table();
    console.log('Leaving Restaurant', 7); 
}

main();