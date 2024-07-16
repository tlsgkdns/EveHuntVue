import axios from "axios"

const url = "http://localhost:8080/api/members"

const loginConfig = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`
    }
}
async function registerMember (email, name, password, profileImageName){
    console.log(profileImageName)
    return axios.post(url + "/signUp",
        {
            "email": email,
            "name": name,
            "password": password,
            "profileImageName": profileImageName
        }
    )
}
async function login(email, password) {
    let response = await axios.post(url + "/signIn", 
        {
            "email": email,
            "password" : password
        }
    )
    localStorage.setItem("Authorization", response.data.token)
}

async function getLoginMember()
{
    let response = await axios.get(url, loginConfig)
    return response.data
}
async function getMember(memberId)
{
    let response = await axios.get(url + "/" + memberId)
    return response.data
}
async function getParticipatedEvents(pageRequest)
{
    const response = await axios.get(url + "/events?page=" + pageRequest.page + "&size=" + pageRequest.size, loginConfig)
    console.log(response)
    return response.data
}
export {registerMember, login, getLoginMember, getMember, getParticipatedEvents}