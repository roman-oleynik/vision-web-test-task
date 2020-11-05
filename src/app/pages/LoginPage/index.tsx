import React, { useRef, useState } from 'react';
import { Container, Title, Form, Input, Label, Button, ErrorText } from './styled-components';
import { generateId } from 'app/utils/generateId';
import { User } from '../../types';
import { Redirect } from 'react-router-dom';
import { getLocalStorageItem, setLocalStorageItem } from 'app/utils/localStorageAPI';


export function LoginPage() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [ isUsernameValid, setIsUsernameValid ] = useState<boolean>(true);
    const [ isPasswordValid, setIsPasswordValid ] = useState<boolean>(true);

    const infoOfUserLogging: string | null = getLocalStorageItem("isUserLogged");

    const [ isUserLogged, setIsUserLogged ] = useState<boolean>(
        (!infoOfUserLogging || infoOfUserLogging === "false") ? false : true
    );

    const validateFormData = (username: string, password: string): boolean => {
        if ( username !== "admin" ) {
            setIsUsernameValid(false);
            setIsPasswordValid(true);
            return false;
        }
        if ( password !== "password" ) {
            setIsUsernameValid(true);
            setIsPasswordValid(false);
            return false;
        }
        setIsUsernameValid(true);
        setIsPasswordValid(true);
        return true;
    };

    const logUserIn = (user: User) => {
        setLocalStorageItem("isUserLogged", true);
        setIsUserLogged(true);
    };

    const handleFormSubmit = (EO: React.FormEvent<HTMLFormElement>) => {
        EO.preventDefault();

        const username: string | undefined = usernameRef.current?.value;
        const password: string | undefined = passwordRef.current?.value;

        const isValid = validateFormData(username as string, password as string);
        if ( !isValid ) {
            return;
        }
        logUserIn({
            id: generateId(),
            name: username as string
        });
    };

    if ( isUserLogged ) {
        return <Redirect to="/profile" />;
    }
    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleFormSubmit}>
                <Label>
                    Username:
                    <Input
                        type="text"
                        ref={usernameRef}
                        required
                    />
                </Label>
                <ErrorText>{isUsernameValid ? "" : "User doesn't exist"}</ErrorText>
                <Label>
                    Password:
                    <Input
                        type="password"
                        ref={passwordRef}
                        required
                    />
                </Label>
                <ErrorText>{isPasswordValid ? "" : "Incorrect password"}</ErrorText>

                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
}