
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.use(chaiHttp);
chai.should();

describe("Dietela", () => {
  describe("POST /", () => {
    it("should save user", (done) => {
      chai.request(app)
        .post(`/dietela/`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({nama: 'ivan',
               alamat: 'boyolali',
               jabatan: 'admin'})
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("GET /", () => {
    it("should get all user", (done) => {
      chai.request(app)
        .get('/dietela')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should get a single user", (done) => {
      const id = 1;
      chai.request(app)
        .get(`/dietela/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it("should not get a single user", (done) => {
      const id = 10;
      chai.request(app)
        .get(`/dietela/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("PUT /", () =>{
    it("should update user", (done) => {
      const id = 1;
      chai.request(app)
        .put(`/dietela/${id}`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({nama: 'bro',
               alamat: 'boyolali',
               jabatan: 'admin'})
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("should not update user", (done) => {
      const id = 100000;
      chai.request(app)
        .put(`/dietela/${id}`)
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({nama: 'bro',
               alamat: 'boyolali',
               jabatan: 'admin'})
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("DELETE /", () => {
    it("should delete user", (done) => {
      const id = 1;
      chai.request(app)
        .delete(`/dietela/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("should not delete user", (done) => {
      const id = 10;
      chai.request(app)
        .delete(`/dietela/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
