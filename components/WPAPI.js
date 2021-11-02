const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';
const endpoint = {
    posts: {path: '/wp/v2/posts',
            args: {
                id: {type: 'int', required: false, isParam: false},
                author: {type: 'int', required: false, isParam: true},
            },
        },
    users: {path: '/wp/v2/users',
            args: {
                id: {type: 'int', required: false, isParam: false},
            },
        },
    media: {path: '/wp/v2/media'},
    comments: {path: '/wp/v2/comments'},
    categories: {path: '/wp/v2/categories'},
    search: {path: '/wp/v2/search'},
    blockTypes: {path: '/wp/v2/blockTypes'},
    blocks: {path: '/wp/v2/blocks'},
};

export const WP_GET = (type, arguments) => {
    const path = () => {
        const pathElements = '';
        const queryParams = '';
        if (!arguments) {
            return `${BASE_URL}${endpoint[type].path}`;
        }
        if (typeof arguments === 'object') {
            arguments.every((argument) => {
                console.log(endpoint[type].args[argument])
            })
        }
        else {
            console.warn('Arguement must be an object')
        }
        return `${BASE_URL}${endpoint[type].path}`
    }
    return fetch(`${path()}`).then(response => response.json())
    .catch(error=>error)
}