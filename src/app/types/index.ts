export type State = {
    books: Book[],
    pagesAmount: number,
    curPage: number,
};

export type User = {
    id: string
    name: string
};

export type Action = {
    type: string,
    body?: any
};

export type Book = {
    id: string,
    title: string,
    author: string
};

export type PageChangeEvent = {
    curPage: number
};