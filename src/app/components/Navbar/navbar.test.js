import React from 'react';
import { create } from 'react-test-renderer';
import { Navbar } from '.';
import rrd, { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { LinksContainer, Nav, Title, Link } from './styled-components';


describe("Navbar", () => {
    rrd.BrowserRouter = () => <div></div>;
    it("should match snapshot", () => {
        const component = create(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
    test("The Home link navigates to '/'", () => {
        const component = create(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        const homeLink = component.root.findAllByType(Link)[0];
        expect(homeLink.props.to).toBe("/");
    });
    test("The Books link navigates to '/books'", () => {
        const component = create(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        const booksLink = component.root.findAllByType(Link)[1];
        expect(booksLink.props.to).toBe("/books");
    });
    test("The Profile link navigates to '/profile'", () => {
        const component = create(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        const profileLink = component.root.findAllByType(Link)[2];
        expect(profileLink.props.to).toBe("/profile");
    });
})