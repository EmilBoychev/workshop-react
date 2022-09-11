const baseUrl = 'https://server-js.herokuapp.com/data/messages';


export const create = async (token, messageData) => {
    try {
        const responce = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                "X-Authorization": token,
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

export const onDelete = async (token, messageId) => {
    try {
        const responce = await fetch(baseUrl + '/' + messageId, {
            method: 'DELETE',
            headers: {
                "X-Admin": token,
            }
        });
        const result = await responce.json();
        return result;
    } catch (err) {
        console.log(err);
    }

}

