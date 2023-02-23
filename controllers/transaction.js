const Transaction = require('../models/transaction');
const Hotel = require('../models/hotel');
const Room = require('../models/room');
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

exports.booking = async (req, res, next) => { 
    const hotelId = req.body.id;
    const dateStart = new Date(req.body.dateStart.substr(0, 15)).getTime();
    const dateEnd = new Date( req.body.dateEnd.substr(0, 15) ).getTime();
    let dataRooms = [];
    try {
        const transactions = await Transaction.find({ hotel: hotelId });
        const hotel = await Hotel.findById(hotelId);
        for await (const id of hotel.rooms) {
            const roomResult = await Room.findById(ObjectId(id));
            roomResult.roomNumbers = roomResult.roomNumbers.map(
                rn => new Object({ roomName: rn, available: true })
            )
            dataRooms.push(roomResult);
        }
        // console.log('dataRooms', dataRooms);
        dataRooms.forEach(room => {
            // console.log(room);
            room.roomNumbers.forEach((rn, index) => {
                // console.log(rn);
                transactions.forEach(tran => {
                    const transStart = new Date(tran.dateStart.substr(0,15)).getTime()
                    const transEnd = new Date(tran.dateEnd.substr(0,15)).getTime()
                    // console.log('tran.dateStart --->', new Date(transStart).getTime() )
                    // console.log(tran);
                    tran.rooms.forEach(trn => {
                        console.log(dateStart, transStart)
                        if (
                            trn.roomId.toString() === room._id.toString() &&
                            trn.roomNumber.toString() === rn.roomName.toString() && (
                                //Truong hop sai 
                                ( dateStart >= transStart && dateStart <= transEnd ) ||
                                ( dateEnd <= transEnd && dateEnd >= transStart )
                            )
                        ) {
                            room.roomNumbers[index].available = false;
                        }
                    })
                })
            })
        })

        // console.log(dataRooms)
        res.status(200).json({ message: "Success", result: dataRooms })

    } catch (err) {
        console.log(err);
    }

    //     console.log(roomInHotel);
    //     roomInHotel.map(room => {
    //         if(room.roomNumbers = transactions.room){}
    //     })
    // })
    // .catch(err => console.log(err));
}

exports.saveTrans = (req, res, next) => {
    // console.log('hello')
    // console.log(req.body);
    const newTrans = new Transaction({
        userId: req.body.transData.userId,
        hotel: req.body.transData.hotel,
        rooms: req.body.transData.rooms,
        dateStart: req.body.transData.dateStart,
        dateEnd: req.body.transData.dateEnd,
        price: req.body.transData.price,
        payment: req.body.transData.payment
    })
    newTrans.save()
}

exports.postTrans = (req, res, next) => {
    // console.log('hello111')
    // console.log(req.body.id);
    const userId = req.body.id;
    Transaction.find({userId: userId})
    .then(data => res.json(data))
    .catch(err => console.log(err))
}

exports.getTrans = (req, res, next) => {
    Transaction.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
}