const BankAccount = require('./BankAccount')

describe('BankAccount', () => {
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount;
    });

    it('should start with a balance that equals 0', () => {
        expect(bankAccount.balance).toEqual(0);
    });
})