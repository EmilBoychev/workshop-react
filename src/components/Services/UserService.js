const baseUrl = 'http://localhost:3030/jsonstore/users';

export const register = async (userData) => {
    try {
        const response = await fetch(baseUrl + '/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error.message);
    }

}

export const login = async (email, password) => {
    try {
        const response = await fetch(baseUrl + '/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(email, password)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(baseUrl + '/login');
        console.log(error.message);
    }
}
export const logout = (token) => {
    fetch(baseUrl + '/logout')




    // fetch(baseUrl + '/logout', {
    //     headers: {
    //         'X-Authorization': token
    //     }
    // });
};