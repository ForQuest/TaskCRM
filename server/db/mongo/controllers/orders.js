import order from '../models/orders';
import _ from 'lodash';

export function all(req, res) {
  order.find({}).exec((err, orders) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(orders);
  });
}

export function add(req, res) {
  order.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    return res.status(200).send('OK');
  });
}

export function remove(req, res) {
  const query = { order_id: req.body.order_id};
  order.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete order ID:'+ req.body.order_id);
      return res.status(500).send('We failed to delete for some reason'); 
    }
    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const order_id = req.body.order_id; 
  const type = req.body.type;
  const cost = req.body.cost;
  const time = req.body.time;
  const client = req.body.client;
  const products = req.body.products;
  const discount = req.body.discount;
  const omit_fields = ['order_id', '_v', 'req_type'];

  const data = _.omit(req.body, omit_fields);

  switch (type) {

    case 'FULL': 
      product.findOneAndUpdate(order_id, data, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'COST':
      product.findOneAndUpdate(order_id, {cost}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'TIME':
      product.findOneAndUpdate(order_id, {time}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'CLIENT':
      product.findOneAndUpdate(order_id, {client}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'PRODUCTS':
      product.findOneAndUpdate(order_id, {products}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;
      
    case 'DISCOUNT':
      product.findOneAndUpdate(order_id, {discount}, (err) => {
        if (err) {
          console.log('Error on save product:'+ req.body.order_id);
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
