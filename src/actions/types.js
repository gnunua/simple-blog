//@flow

import type {Post} from "../reducers/reducerPost";

export type Action =
    | {type: 'FETCH_POSTS_LIST_RESET'}
    | {type: 'FETCH_POSTS_LIST_SUCCESS', payload: Array<Post>}
    | {type: 'FETCH_POSTS_LIST_FAIL', payload: ?mixed}
    | {type: 'FETCH_POSTS_LIST_START'}
    | {type: 'FETCH_POSTS_LIST_START'}
    | {type: 'FETCH_POST_RESET'}
    | {type: 'FETCH_POST_START'}
    | {type: 'FETCH_POST_SUCCESS', payload: Post}
    | {type: 'FETCH_POST_FAIL', payload: ?mixed}
    | {type: 'DELETE_POST_START'}
    | {type: 'DELETE_POST_SUCCESS', payload: Post}
    | {type: 'DELETE_POST_FAIL', payload: ?mixed}
    | {type: 'CREATE_POST_START'}
    | {type: 'CREATE_POST_SUCCESS', payload: Post}
    | {type: 'CREATE_POST_FAIL', payload: ?mixed}
