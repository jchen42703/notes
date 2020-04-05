import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], // Posts that come from action (fetch request)
  item: {}, // single post
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS: // fetchPosts action
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST: // createPost action
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
