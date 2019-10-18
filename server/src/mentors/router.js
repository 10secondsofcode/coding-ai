const express = require('express');
const uuidv4 = require('uuid/v4');
const { Router } = express;

const router = Router();

let mentorList = [];

router.get('/mentors', (req, res) => {
  return res.json(mentorList);
});

router.get('/mentors/:id', (req, res) => {
  const id = req.params.id;
  const mentor = mentorList.find(mentor => mentor.id === id);
  if (mentor === undefined) {
    return res.sendStatus(404);
  }
  return res.json(mentor);
});

router.post('/mentors', (req, res) => {
  const mentor = req.body;
  mentor.id = uuidv4();
  mentorList.push(mentor);
  return res.json(mentor);
});

router.put('/mentors/:id', (req, res) => {
  const mentorId = req.params.id;
  const newMentor = req.body;
  const mentor = mentorList.find(mentor => mentor.id === mentorId);
  mentor.name = newMentor.name;
  mentor.age = newMentor.age;

  const newMentorList = mentorList.filter(mentor => mentor.id != mentorId);
  mentorList = [...newMentorList, mentor];

  return res.json(mentor);
});

router.delete('/mentors/:id', (req, res) => {
  const id = req.params.id;
  const newMentorList = mentorList.filter(mentor => mentor.id != id);

  return res.sendStatus(204);
});
module.exports = router;
