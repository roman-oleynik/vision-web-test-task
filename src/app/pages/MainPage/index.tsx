import React from 'react';
import { getLocalStorageItem } from 'app/utils/localStorageAPI';
import { Title, Text, Container, NavButton } from './styled-components';

export function MainPage() {
    const isUserLogged: string | null = getLocalStorageItem("isUserLogged");

    const userIsNotLogged: boolean = !isUserLogged || isUserLogged === "false";
    if ( userIsNotLogged ) {
        return (
            <Container>
                <Title>Main page</Title>
                <Text>You aren't logged. Please, login to proceed to work with the website</Text>
                <NavButton to="/login">Login</NavButton>
            </Container>
        );
    }
    return (
        <Container>
            <Title>Main page</Title>
            <Text>Glad to see you, dear user! Propose you to look at books</Text>
            <NavButton to="/books">Watch</NavButton>
        </Container>
    );
}