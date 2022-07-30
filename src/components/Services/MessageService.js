const baseUrl = 'http://localhost:3030/jsonstore/messages';


export const create = async (messageData) => {
    const responce = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(messageData)
    });
    const result = await responce.json();
    return result;
};

export const getAll = async () => {
    const responce = await fetch(baseUrl);
    const result = responce.json();
    return result;
}

export const onDelete = async (messageId) => {
    const responce = await fetch(baseUrl + '/' + messageId, {
        method: 'DELETE'
    });
    const result = await responce.json();
    return result;
}

