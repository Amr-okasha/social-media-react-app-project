import axios from 'axios'



axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("auth")
axios.defaults.baseURL = "http://localhost:8080"
axios.interceptors.response.use("", ex => {
    if (ex.response && 400 <= ex.response.status <= 501) { console.log(ex.response.data) }
    else { console.log("un expexted error occured") }
})

export default { http: axios }