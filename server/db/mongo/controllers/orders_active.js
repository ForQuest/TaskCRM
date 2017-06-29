import order_active from '../models/orders_active';
import order from '../models/orders';
import clientToFind from '../models/clients';
import product from '../models/products';
import placements from '../models/placement';
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
  var { client, start_time, products, discount, status, placement } = req.body;
  var data = { client, start_time, products, discount, placement, status };
  order_active.create(data, (err, order) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    placements.findOneAndUpdate({_id: placement}, {$push: {orders: order._id}}, {new : true}, function(err, model) {});
    clientToFind.findOneAndUpdate({_id: client}, {$push: {active_orders: order._id}}, {new : true}, function(err, model) {});
    return res.status(200).json(order.order_id);
  });
}

export function complited(req, res) {
  var { order_id, stop_time, req_type } = req.body;
  order_active.findOne({order_id}, (err, selected_order) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    
    var { _id, order_id, client, discount, products, start_time, status, placement, __v } = selected_order;
    var complited_order = { order_id, client, discount, products, status };

    placements.findOneAndUpdate({_id: placement}, {$pull: {orders: selected_order._id}}, function(err, model) {}); 

    if(stop_time == undefined){
      stop_time = new Date(Date.now()).toFormatString();
    }

    complited_order.status = req_type;

    complited_order.time = {start: start_time, stop: stop_time};
    complited_order.cost = 0; 
    product.find({}).exec((err, all_products) => {
      selected_order.products.forEach(function(item) {
        all_products.forEach((product_item) => {
          if(JSON.stringify(product_item._id) == JSON.stringify(item.product_id)) {
            complited_order.cost += product_item.price * item.count;
          }
        });
      });

      order_active.findOneAndRemove({order_id}, (err) => {
        if (err) {
          console.log('Error on delete order active ID:'+ req.body.order_id);
          return res.status(500).send('We failed to delete for some reason'); 
        }
        order.create(complited_order, (err, created_order) => {
          if (err) {
            console.log(err);
            return res.status(400).send(err);
          };
          clientToFind.findOneAndUpdate({_id: client}, {$push: {orders: created_order._id}}, {new : true}, function(err, model) {});
          clientToFind.findOneAndUpdate({_id: client}, {$pull: {active_orders: _id}}, { safe: true }, function(err, model) {});
          return res.status(200).send('OK');
        });
      });
    });
  });
}

export function update(req, res) {
  const order_id = req.body.order_id; 
  const type = req.body.type;
  const products = req.body.products;
  const discount = req.body.discount;
  const placement = req.body.placement;

  const data = req.body;

  switch (type) {

    case 'PLACEMENT':
      order_active.findOne({order_id}, (err, selected_order) => {
        if (err) {
          console.log('Error on save order active:'+ req.body.order_id);
          return res.status(500).send('We failed to save for some reason');
        }
        placements.findOneAndUpdate({_id: selected_order.placement}, {$pull: {orders: selected_order._id}}, function(err, model) {}); 
        placements.findOneAndUpdate({_id: placement}, {$push: {orders: selected_order._id}}, {new : true}, function(err, model) {}); 
        order_active.findOneAndUpdate({order_id}, {placement}, function(err, model) {});
        return res.status(200).send('Updated successfully');
      });
    break;

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
  complited
};