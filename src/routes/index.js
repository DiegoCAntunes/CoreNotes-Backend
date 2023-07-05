const { Router } = require("express")

const listsRouter = require("./lists.routes")

const routes = Router()

routes.use("/", listsRouter)

module.exports = routes