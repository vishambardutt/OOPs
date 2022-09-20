function BankAccount (customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber =  Date.now;
    this.balance =  balance;

}

const yutikaAccount = new BankAccount ('Yutika', 2000);
console.log(yutikaAccount);
