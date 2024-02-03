const getUserToken = (email) => {
    return fetch(`http://localhost:5000/jwt?email=${email}`, {
        method: 'POST'
    })
}

export default getUserToken;