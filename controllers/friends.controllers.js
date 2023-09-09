const model = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      error: "Missing friend name",
    });
    return;
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}
//
function getFriends(req, res) {
  res.status(200).json(model); // we send data as json
}
//
function getFriendsById(req, res) {
  const friendId = +req.params.id;
  const friend = model[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist",
    });
  }
}

module.exports = { postFriends, getFriends, getFriendsById };
