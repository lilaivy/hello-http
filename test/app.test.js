const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../lib/app');

chai.use(chaiHttp);

describe('app', () => {

    const request = chai.request(app);

    it('says hello ivy when name passed as query param', done => {
        request.get('/greeting/Ivy')
            .end((err, res) => {
                assert.equal(res.text, '<h1>Hello, Ivy!</h1>');
                done();
            });
    });

    it('says hello stranger when no name is passed in', done => {
        request.get('/greeting')
            .end((err, res) => {
                assert.equal(res.text, '<h1>Hello, Stranger!</h1>');
                done();
            });
    });

    it('gets index on root /', done => {
        request.get('/')
            .end((err, res) => {
                assert.match(res.text, /Lab Server Is Doing It!/);
                done();
            });
    });
});