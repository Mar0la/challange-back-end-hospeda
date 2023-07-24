const router = require('express').Router()

const createEventController = require('../controllers/createEventController')
const listAllEventController = require('../controllers/listAllEventController')
const listEvenetByNameController = require('../controllers/listEvenetByNameController')
const deletEvenetByIdController = require('../controllers/deleteEventByIdController')
const updateEventByIdController = require('../controllers/updateEventByIdController')

router.route("/events").post((req, res) => createEventController.create(req, res))

router.route('/events').get((req, res) => listAllEventController.getAll(req, res))

router.route('/events/:nome').get((req, res) => listEvenetByNameController.getByName(req, res))

router.route('/events/:id').delete((req, res) => deletEvenetByIdController.deleteById(req, res))

router.route('/events/:id').put((req, res) => updateEventByIdController.updateById(req, res))

module.exports = router