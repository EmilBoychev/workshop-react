const baseUrl = 'http://localhost:3030/data/messages';


export const create = async (messageData) => {
    try {
        const responce = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageData)
        });
        const result = await responce.json();
        return result;
    } catch (err) {
        console.log(err);
    }


};

export const getAll = async () => {
    try {
        const responce = await fetch(baseUrl);
        const result = responce.json();
        return result;
    } catch (err) {
        console.log(err);
    }

}

export const onDelete = async (messageId) => {
    try {
        const responce = await fetch(baseUrl + '/' + messageId, {
            method: 'DELETE'
        });
        const result = await responce.json();
        return result;
    } catch (err) {
        console.log(err);
    }

}

