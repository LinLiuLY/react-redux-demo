const initState = {
  users: [],
  posts: [
    { id: 1, title: 'one', body: 'body one' },
    { id: 2, title: 'two', body: 'body two' }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
