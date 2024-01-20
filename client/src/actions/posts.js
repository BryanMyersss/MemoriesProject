// To understand for future reference, in this entire project, actions are used more for changing values 
// on the server side, where as reducers change stored values to be used for UI, take for example deleting
// a post, actions will delete it from the database, then you could re-fetch all the posts and get the desired 
// values, however, in order to avoid unnecessary fetches, we have the reducer delete the post from the redux local store.
// This means if the DB server failed to delete the post, the same post would still be present when reloading the web
import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api'

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //dispatches an action object with two properties
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error)
  }
}