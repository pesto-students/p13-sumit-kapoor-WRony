class BankAccount{
    #accountNumber =0;
    #balance =0;
    #accountHolderName=0;

    getValue(){
        return this.#balance;
    }
    setValue(value){
        this.#balance = value;
    }
}

class CheckingAccount extends BankAccount{
     constructor(){
        super();
     }

     deposit(amount){
        let currentBalance= 0;
        currentBalance = super.getValue() + amount;
        super.setValue(currentBalance);
     }
     withdraw(amount){
        let currentBalance= 0;
        currentBalance = super.getValue()  - amount;
        super.setValue(currentBalance);
     }

     getBalance(){
        let currentBalance= 0;
        currentBalance = super.getValue();
        console.log(" Current balance in savings account " +currentBalance);
     }
}

class SavingsAccount extends BankAccount{
    constructor(){
        super();
     }

     deposit(amount){
        let currentBalance= 0;
        currentBalance = super.getValue() + amount;
        super.setValue(currentBalance);
     }
     withdraw(amount){
        let currentBalance= 0;
        currentBalance = super.getValue()  - amount;
        if(currentBalance>=0){
            super.setValue(currentBalance);
        }
        
     }

     getBalance(){
        let currentBalance= 0;
        currentBalance = super.getValue();
        console.log(" Current balance in Checking account " +currentBalance);
     }
}

const checkingAccount = new CheckingAccount();
checkingAccount.deposit(200);
checkingAccount.withdraw(50);
checkingAccount.getBalance();

const savingsAccount = new SavingsAccount();
savingsAccount.deposit(200);
savingsAccount.withdraw(150);
savingsAccount.getBalance();

