const BankAccount = require('./BankAccount');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
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
  });

  it('should return an empty statement for a new account', () => {
    expect(bankAccount.getStatement()).toBe("date\tcredit\tdebit\tbalance\n");
  });

  it('should return a statement with a single deposit transaction', () => {
    bankAccount.deposit(1000, new Date(2023, 1, 27));
    expect(bankAccount.getStatement()).toBe("date\tcredit\tdebit\tbalance\n2/27/2023\t1000.00\t\t\t1000.00\n");
  });

  it('should return a statement with a single withdrawal transaction', () => {
    bankAccount.withdraw(500, new Date(2023, 1, 27));
    expect(bankAccount.getStatement()).toBe("date\tcredit\tdebit\tbalance\n2/27/2023\t\t\t500.00\t-500.00\n");
  });
});