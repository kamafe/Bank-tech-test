const BankAccount = require('./BankAccount')

describe('BankAccount', () => {
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount;
    });

    it('should start with an empty bank account', () => {
        expect(bankAccount.balance).toEqual(0);
    });

    it('should update the bank account balance after a deposit', () => {
      bankAccount.deposit(1000, '10/01/2023');
      expect(bankAccount.balance).toEqual(1000);
    });

    it('should update the bank account balance after a withdrawal', () => {
        bankAccount.deposit(1000, '10/01/2023');
        bankAccount.withdraw(500, '14/01/2023');
        expect(bankAccount.balance).toEqual(500);
    })

    it('should generate a statement with deposits, withdrawals, and balances', () => {
        bankAccount.deposit(1000, '10/01/2023');
        bankAccount.deposit(2000, '13/01/2023');
        bankAccount.withdraw(500, '14/01/2023');
        const statement = bankAccount.getStatement();
        expect(statement).toBe('date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00\n');
    })


})