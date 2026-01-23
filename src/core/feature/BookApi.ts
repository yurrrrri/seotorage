import type { BookSearchQdo } from "@domain/sdo";
import axios from "axios";

function searchBooks(qdo: BookSearchQdo) {
    return axios.post("api/book/search", qdo);
}

export default {
    searchBooks,
};
