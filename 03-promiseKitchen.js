// Building a "Full Stack" system using TimeOuts to represent network/process delays
// The numbers at the end of the logs are desires order
// BACKEND - Kitchen
const kitchen = () => {
    console.log('Order received', 4); 
    // I Owe You
    const iou = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Food Prepared', 5);
            resolve();
        }, 3000)
    });
    return iou;
}

// FRONTEND - Table
const table = () => {
    console.log('Sitting at table', 2); 
    setTimeout(()=> {
        console.log('Ordering Food', 3);
        kitchen().then(()=> {
            console.log('Eating Food', 6);
        });
    }, 1000)
    console.log('Paying the check', 7); 
}

// ENTRY POINT 
const main = () => {
    console.log('Entering Restaurant', 1); 
    table();
    console.log('Leaving Restaurant', 8); 
}

main();