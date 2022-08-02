const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const create = async (glassesId, comment) => {
    const responce = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ glassesId, comment })

    });
    const result = await responce.json();
    return result;
};
export const getAll = async () => {
    const responce = await fetch(baseUrl);
    const result = await responce.json()
    return result;
};