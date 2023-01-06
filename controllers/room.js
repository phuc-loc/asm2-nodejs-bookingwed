const Hotel = require("../models/hotel");
const Room = require("../models/room");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;


exports.searchRoom = (req, res, next) => {
  console.log("hello");
  // const {dest , opts} = req.body;
  const dest = req.body.destination;
  const opts = req.body.options;
  console.log(dest, opts);
  const people = opts.adult + opts.children;
  console.log(people);

  Hotel.find()
    .then( async (hotels) => {

      let hotelsNearby = hotels.filter((hotel) => {
        return hotel.city.toLowerCase().indexOf(dest.toLowerCase()) !== -1;
      });

      const roomWithId = [];

      // hotelsNearby.forEach( (hotel) => {
      //   hotel.rooms.forEach(async (id) => {
      //     const roomResult = await Room.findById(ObjectId(id))
      //     roomWithId.push(roomResult);
      //   });
      // });

      for await (const hotel of hotelsNearby) {
        for await (const id of hotel.rooms) {
          const roomResult = await Room.findById(ObjectId(id))
          roomWithId.push(roomResult);
        }
      }

      // console.log("roomWithId --->", roomWithId);
      const roomWithMaxpeple = roomWithId.filter(room => room.maxPeople === people)
      console.log('roomWithMaxpeple --->', roomWithMaxpeple)
      res.json(roomWithMaxpeple);
    })
    
    .catch((err) => console.log(err));
};