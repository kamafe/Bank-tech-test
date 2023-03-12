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

    getStatement() {
        let balance = 0;
        let statement = "date\tcredit\tdebit\tbalance\n";
        for (let i = this.transactions.length - 1; i >= 0; i--) {
          const transaction = this.transactions[i];
          if (transaction.amount > 0) {
            balance += transaction.amount;
            statement += `${transaction.date.toLocaleDateString()}\t${transaction.amount.toFixed(2)}\t\t\t${balance.toFixed(2)}\n`;
          } else {
            balance += transaction.amount;
            statement += `${transaction.date.toLocaleDateString()}\t\t\t${Math.abs(transaction.amount).toFixed(2)}\t${balance.toFixed(2)}\n`;
          }
        }
        return statement;
    }
};

module.exports = BankAccount;