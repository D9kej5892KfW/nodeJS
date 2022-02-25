const express = require("express");
//number generator for the newMember ID
const uuid = require("uuid");
const router = express.Router();
//list of members from Members.js file
const members = require("../../Members");

//gets all members
router.get("/", (req, res) => {
  res.json(members);
});

//get single member
router.get("/:id", (req, res) => {
  //check if memberID# exists
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the ID of ${req.params.id}` });
  }
});

//create a new member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  //Check if new Member post is filled correctly
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email." });
  }

  //push the new member object to members list
  members.push(newMember);
  res.json(members);
});

module.exports = router;
