const postService = require('../services/postService')

const getDataController = async(req, res) => {
    const post = await postService.getDataFromDB();
    res.send({ "status": true, "data": post })
}

const createPostController = async(req, res) => {
    const status = await postService.createPostDB(req.body);
   
    if (status) {
        res.send({ "status": true, "message" : "Post created successfully", "data": req.body})
    }
    else {
        res.send({ "status": false, "message": "Error creating the user"})
    }
}

const updatePostController = async (req, res) => {
    const result = await postService.updatePostDB(req.params.id, req.body)

    if (result) {
        res.send({ "status": true, "message" : "Post updated successfully"})
    }
    else {
        res.send({ "status": false, "message": "Error updating the post"})
    }
}

const deletePostController = async (req, res) => {
    const result = await postService.deletePostDB(req.params.id)

    if (result) {
        res.send({ "status": true, "message" : "Post deleted successfully"})
    }
    else {
        res.send({ "status": false, "message": "Error deleting the post"})
    }
}

module.exports = { getDataController, createPostController, updatePostController, deletePostController }