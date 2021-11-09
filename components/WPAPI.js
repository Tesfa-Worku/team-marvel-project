const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';
const endpoint = {
    // wordpress
    wordpress: '/wp/v2',
    posts: '/wp/v2/posts',
    users: '/wp/v2/users',
    media: '/wp/v2/media',
    comments: '/wp/v2/comments',
    categories: '/wp/v2/categories',
    search: '/wp/v2/search',
    blockTypes: '/wp/v2/blockTypes',
    blocks: '/wp/v2/blocks',
    pages: '/wp/v2/pages',

    // buddypress
    buddypress: '/buddypress/v1',
    activity: '/buddypress/v1/activity',
    friends: '/buddypress/v1/friends',
    members: '/buddypress/v1/members',
    messages: '/buddypress/v1/messages',
    signup: '/buddypress/v1/signup',

    // JWT authentication
    token: '/jwt-auth/v1/token',
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



export const WP_POST = (type, queryStringVars = '', bodyObj) => {
    if (!endpoint[type] && typeof type !== 'string') {
        console.warn('WP_GET(type, queryStringVars): type is required as a string. Select from these types: ', Object.keys(endpoint));
    }
    if (typeof queryStringVars !== 'string') {
        console.warn(`WP_GET(type, queryStringVars): queryStringVars value must be a string that starts with '/' or '?'. This string will be appended to the end of the URL.`);
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
    };
    return fetch(`${BASE_URL}${endpoint[type]}`, options)
        .then(response => response.json())
        .catch(error=> console.log(error))
}

export const WP_POST_FILE = (type) => {
    const formData = new FormData();
    const fileField = document.querySelector(`input[type='file']`);
    const options = {
        method: 'POST',
        body: formData
    };

    formData.append('image', fileField.files[0]);

    return fetch(`${BASE_URL}${endpoint[type]}`, options)
        .then(response => response.json())
        .catch(error=> console.log(error))
}