const initState = {
  posts: [
    { id: 1, title: 'one', body: 'body one' },
    { id: 2, title: 'two', body: 'body two' }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
