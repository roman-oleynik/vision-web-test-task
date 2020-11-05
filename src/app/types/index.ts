export type State = {
    loggedUser: User | null,
};

export type User = {
    id: string
};

export type Action = {
    type: string,
    body?: any
};