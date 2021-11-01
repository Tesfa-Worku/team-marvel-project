// endpoints: posts, users, fetch, media, comments, categories, search, blockTypes, blocks

export const WP_GET = (endpoint, id) => {
    if (id == null) {
        return fetch(`${BASE_URL}/wp/v2/${endpoint}/`).then(response => response.json())
        .catch(error=>error)
    }
    return fetch(`${BASE_URL}/wp/v2/${endpoint}/${id}`).then(response => response.json())
    .catch(error=>error)
}