
const baseUrl = 'http://localhost:3030/data/glasses';


export const create = async (glassesData) => {
    try {
        const responce = await fetch(baseUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(glassesData)
        });
        const result = await responce.json();
        return result
    } catch (error) {
        console.log(error);
    }
}
export const getAll = async () => {
    try {
        const responce = await fetch(baseUrl);

        const result = await responce.json();
        // const values = Object.values(result);
        // const id = Object.keys(result);
        // values.map(x => console.log(...x))
        // console.log(values);
        return result;
    } catch (error) {
        console.log(error);
    }

}

export const getOne = async (glassesId) => {
    try {
        const responce = await fetch(baseUrl + '/' + glassesId);
        const result = await responce.json();
        return result;
    } catch (error) {
        console.log(error);
    }

}

export const updata = async (glassesId, glassesData) => {
    try {
        const responce = await fetch(baseUrl + '/' + glassesId, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(glassesData)
        });
        const result = await responce.json();
        return result;
    } catch (error) {
        console.log(error);
    }


}

export const deleteGlasses = async (glassesId) => {
    try {
        const responce = await fetch(baseUrl + '/' + glassesId, {
            method: "DELETE"
        });
        const result = responce.json();
        return result;
    } catch (error) {
        console.log(error);
    }

}