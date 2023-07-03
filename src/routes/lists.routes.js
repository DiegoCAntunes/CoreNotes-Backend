const { Router } = require("express")

const ListsController = require("../controllers/ListsController")
const listsRoutes = Router()

const listsController = new ListsController()

listsRoutes.post('/', listsController.create)
listsRoutes.get('/:id', listsController.show)
listsRoutes.delete('/:id', listsController.delete)
listsRoutes.get('/', listsController.index)
listsRoutes.put('/:id', listsController.update)

module.exports = listsRoutes