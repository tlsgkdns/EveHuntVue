import axios from "axios"

const url = "http://localhost:8080/api/events"

async function hostEvent(title, description, capacity, winMessage, eventImage, question, closeAt, tagAddRequests)
{
    console.log({title, description, winMessage, eventImage, question, closeAt})
    const response = await axios.post(url, {
            "title": title,
            "description": description,
            "winMessage": winMessage,
            "capacity": capacity,
            "eventImage": eventImage,
            "question": question,
            "closeAt": closeAt,
            "tagAddRequests": tagAddRequests
        },
        { headers: {
            "Authorization": `Bearer ${localStorage.getItem("Authorization")}`
            }
        })
    console.log(response)
    return response.data
}

async function getEvent(id)
{
    const response = await axios.get(url + "/" + id)
    return response.data
}

async function participateEvent(id, answer)
{
    const response = await axios.post(url + "/" + id + "/participants", {
        "answer": answer
    }, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("Authorization")}`
        }
    }) 
    return response.data
}

async function getParticipateCount(id)
{
    const response = await axios.get(url + "/" + id + "/participants/count")
    return response.data
}
async function getParticpants(id)
{
    const response = await axios.get(url + "/" + id + "/participants")
    return response.data
}
async function getPopularEvent()
{
    console.log("Popular...")
    const response = await axios.get(url + "/popular")
    return response.data
}
async function searchEvent(pageRequest)
{
    const response = await axios.get(url, {
        params: pageRequest
    })
    return response.data
}
async function setEventResult(id, winners)
{
    console.log(winners)
    const response = await axios.patch(url + "/" + id + "/participants/result", {
        "eventWinners": Array.from(winners.keys()),
        "winMessages": Array.from(winners.values())
    })
    return response.data
}
async function editEvent(eventId, title, description, capacity, winMessage, eventImage, question, closeAt, tagAddRequests)
{
    const response = await axios.patch(url + "/" + eventId, {
        "title": title,
        "description": description,
        "winMessage": winMessage,
        "capacity": capacity,
        "eventImage": eventImage,
        "question": question,
        "closeAt": closeAt,
        "tagAddRequests": tagAddRequests
    }, { 
        headers: {
        "Authorization": `Bearer ${localStorage.getItem("Authorization")}`
        }
    })
    return response.data
}

async function closeEvent(eventId)
{
    const response = await axios.patch(url + "/" +eventId + "/close", { 
        headers: {
        "Authorization": `Bearer ${localStorage.getItem("Authorization")}`
        }
    })
    return response.data
}
export {hostEvent, getEvent, participateEvent, getParticipateCount, getPopularEvent, searchEvent, editEvent, getParticpants, setEventResult, closeEvent}