import type { PagingType } from "./vo";

export interface UserBook {
    id: string;
    userId: string;
    bookId: string;
    createDate: number;
    modifiedDate: number;
    pagingType: keyof typeof PagingType;
    rate: number;
    memo: string;
}