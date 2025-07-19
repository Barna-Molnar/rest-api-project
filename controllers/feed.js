exports.getPosts = (req, res, next) => {

    return res.status(200)
        .json({
            posts: [
                { title: 'First post', content: 'This is out first posts' },
            ]
        });

};