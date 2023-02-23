const Hotel = require("../models/hotel");
const Room = require("../models/room");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

exports.searchRoom = (req, res, next) => {
  // console.log("hello");
  const dest = req.body.destination;
  const opts = req.body.options;
  // console.log(dest, opts);
  const people = opts.adult + opts.children;
  // console.log(people);

  Hotel.find()
    .then( async (hotels) => {

      let hotelsNearby = hotels.filter((hotel) => {
        return hotel.city.toLowerCase().indexOf(dest.toLowerCase()) !== -1;
      });

      const roomWithId = [];
      
      for await (const hotel of hotelsNearby) {
        for await (const id of hotel.rooms) {
          const roomResult = await Room.findById(ObjectId(id));
          roomWithId.push({
            room: roomResult, 
            hotel: hotel
          });
        }
      }
      // console.log("roomWithId --->", roomWithId);
      const roomWithMaxpeple = roomWithId.filter(room => room.room.maxPeople === people)
      console.log('roomWithMaxpeple --->', roomWithMaxpeple);
      res.json(roomWithMaxpeple);
    })
    
    .catch((err) => console.log(err));
};

exports.getRooms = (req, res, next) => {
  Room.find()
  .then(rooms => {
    res.json(rooms);
  })
  .catch(err => console.log(err))
}

exports.postRoom = (req, res, next) => {
  console.log(req.body);
  const string = req.body.roomNumbers;
  const array = string.split(',')
  // console.log(string.parseInt())
  const number = array.map(item => parseInt(item))

  const newRoom = new Room({
    title: req.body.title,
    price: req.body.price,
    desc: req.body.desc,
    maxPeople: req.body.maxPeople,
    roomNumbers: number
  })
  newRoom.save();
}

exports.deleteRoom = (req, res, next) => {
  console.log(req.body.roomId);
  const roomId = req.body.roomId;
  Room.deleteOne({ _id: roomId })
        .then(result => res.json(result))
        .catch(err => console.log(err))

}