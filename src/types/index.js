// @flow

export type Dispatch = Function;

export type Post = {|
    id: number,
    title: ?string,
    categories: ?string,
    content: ?string
|}

export type AsyncStatus = {|
    isStarted: boolean,
    isLoaded: boolean,
    isFailed: boolean,
    error: ?any,
|}

export type PostState = {
    +currentPost: ?Post,
    +fetchingState: AsyncStatus,
    +deletedPost: ?Post,
    +deletingState: AsyncStatus,
    +createdPost: ?Post,
    +creatingState: AsyncStatus
}

export type PostsListState = {
    +posts: Array<Post>,
    +fetchingState: AsyncStatus
}

type State = {
    postsList: PostsListState,
    post: PostState,
};