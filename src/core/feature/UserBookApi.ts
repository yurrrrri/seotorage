import axios from "axios";

const url = (path: string) => "/api/user-book" + path;

function getUserBook(id: string) {
    return axios.get(url(`/${id}`));
}

function getUserBooks() {
    return axios.get(url("/user"));
}

function remove(id: string) {
    return axios.post(url("/"), { id });
}

export default {
    getUserBook,
    getUserBooks,
    remove,
};
