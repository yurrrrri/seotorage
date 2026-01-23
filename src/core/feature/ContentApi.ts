import type { ContentCdo, ContentUdo } from "@domain/sdo";
import axios from "axios";

const url = (path: string) => "/api/content" + path;

function getContent(id: string) {
    return axios.get(url(`/${id}`));
}

function getContentsByUserBookId(userBookId: string) {
    return axios.get(url(`/user-book/${userBookId}`));
}

function write(cdo: ContentCdo) {
    return axios.post(url("/write"), cdo);
}

function update(udo: ContentUdo) {
    return axios.post(url("/update"), udo);
}

function remove(id: string) {
    return axios.post(url("/"), { id });
}

export default {
    getContent,
    getContentsByUserBookId,
    write,
    update,
    remove,
};
