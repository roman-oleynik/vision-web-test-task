import React, { useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from 'app/utils/localStorageAPI';
import { Redirect } from 'react-router-dom';
import { Container, Title, Text, Button } from './styled-components';

export function ProfilePage() {
    const infoOfUserLogging: string | null = getLocalStorageItem("isUserLogged");

    const [ isUserLogged, setIsUserLogged ] = useState<boolean>(
        (!infoOfUserLogging || infoOfUserLogging === "false") ? false : true
    );

    const logUserOut = () => {
        setLocalStorageItem("isUserLogged", false);
        setIsUserLogged(false);
    };

    if ( !infoOfUserLogging || infoOfUserLogging === "false" || !isUserLogged ) {
        return <Redirect to="/login" />;
    }
    return (
        <Container>
            <Title>Welcome, Admin!</Title>
            <Text>Glad to see you again!</Text>
            <Button onClick={logUserOut}>Log out</Button>
        </Container>
    );
}