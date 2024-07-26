import axios from "axios"

const url = "http://localhost:8080/api/tags"

async function getPopularTagList()
{
    const response = await axios.get(url + "/popular")
    return response.data
}

export {getPopularTagList}