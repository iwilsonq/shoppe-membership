var Registration = require('../lib/registration');

describe('Registration', () => {
  // happy path
  describe('a valid application', () => {
    var regResult = {};
    before(() => {
      regResult = Registration.applyForMembership({
        email: 'iwilsonq@gmail.com',
        password: '123',
        confirm: '123'
      });
    });

    it('is a success', () => {
      regResult.success.should.equal(true);
    });
    it('creates a user', () => {
      regResult.user.should.be.defined;
    });
    it('creates a log entry');
    it('sets the user\'s status to approved');
    it('offers a welcome message');
  });
  describe('an empty or null email', () => {
    it('is not successful');
    it('tells user that email is required');
  });
  describe('empty or null password', () => {
    it('is not successful');
    it('tells user that password is required');
  });
  describe('password and confirm mismatch', () => {
    it('is not successful');
    it('tells user that passwords don\'t match');
  });
  describe('email already exists', () => {
    it('is not successful');
    it('tells user that email already exists');
  });
})
