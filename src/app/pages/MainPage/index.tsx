import { getLocalStorageItem } from 'app/utils/localStorageAPI';
import React from 'react';
import { Title, Text, Container, Button } from './styled-components';

export function MainPage() {
    const isUserLogged: string | null = getLocalStorageItem("isUserLogged");

    if ( !isUserLogged || isUserLogged === "false" ) {
        return <Container>
            <Title>Main page</Title>
            <Text>You aren't logged. Please, login to proceed to work with the website</Text>
            <Button to="/login">Login</Button>
        </Container>
    }
    return (
        <Container>
            <Title>Main page</Title>
            <Text>Glad to see you, dear user!</Text>
        </Container>
    );
}