BANK TECH TEST

Requirements:

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria:
Given a client makes a deposit of 1000 on 10-01-2023 and a deposit of 2000 on 13-01-2023 and a withdrawal of 500 on 14-01-2023, when she prints her bank statement  she would see:

date	credit	debit	balance
14/01/2023		500.00	2500.00
13/01/2023	2000.00		3000.00
10/01/2023	1000.00		1000.00


DESIGN RECIPE

A single class model with starting balance of 0. This class has three methods: deposit, withdraw, and getStatement. The deposit and withdraw methods add transactions to the transactions array, using the current date as the default date. The getStatement method returns a bank statement, which includes all the transactions in the transactions array, sorted by date and with running balances for each transaction.


To run the program open a terminal, navigate to the directory where the BankAccount.js file is located, and type node BankAccount.js. The output should be the same as in the previous example:

date || credit || debit || balance
10/01/2023 || 1000.00 || || 1000.00
13/01/2023 || 2000.00 || || 3000.00
14/01/2023 || || 500.00 || 2500.00


