const knex = require("../database/knex")

class ListsController{
    async create(request, response){
        const { title, description, isFavorite, color } = request.body

        await knex("lists").insert({
            title,
            description,
            color,
            isFavorite
        })

        return response.json()
    }

    async update(request, response){
        const { title, description, isFavorite, color } = request.body
        const {id} = request.params

        await knex("lists")
        .where({ id: id })
        .first()
        .update(({
            title: title,
            description: description,
            isFavorite: isFavorite,
            color:color
        }))

        return response.json()
    }

    async show(request, response){
        const { id } = request.params

        const list = await knex("lists").where({ id }).first()

        return response.json(list)
    }

    async delete(request, response){
        const { id } = request.params

        await knex("lists").where({ id }).delete()

        return response.json()
    }

    async index(request, response){
        const { title } = request.query

        let lists

        lists = await knex("lists")
        .whereLike("title", `%${title}%`)
        .orderBy("title")

        return response.json(lists)
    }
}

module.exports = ListsController;