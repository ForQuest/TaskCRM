import order_active from '../models/orders_active';
import order from '../models/orders';
import product from '../models/products';
import _ from 'lodash';

export function all(req, res) {
  order_active.find({}).exec((err, orders_active) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    return res.json(orders_active);
  });
}

export function add(req, res) {
  var { client, start_time, products, discount } = req.body;
  var data = { client, start_time, products, discount };
  order_active.create(data, (err, order) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    return res.status(200).json(order.order_id);
  });
}

export function complited(req, res) {
  var { order_id, stop_time } = req.body;
  order_active.findOne({order_id}, (err, selected_order) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    var { _id, order_id, client, discount, products, start_time, __v } = selected_order;
    var complited_order = { order_id, client, discount, products };
    complited_order.time = {start: complited_order.start_time, stop: stop_time};
    complited_order.cost = 0; 

    product.find({}).exec((err, all_products) => {
      selected_order.products.forEach(function(item) {
        all_products.forEach((product_item) => {
          if(JSON.stringify(product_item._id) == JSON.stringify(item.product_id)) {
            complited_order.cost += product_item.price * item.count;
          }
        });
      });
      console.log(complited_order.cost);

      order_active.findOneAndRemove({order_id}, (err) => {
        if (err) {
          console.log('Error on delete order active ID:'+ req.body.order_id);
          return res.status(500).send('We failed to delete for some reason'); 
        }
        order.create(complited_order, (err) => {
          if (err) {
            console.log(err);
            return res.status(400).send(err);
          }
          return res.status(200).send('OK');
        });
      });
    });
  });
}

export function remove(req, res) {
  const query = { order_id: req.body.order_id};
  order_active.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete order active ID:'+ req.body.order_id);
      return res.status(500).send('We failed to delete for some reason'); 
    }
    return res.status(200).send('Removed Successfully');
  });
}

export function update(req, res) {
  const order_id = req.body.order_id; 
  const type = req.body.type;
  const products = req.body.products;
  const discount = req.body.discount;

  const data = req.body;

  switch (type) {

    case 'PRODUCTS':
      order_active.findOneAndUpdate({order_id}, {products}, (err) => {
        if (err) {
          console.log('Error on save order active:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        return res.status(200).send('Updated successfully');
      });
    break;
      
    case 'DISCOUNT':
      order_active.findOneAndUpdate({order_id}, {discount}, (err) => {
        if (err) {
          console.log('Error on save order active:'+ req.body.order_id);
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
  complited,
  remove
};