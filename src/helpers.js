export const asyncStatus = (isStarted = false, isLoaded = false, isFailed = false, error = null) => ({
    isStarted,
    isLoaded,
    isFailed,
    error
});

export const makeUtlQueryString = (params) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
};