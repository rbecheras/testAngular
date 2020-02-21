require('mocha');
const request = require('supertest');

const expect = require('chai').expect;
const app = require('../bin/www');

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
                phoneNumber: '0123456789',
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