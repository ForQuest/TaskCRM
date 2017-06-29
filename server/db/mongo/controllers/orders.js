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

export function add(req, res)
 {
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
  const status = "Deleted";
  order.findOneAndUpdate(query, {status}, (err) => {
    if (err) {
      console.log('Error on delete order:'+ req.body.order_id);
      return res.status(500).send('We failed to delete for some reason');
    }
    return res.status(200).send('Deleted successfully');
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
  const omit_fields = ['_id', '__v', 'type'];

  const data = _.omit(req.body, omit_fields);

  switch (type) {

    case 'FULL': 
      order.findOneAndUpdate({order_id}, data, (err) => {
        if (err) {
          console.log('Error on save order:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'COST':
      order.findOneAndUpdate({order_id}, {cost}, (err) => {
        if (err) {
          console.log('Error on save order:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'TIME':
      order.findOneAndUpdate({order_id}, {time}, (err) => {
        if (err) {
          console.log('Error on save order:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'CLIENT':
      order.findOneAndUpdate({order_id}, {client}, (err) => {
        if (err) {
          console.log('Error on save order:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;

    case 'PRODUCTS':
      order.findOneAndUpdate({order_id}, {products}, (err) => {
        if (err) {
          console.log('Error on save order:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;
      
    case 'DISCOUNT':
      order.findOneAndUpdate({order_id}, {discount}, (err) => {
        if (err) {
          console.log('Error on save order:'+ req.body.order_id);
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
