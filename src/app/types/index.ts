export type State = {
    loggedUser: User | null,
};

export type User = {
    id: string
    name: string
};

export type Action = {
    type: string,
    body?: any
};