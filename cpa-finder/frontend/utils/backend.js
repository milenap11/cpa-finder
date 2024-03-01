import axios from 'axios'

/* NON-AUTH REQUESTS */
export async function getComments(cpaId) {
    const { data } = await axios.get(`/api/comments/${cpaId}`)
    return data
}

/* AUTHENTICATION REQUESTS */
export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}


/* AUTHORIZATION REQUESTS */
export async function postComment(comment) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/comments', comment, authHeader)
    return data
}

export async function updateComment(comment, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/comments/${id}`, comment, authHeader)
    return data
}

export async function deleteComment(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/comments/${id}`, authHeader)
    return data
}



