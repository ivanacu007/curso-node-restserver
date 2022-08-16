const { request, response } = require('express');

const usersGet = (req = request, res = response) => {
    const  params = req.query;
    res.json({
        msg: "get API - controller",
        params
    })
}

const usersPost = (req, res) => {
    const body = req.body;
    res.json({
        msg: "post API - controller",
        body
    })
}

const usersPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: "put API - controller",
        id
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: "delete API - controller"
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: "patch API - controller"
    })
}

module.exports ={
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}