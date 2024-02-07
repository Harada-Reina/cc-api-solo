const express = require('express');
const path = require('path');
const db = require('../db/db');

const PRODUCT_TABLE_NAME = 'product';

const setupServer = (port) => {
  const app = express();
  app.use(express.json());

  app.get('/products', async (req, res) => {
    const products = await db.select().from(PRODUCT_TABLE_NAME);
    res.json(products);
  });

  app.get('/products/:id', async (req, res) => {
    const product = await db
      .select()
      .from(PRODUCT_TABLE_NAME)
      .where({ id: req.params.id })
      .first();
    res.json(product);
  });

  app.post('/products', async (req, res) => {
    const id = await db(PRODUCT_TABLE_NAME)
      .insert({
        id: req.body.id,
        name: req.body.name,
      })
      .returning('id')
      .then((ids) => ids[0])
      .catch(console.error);

    res.json(id);
  });

  app.patch('/products/:id', async (req, res) => {
    const product = await db(PRODUCT_TABLE_NAME)
      .update(
        {
          name: req.body.name,
        },
        ['id', 'name']
      )
      .from(PRODUCT_TABLE_NAME)
      .where({ id: req.params.id })
      .catch(console.error);

    res.json(product[0]);
  });

  app.delete('/products/:id', async (req, res) => {
    await db
      .from(PRODUCT_TABLE_NAME)
      .where('id', req.params.id)
      .del()
      .then(() => {
        console.log("removed test customer");
      })
      .catch(console.error);

      res.statusCode(204);
  });

  app.listen(port, () => console.log(`Server running on port ${port}!`));

  return app;
};

module.exports = { setupServer };
