require('mocha');
const request = require('supertest');

const expect = require('chai').expect;
const app = require('../bin/www');
const formMaxNumberFromPhoneNumber = require('../lib').formMaxNumberFromPhoneNumber

describe('GET /', function () {
    it('respond server alive', function (done) {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: 'Express server is alive'
            })
            .end(function (err, res) {
                if (err) return done(err);
                done()
            });
    })
});

describe('POST /apis/contacts', function () {
    it('respond with 201 CREATED', function (done) {
        request(app)
            .post('/apis/contacts')
            .set('Accept', 'application/json')
            .send({
                name: 'foo',
                email: 'foo@example.com',
                phoneNumber: '33123456789',
                shouldAddToNewsletter: false
            })
            .expect(201)
            .then(resp => {
                expect(resp.body.doc).to.be.an('object')
                done()
            })
            .catch(err => {
                if (err) return done(err);
            });
    })
});

describe('function formMaxNumberFromPhoneNumber()', function () {
    it('return a number', function (done) {
        expect(formMaxNumberFromPhoneNumber('33123456789')).to.be.a('number')
        done()
    })
    it('return the highest number from input "33,1,23,45,67,89"', function (done) {
        expect(formMaxNumberFromPhoneNumber('33123456789')).to.equal(89674533231)
        done()
    })
    it('return the highest number from input "33,6,10,19,12,99"', function (done) {
        expect(formMaxNumberFromPhoneNumber('33610191299')).to.equal(99633191210)
        done()
    })
})