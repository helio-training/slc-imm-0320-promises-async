// Building a "Full Stack" system using TimeOuts to represent network/process delays
// The numbers at the end of the logs are desires order
// BACKEND - Kitchen
const kitchen = (order) => {
    console.log('Order received', 4);
    // I Owe You
    const iou = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (order === 'Week Old Sardines' ||
                order === 'Gruel' ||
                order === 'Bat Soup') {
                    reject("That's gross! and/or Too Soon....")
                } else {
                    // console.log('Food Prepared', 5);
                    resolve(`${order} Prepared`);
                }
        }, 3000);
    });
    return iou;
}

// FRONTEND - Table
const table = () => {
    console.log('Sitting at table', 2); 
    const iou = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ordering Food', 3);
            let order = 'Gruel';
            // let order = 'Vegan Bacon Chicken Ranch Pizza';
            // Daisy Chaining '.then()' is acceptable 
            kitchen(order).then((response) => {
                console.log(response, 5);
            }).then(() => {
                console.log('Eating Food', 6);
            }).then(()=>{
                console.log('Paying the check', 7); 
            }).then(() => {
                resolve('Leaving Restaurant ' + 8);
            }).catch((error) => {
                console.log(error, 0);
                reject('Storming out of the Restaurant');
            });
        }, 1000);
    });
    return iou;  
}

// ENTRY POINT 
const main = async () => {
    console.log('Entering Restaurant', 1); 
    const result = await table().catch((error) => {
        console.log(error, -1);
        // return 'Dine & Dash';
    });
    if(result){
        console.log('Finally', result);
    }
}

main();