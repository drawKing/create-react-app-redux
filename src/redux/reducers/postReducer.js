// reducer作用： 返回最新的状态
import {FETCH_POSTS,NEW_POST} from '../actions/types'

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    console.log('reducer');
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}