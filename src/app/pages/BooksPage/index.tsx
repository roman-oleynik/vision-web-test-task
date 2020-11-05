import { getLocalStorageItem } from 'app/utils/localStorageAPI';
import React from 'react';
import { Redirect } from 'react-router-dom';

export function BooksPage() {
    const isUserLogged: string | null = getLocalStorageItem("isUserLogged");

    if ( !isUserLogged || isUserLogged === "false" ) {
        return <Redirect to="/login" />;
    }
    return <h1>Books Page</h1>
}