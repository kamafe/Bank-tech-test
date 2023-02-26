class BankAccount {
    constructor() {
      this.transactions = [];
      this.balance = 0;
    }

    deposit(amount, date) {
        const transaction = { date, amount };
        this.transactions.push(transaction);
        this.balance += amount;
    }

    withdraw(amount, date) {
        const transaction = { date, amount: -amount };
        this.transactions.push(transaction);
        this.balance -= amount;
    }
};

module.exports = BankAccount;