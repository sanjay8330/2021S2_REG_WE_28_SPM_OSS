// Function : Payment Management
// Name : D.P. Kavindi Gimshani
// Student Number : IT19150826

const router = require('express').Router();
const CheckoutModel = require('../models/Checkout');

//Add payment details - USER TASK
router.route('/paymentDetails/:userId/:amount').post(async (req, res) => {
    if(req.body){
        const Checkout = new CheckoutModel(req.body);
        await Checkout.save()
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});  

//Get payment history by userId - USER TASK
router.route("/readHistoryForCustomer/:userId").get(async (req, res) => {
    //get user ID
    const currentuserId = req.params.userId;

    CheckoutModel.find({ userId: currentuserId})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
}); 

//Delete payment details -  USER TASK
router.route('/deletePayment/:id').delete(async (req, res) => {
    if(req.params && req.params.id){
        await CheckoutModel.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

//Get payment record by Id - USER TASK
router.route('/getPaymentByID/:id').get(async (req, res) => {
    if(req.params && req.params.id){
        await CheckoutModel.findById(req.params.id)
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

//Delete all payment details - USER TASK
router.route('/deletePaymentHistory/:id').delete(async (req, res) => {
    const id = req.params.id;
    if(req.params && req.params.id){
        await CheckoutModel.deleteMany({userId : id})
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }

  
});

module.exports = router;
