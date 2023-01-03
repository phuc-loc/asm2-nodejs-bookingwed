const Hotel = require('../models/hotel')

exports.hotelList = (req, res, next) => { 
  
    Hotel.find()
        .then( hotels => {
            // const hanoi = hotels.filter(hotel => hotel.city === "Ha Noi");
            // const hcm = hotels.filter(hotel => hotel.city === "Ho Chi Minh");
            // const danang = hotels.filter(hotel => hotel.city === "Da Nang");
            // const result = { hanoi, hcm, danang };
            return res.json( hotels );
        })
        .catch( err => console.log(err) )
}

