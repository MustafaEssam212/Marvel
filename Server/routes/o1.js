const express = require('express');
const orouter = express.Router();
const orderController = require('../controller/order-controller');


orouter.post('/order', orderController.Order)
orouter.post('/getorders', orderController.GetOrders)
orouter.get('/getallorders', orderController.getAllOrders)
orouter.post('/changeorderseen', orderController.ChangeOrderSeen)
orouter.post('/changeorderstatus', orderController.ChangeOrderStatus)
orouter.get('/notification', orderController.Notification)

module.exports = orouter;