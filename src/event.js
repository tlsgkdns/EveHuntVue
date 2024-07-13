import axios from "axios"


const url = "http://localhost:8080/api/events"

async function hostEvent(title, description, winMessage, eventImage, question, closeAt, endTime)
{
    console.log({title, description, winMessage, eventImage, question, closeAt})
    const response = await axios.post(url, {
            "title": title,
            "description": description,
            "winMessage": winMessage,
            "eventImage": eventImage,
            "question": question,
            "closeAt": closeAt
        },
        { headers: {
            "Authorization": `Bearer ${localStorage.getItem("Authorization")}`
            }
        })
    return response.data
}

export {hostEvent}