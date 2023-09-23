const postController = require('../controllers/postController')

const express = require('express');
const router = express.Router();

router.route('/post/getAll').get(postController.getDataController);

router.route('/post/create').post(postController.createPostController);

router.route('/post/update/:id').patch(postController.updatePostController);

router.route('/post/delete/:id').delete(postController.deletePostController);

module.exports = router;
