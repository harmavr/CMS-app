const postModel = require('../models/postModel')

module.exports.getDataFromDB = () => {
    return postModel.find({}).exec()
      .then(result => {
        return result;
      })
      .catch(error => {
        throw error;
      });
  };

module.exports.createPostDB = (postInfo) => {
    return new Promise((resolve, reject) => {
        const postModelInfo = new postModel({
            title: postInfo.title,
            content: postInfo.content,
            image: postInfo.image
        });

        postModelInfo.save()
            .then(result => {
              console.log(result.image)
                resolve(result); // Resolve the promise with the saved document
            })
            .catch(error => {
                console.error(error);
                reject(error); // Reject the promise with the error
            });
    });
};

module.exports.updatePostDB = (id, postInfo) => {
       return postModel.findByIdAndUpdate(id, postInfo).exec() 
        .then(result => {
            return result;
          })
          .catch(error => {
            throw error;
          });
}

module.exports.deletePostDB = (id) => {
    return postModel.findByIdAndDelete(id).exec() 
     .then(result => {
         return result;
       })
       .catch(error => {
         throw error;
       });
}
