import axios from "axios";
function getExtension(filename) {
    const parts = filename.split('.');
    return parts[parts.length - 1];
}

function isImage(filename) {
    const ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case 'jpg':
        case 'gif':
        case 'bmp':
        case 'png':
            return true;
    }
    return false;
}
function blobToData(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  }
const url = "http://localhost:8080/api/images"

async function uploadImage(fileInput)
{
    const formObj = new FormData()
    const file = fileInput.value[0]
    if(!isImage(file.name))
    {
        alert("이미지를 입력해주세요")
        return
    }
    formObj.append("file", file)
    const response = await axios(
        {
            method: 'post',
            url: url,
            data: formObj,
            header: {
                'Content-type': 'multipart/form-data'
            }
        }
    )
    return response.data
}

async function getImageSrc(imageName)
{
    if(imageName == null) return
    const response = await axios.get(url + "/" + imageName, {responseType: "blob"})
    if(response.status === 200)
    {
        const base64data = await blobToData(response.data);
        return base64data
    }
    return null
}

export {uploadImage, getImageSrc}