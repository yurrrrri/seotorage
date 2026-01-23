import axios from "axios";

const url = (path: string) => "/api/user" + path;

function home() {
    return axios.get(url("/"));
}

function getUser() {
    return axios.get(url("/me"));
}

function findByEmail(email: string) {
    return axios.post(url("/find"), { email });
}

function leave() {
    return axios.post(url("/leave"), {});
}

function switchMode() {
    return axios.post(url("/switch-mode"), {});
}

function switchTheme() {
    return axios.post(url("/switch-theme"), {});
}

export default {
    home,
    getUser,
    findByEmail,
    leave,
    switchMode,
    switchTheme,
};
