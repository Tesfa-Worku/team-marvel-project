const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';

export const posts= ()=> {
    return fetch(`${BASE_URL}/wp/v2/posts`).then(response => response.json())
    .catch(error=>error)
}

export const users =()=>{
    return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json())
    .catch(error=>error)
}

export const media =()=>{
    return fetch(`${BASE_URL}/wp/v2/media/`).then(response => response.json())
    .catch(error=>error)
}

export const comments =()=>{
    return fetch(`${BASE_URL}/wp/v2/comments`).then(response => response.json())
    .catch(error=>error)
}

export const categories =()=>{
    return fetch(`${BASE_URL}/wp/v2/categories`).then(response => response.json())
    .catch(error=>error)
}

export const search =()=>{
    return fetch(`${BASE_URL}/wp/v2/search`).then(response => response.json())
    .catch(error=>error)
}

export const blockTypes =()=>{
    return fetch(`${BASE_URL}/wp/v2/block-types`).then(response => response.json())
    .catch(error=>error)
}

export const blocks=()=>{
    return fetch(`${BASE_URL}/wp/v2/blocks`).then(response => response.json())
    .catch(error=>error)
}