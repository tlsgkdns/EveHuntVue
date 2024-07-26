import axios from "axios"
import { loginConfig } from "./member"
const url = "http://localhost:8080/api/reports"

async function getReports(pageRequest)
{
    const response = await axios.get(url, {
        params: pageRequest
    })
    return response.data
}

async function createReport(eventId, reason)
{
    const response = await axios.post(url, {
        "eventId": eventId,
        "reason": reason
    }, loginConfig)
    return response.data
}

async function handleReport(reportId, accept, suspendDay)
{
    console.log(reportId, accept, suspendDay)
    const response = await axios.patch(url + "/" + reportId, {
        "suspendDay": Number(suspendDay),
        "accepted": accept
    })
    return response.data
}
export {createReport, getReports, handleReport}