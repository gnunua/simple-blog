import {createSelector} from "reselect";

const currentPostInput = (state) => state.post.currentPost;
const postDeletedInput = (state) => state.post.deletingState.isLoaded;
const postListInput = (state) => state.postsList.posts;
const postCreatedInput = (state) => state.post.creatingState.isLoaded;

export const postSelector = createSelector(
    [currentPostInput, postDeletedInput],
    (post, deleted) => ({post, deleted})
);

export const postListSelector = createSelector(
    [postListInput],
    (posts) => ({posts})
);

export const createPostSelector = createSelector(
    [postCreatedInput],
    (created) => ({created})
);