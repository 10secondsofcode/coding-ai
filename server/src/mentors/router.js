const express = require('express');
const uuidv4 = require('uuid/v4');
const router = express.Router();
const Mentor = require('../../models/mentors');

router.get('/', async (req, res) => {
  const mentorList = await Mentor.find();
  return res.json(mentorList);
});

router.get('/:id', async (req, res) => {
  const mentor = await Mentor.findOne({ _id: req.params.id });
  if (!mentor) {
    return res.sendStatus(404);
  }
  return res.json(mentor);
});

router.post('/', async (req, res) => {
  const newMentor = await Mentor.create(req.body);
  return res.json(newMentor);
});

router.put('/:id', async (req, res) => {
  const mentorId = req.params.id;
  const newMentor = req.body;
  const mentor = await Mentor.findByIdAndUpdate(mentorId, newMentor, { new: true });
  return res.json(mentor);
});

router.delete('/:id', async (req, res) => {
  await Mentor.findByIdAndDelete(req.params.id);
  return res.sendStatus(204);
});

module.exports = router;
