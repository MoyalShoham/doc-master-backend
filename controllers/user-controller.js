const getUsers = async (req, res) => {
    res.send('Get Users');
}
const postUser = async (req, res) => {
    res.send('Post User');
}
const putUser = async (req, res) => {
    res.send('Put User');
}
const deleteUser = async (req, res) => {
    res.send('Delete User');
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}
