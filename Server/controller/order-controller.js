const mongoose = require('mongoose')
const Orders = require('../model/order-model')
const orderController = {};
const moment = require('moment');


orderController.Order = (req, res, next) =>{
    const ProductName = req.body.Find;
    const Size = req.body.Size;
    const Quantity = req.body.Quantity;
    const Color = req.body.Color;
    const Seen = 'No';
    const Status = 'Pending';
    const UserEmail = req.body.Email;
    const Price = req.body.Price;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Mobile = req.body.Mobile;
    const SecondMobile = req.body.SecondMobile;
    const Address = req.body.Address;
    const City = req.body.City;
    const Name = FirstName + ' ' + LastName
    const Date = moment().format('LL');
    
    const Order = new Orders({
        ProductName,
        Size,
        Price,
        Color,
        Quantity,
        Seen,
        Status,
        Date, 
        Name,
        Mobile,
        SecondMobile,
        Address,
        City,
        UserEmail
    }) 

    Order.save()
    res.send({
        message: 'Order Submited' 
    })
}

orderController.GetOrders = (req, res, next) => {
    const Email = req.body.Email;
    
    Orders.find({UserEmail: Email}, (err, result)=>{
        if(result){
            var Arr = [];
            const Promise1 = new Promise((resolve, reject)=>{
               
                Arr = result;
                Arr.reverse();
                resolve(Arr)
            });
            Promise1.then(response => res.send(response))
        }else{
            res.send({
                message: 'Sorry we abologize we have an Error'
            })
        }
    })
}


orderController.getAllOrders = (req, res, next) => {
    Orders.find({}, (err, result)=>{
        if(result){
            
            const Arr = result;
            Arr.reverse();
            res.send(Arr)     
            
        }else{
            res.send(err)
        }
    })
}

orderController.ChangeOrderSeen = (req, res, next) => {
    const OrderId = req.body.OrderId;
    const Seen = 'Yes'
    Orders.updateOne({_id: OrderId}, {$set: {Seen: Seen}}, (err, result)=>{
        if(result){
           res.send({
               message: 'Changed'
           })
        }else{
            res.send({
                message: 'Error'
            })
        }
    })
}


orderController.ChangeOrderStatus = (req, res, next) => {
    const Status = req.body.Status;
    const OrderId = req.body.OrderId;
    Orders.updateOne({_id: OrderId}, {Status: Status}, (err, result)=>{
        if(result){
            res.send('Changed')
        }else{
            res.send(err)
        }
    })
}

orderController.Notification = (req, res, next) => {
    Orders.find({Seen: 'No'}, (err, result)=>{
        if(result){
            
            res.send(result)
        }else{  
            return
        }
    })
}

module.exports = orderController;