const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';
const endpoint = {
    posts: '/wp/v2/posts',
    users: '/wp/v2/users',
    media: '/wp/v2/media',
    comments: '/wp/v2/comments',
    categories: '/wp/v2/categories',
    search: '/wp/v2/search',
    blockTypes: '/wp/v2/blockTypes',
    blocks: '/wp/v2/blocks',
    pages: '/wp/v2/pages'
};

export const WP_GET = (type, queryStringVars = '') => {
    if (!endpoint[type] && typeof type !== 'string') {
        console.warn('WP_GET(type, queryStringVars): type is required as a string. Select from these types: ', Object.keys(endpoint));
    }
    if (typeof queryStringVars !== 'string') {
        console.warn(`WP_GET(type, queryStringVars): queryStringVars value must be a string that starts with '/' or '?'. This string will be appended to the end of the URL.`);
    }
    return fetch(`${BASE_URL}${endpoint[type]}${queryStringVars}`)
        .then(response => response.json())
        .catch(error=> console.log(error))
}