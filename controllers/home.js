const Hotel = require('../models/hotel')

exports.featuredLish = (req, res, next) => {
 
    Hotel.find()
        .then( hotels => {
            const hanoi = hotels.filter(hotel => hotel.city === "Ha Noi");
            const hcm = hotels.filter(hotel => hotel.city === "Ho Chi Minh");
            const danang = hotels.filter(hotel => hotel.city === "Da Nang");
            const result = { hanoi, hcm, danang };
            return res.json( result);
        })
        .catch(err => console.log(err))
}

exports.browseByPropertyType = (req, res, next) => {
    
}