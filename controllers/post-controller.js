const getPosts = async (req, res) => {
    res.send('Get Posts');
}
const postPost = async (req, res) => {
    res.send('Post Post');
}
const putPost = async (req, res) => {
    res.send('Put Post');
}
const deletePost = async (req, res) => {
    res.send('Delete Post');
}

module.exports = {
    getPosts,
    postPost,
    putPost,
    deletePost
}
