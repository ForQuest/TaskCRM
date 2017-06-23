import product from '../models/products';
import _ from 'lodash';

export function all(req, res) {
  product.find({}).exec((err, products) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(products);
  });
}

export function add(req, res) {
  product.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { _id: req.body._id};
  product.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete product ID:'+ req.body._id);
      return res.status(500).send('We failed to delete for some reason'); 
    }
    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const _id = req.body._id; 
  const req_type = req.body.req_type;
  const type = req.body.type;
  const name = req.body.name;
  const desc = req.body.desc;
  const price = req.body.price;
  const collect = req.body.collect;
  const omit_fields = ['_id', '_v', 'req_type'];

  const data = _.omit(req.body, omit_fields);

  switch (type) {

    case 'FULL': 
      product.findOneAndUpdate(_id, data, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'TYPE': 
      product.findOneAndUpdate(_id, {type}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'NAME':
      product.findOneAndUpdate(_id, {name}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'DESC':
      product.findOneAndUpdate(_id, {desc}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'PRICE':
      product.findOneAndUpdate(_id, {price}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'COLLECT':
      product.findOneAndUpdate(_id, {collect}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body._id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;
      
    default:
      return res.status(404);
    break;
  } 
}

export default {
  all,
  add,
  update,
  remove
};
