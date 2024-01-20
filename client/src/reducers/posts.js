// To understand for future reference, in this entire project, actions are used more for changing values 
// on the server side, where as reducers change stored values to be used for UI, take for example deleting
// a post, actions will delete it from the database, then you could re-fetch all the posts and get the desired 
// values, however, in order to avoid unnecessary fetches, we have the reducer delete the post from the redux local store.
// This means if the DB server failed to delete the post, the same post would still be present when reloading the web
import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
//set initial sate for reducer to an empty array
export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:
      // Map returns an array, so we will mapping over the posts array, change something in there
      // and then return the changed array, action.payload is the updated post
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
}