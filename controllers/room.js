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
    .then(async (hotels) => {
      let hotelsNearby = hotels.filter((hotel) => {
        return hotel.city.toLowerCase().indexOf(dest.toLowerCase()) !== -1;
      });

      const roomWithId = [];

      await hotelsNearby.forEach(async (hotel) => {
        console.log('hotel.rooms --->', hotel.rooms);
        await hotel.rooms.forEach(async (id) => {
          console.log('id --->', id);
          const roomResult = Room.findById(ObjectId(id))
            .then((room) => {
              console.log("room --->", room);
            //   roomWithId.push(room);
                return room;
            })
            .catch((err) => console.log(err));
          console.log("roomResult", roomResult);
          const result = await roomResult
          roomWithId.push(result);
        });
      });

      console.log("roomWithId --->", roomWithId);

      res.json(roomWithId);
    })
    .catch((err) => console.log(err));
};