const PostMessage = require("../models/postMessage.js");

async function getPosts(req, res) {
    try {
        const postMessages = await PostMessage.find();

        return res.status(200).json(postMessages);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

async function createPost(req, res) {
    const { body } = req;
    const newPost = new PostMessage(body);

    try {
        await newPost.save();
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}

module.exports = {
    getPosts,
    createPost
};
