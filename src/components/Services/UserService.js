const baseUrl = 'http://localhost:5000/users';

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

export const login = async (username, password) => {
    try {
        const response = await fetch(baseUrl + '/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(username, password)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(baseUrl + '/login');
        console.log(error.message);
    }
}