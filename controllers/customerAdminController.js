const {Customer} = require("../models")

const customerPage = async (req,res) => {
    try {
        const customers = await Customer.findAll()

        res.render("customers/index.ejs",{
            customers,
            message: req.flash("message","")
        })

    } catch (err) {
    res.render("error.ejs", {
        message: err.message,
    })
}}
const createCustomerPage = async (req,res) => {
    try {
        res.render("customers/create.ejs")
    } catch (err) {
    res.render("error.ejs", {
        message: err.message,
    })
}}

const createCustomer = async (req,res) => {
    try{
        await Customer.create(req.body)
        res.redirect("/customers")
    } catch(err){
        console.log(err.message)
    }
}

const editCustomerPage = async (req, res) => {
    try {
    const customer = await Customer.findByPk(req.params.id)

    res.render("customers/edit.ejs", {
        customer,
    })
    } catch (err) {
    res.render("error.ejs", {
        message: err.message,
    })
    }
}

const editCustomer = async (req, res) => {
    try {
    await Customer.update(req.body, {
        where: {
        id: req.params.id,
        },
    })
    req.flash("message", "Diedit");
    res.redirect("/customers");
    } catch (err) {
    res.render("error.ejs", {
        message: err.message,
    })
    }
}

const deleteCustomer = async (req,res) => {
    try{
    await Customer.destroy({
                where: {
                    id: req.params.id,
                }
            })
        res.redirect("/customers")
    } catch(err){
        console.log(err.message)
    }
}
module.exports = {
    customerPage,
    createCustomerPage,
    createCustomer,
    editCustomerPage,
    editCustomer,
    deleteCustomer
}