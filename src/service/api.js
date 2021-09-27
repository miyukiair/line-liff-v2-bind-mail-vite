import axios from 'axios';

export const sendValidationCodePost = (name, email, token) => {
    const targetUrl = "https://script.google.com/macros/s/AKfycbxpx6GgQiGJYGeR0t8jO2NvTqnM02k8sinIHXGWlnqsx3tyYVWNlDBSUqiBdlKG_bAsYg/exec";
    let data = {name, email, token};
    return axios.post(targetUrl, data, {
        crossDomain: true
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

export const testGet = () => {
    const targetUrl = "https://script.google.com/macros/s/AKfycbxpx6GgQiGJYGeR0t8jO2NvTqnM02k8sinIHXGWlnqsx3tyYVWNlDBSUqiBdlKG_bAsYg/exec";
    return axios.get(targetUrl, {
        crossDomain: true
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log('error', error);
    })
};
