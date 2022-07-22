
const baseUrl = 'http://localhost:5000/glasses';


export const create = async (glassesData) => {

    const responce = await fetch(baseUrl, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(glassesData)
    });

    const result = await responce.json();
    console.log(responce);
    return result
}
export const getAll = async () => {
    const responce = await fetch(baseUrl);
    const result = await responce.json();
    return result;
}

export const getOne = async (glassesId) => {
    const responce = await fetch(baseUrl + '/' + glassesId);
    const result = await responce.json();
    return result;
}

export const updata = async (glassesId, glassesData) => {
    const responce = await fetch(baseUrl + '/' + glassesId, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(glassesData)
    });
    const result = await responce.json();
    return result;
}

export const deleteGlasses = async (glassesId) => {
    const responce = await fetch(baseUrl + '/' + glassesId, {
        method: "DELETE"
    });
    const result = responce.json();
    return result;
}