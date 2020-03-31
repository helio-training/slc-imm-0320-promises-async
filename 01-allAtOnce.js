// JavaScript happens as quickly as possible
console.log('Hello World'); // 1
setTimeout(() => {
    console.log('What a Wonderful World'); // 2
}, 4000)
console.log('Goodbye World'); // 3