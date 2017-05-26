import {createSelector} from "reselect";

const currentPostInput = (state) => state.post.currentPost;
const currentPostLoadedInput = (state) => state.post.fetchingState.isLoaded;
const postDeletedInput = (state) => state.post.deletingState.isLoaded;
const postListInput = (state) => state.postsList.posts;
const postListLoadedInput = (state) => state.postsList.fetchingState.isLoaded;
const postCreatedInput = (state) => state.post.creatingState.isLoaded;

export const postSelector = createSelector(
    [currentPostInput, postDeletedInput, currentPostLoadedInput],
    (post, deleted, isLoaded) => ({post, deleted, isLoaded})
);

export const postListSelector = createSelector(
    [postListInput, postListLoadedInput],
    (posts, isLoaded) => ({posts, isLoaded})
);

export const createPostSelector = createSelector(
    [postCreatedInput],
    (created) => ({created})
);