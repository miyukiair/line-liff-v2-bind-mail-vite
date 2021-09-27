import axios from 'axios';

export const sendValidationCodePost = (name, email, token) => {
    const targetUrl = "https://script.google.com/macros/s/AKfycbxpx6GgQiGJYGeR0t8jO2NvTqnM02k8sinIHXGWlnqsx3tyYVWNlDBSUqiBdlKG_bAsYg/exec";
    let data = {name, email, token};
    const request = axios.create({
        headers: {
            'Content-Type': 'application/x-www-form-encoded'
        }
    })
    return request.post(targetUrl, data)
        .then((response) => {
        if (response) {
            return response;
        } else {
            return Promise.reject();
        }
    })
};
