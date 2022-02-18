const asyncHandler = require('express-async-handler')

const User = require('../modles/userModel')
const Ticket = require('../modles/ticketModel')

//@description   Get user tickets
//@route         Get /api/tickets
//@access        Private
const getTickets = asyncHandler(async (req, res) => {
    // Get user using id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const tickets = await Ticket.findById({user: req.user.id})

    res.status(200).json(tickets)
})
//@description   Create New Ticket
//@route         Post /api/tickets
//@access        Private
const createTicket = asyncHandler(async (req, res) => {
    const {product, description} = req.body

    if(!product || !description) {
        res.status(400)
        throw new Error('Please add a product and description')
    }    
    
    // Get user using id in the JWT
    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: 'new'
    })




    res.status(201).json(ticket)
})

module.exports = {
    getTickets,
    createTicket,
}