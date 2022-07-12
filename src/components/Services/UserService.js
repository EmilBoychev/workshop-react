const baseUrl = 'http://localhost:5000/users';

export const register = async (userData) => {
    console.log(userData);
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