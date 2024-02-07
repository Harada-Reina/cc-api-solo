const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

const expect = chai.expect;

const { setupServer } = require('../src/server');

const server = setupServer('8000');

let request;
beforeEach(() => {
  request = chai.request(server);
});

let newProduct = { id: 9999, name: 'ちいかわ(パジャマ)' };
const newName = 'ハチワレ(パジャマ)';
let addedCount = 0;

describe('solo project server test', () => {
  describe('POST /products', () => {
    it('should added product', async () => {
      const res = await request.post('/products').send(newProduct);
      res.should.have.status(200);
    });
  });

  describe('GET /products', () => {
    it('should return product all array', async () => {
      const res = await request.get('/products');
      res.should.be.json;
      const result = JSON.parse(res.text);

      expect(Array.isArray(result)).to.equal(true);

      const product = result.find((prod) => prod.id === newProduct.id);
      expect(product).to.be.not.undefined;

      addedCount = result.length;
    });
  });

  describe('PATCH /products/:id', () => {
    it('should return updated id', async () => {
      newProduct.name = newName;

      const res = await request
        .patch(`/products/${newProduct.id}`)
        .send(newProduct);

      res.should.be.json;
      const result = JSON.parse(res.text);

      expect(result.name).equal(newName);
    });
  });

  describe('GET /products/:id', () => {
    it('should return product by id', async () => {
      const res = await request.get(`/products/${newProduct.id}`);
      res.should.be.json;
      const result = JSON.parse(res.text);

      expect(typeof result).to.equal('object');
      expect(result.id).equal(newProduct.id);
      expect(result.name).equal(newName);
    });
  });

  describe('DELETE /products/:id', () => {
    it('should added product', async (done) => {
      await request.delete(`/products/${newProduct.id}`);

      res.should.have.status(204);
      done();
    });
  });

  describe('GET /products', () => {
    it('should return default products', async () => {
      const res = await request.get('/products');
      res.should.be.json;
      const result = JSON.parse(res.text);
      expect(result.length).to.equal(addedCount - 1);
    });
  });
});
