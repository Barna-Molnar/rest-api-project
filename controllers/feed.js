exports.getPosts = (req, res, next) => {

    return res.status(200)
        .json({
            posts: [
                { title: 'First post', content: 'This is out first posts' },
            ]
        });

};
exports.addPost = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;

    return res.status(201)
        .json({
            response: 'Post was added succesfully',
            addedPost: { title, content },

        });

};