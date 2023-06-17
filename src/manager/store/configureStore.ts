import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from '../reducer/blogReducer';
const composeEnhancers:any = compose;
const configureStore:any =()=>{
    const store = createStore(blogReducer,
        composeEnhancers(applyMiddleware(thunk)));
    return store;
};

export default configureStore;