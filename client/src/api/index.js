import axios from 'axios';

// Get the hostname (IP address) of the current location
const hostname = window.location.hostname;

// Set the port and route
const port = 5000;

// Construct the base URL dynamically
const url = `http://${hostname}:${port}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);