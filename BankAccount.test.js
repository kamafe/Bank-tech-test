const BankAccount = require('./BankAccount')

describe('BankAccount', () => {
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount;
    });

    it('should start with a balance that equals 0', () => {
        expect(bankAccount.balance).toEqual(0);
    });

    it('should correctly update the balance on a deposit', () => {
      bankAccount.deposit(1000, '10/01/2023');
      expect(bankAccount.balance).toEqual(1000);
    });
    
})