function counter() {
    var count = 0;

    return function increment() {
        count++;
        return count;
    }

  
}
let uniqueNumeric = counter(); // Get the increment function

function generateTransactionId() {
    

    return Symbol(`TRANSACTION_ID_${uniqueNumeric()}`); // Generate a symbol using the incremented count
}



const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);
