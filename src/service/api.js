import axios from 'axios';

export const sendValidationCodePost = (name, mail, token) => {
    const targetUrl = "https://script.google.com/macros/s/AKfycbxpx6GgQiGJYGeR0t8jO2NvTqnM02k8sinIHXGWlnqsx3tyYVWNlDBSUqiBdlKG_bAsYg/exec";
    let data = JSON.stringify({name, mail, token});
    return axios.post(targetUrl, data, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then(response => {
        if (response) {
            return response;
        } else {
            return Promise.reject();
        }
    }).catch(error => {
        console.log('error', error);
    });
};
