const Hotel = require('../models/hotel')

exports.hotelList = (req, res, next) => {

    Hotel.find()
        .then(hotels => {
            return res.json(hotels);
        })
        .catch(err => console.log(err))
}

exports.deleteHotel = (req, res, next) => {
    const hotelId = req.body.hotelId;
    Hotel.deleteOne({ _id: hotelId })
        .then(result => res.json(result))
        .catch(err => console.log(err))
}

exports.addHotel = (req, res, next) => {
    console.log(req.body);
    const newHotel = new Hotel ({
        name: req.body.name,
        city: req.body.city,
        distance: req.body.city,
        desc: req.body.desc,
        photos: req.body.photos,
        type: req.body.type,
        address: req.body.address,
        title: req.body.title,
        cheapestPrice: req.body.price,
        featured: req.body.featured,
        rooms: req.body.rooms
    })
    newHotel.save();
}