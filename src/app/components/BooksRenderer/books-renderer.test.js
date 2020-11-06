import React from 'react';
import { create } from 'react-test-renderer';
import { BooksRenderer } from '.';
import rrd, { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { booksModel } from '../../model';
import { BookContainer } from './styled-components';


describe("BooksRenderer", () => {
    rrd.BrowserRouter = () => <div></div>;
    it("should render as many books as needed", () => {
        const component = create(
            <BrowserRouter>
                <Provider store={store}>
                    <BooksRenderer books={booksModel} />
                </Provider>
            </BrowserRouter>
        );
        expect(component.root.findAllByType(BookContainer)).toHaveLength(booksModel.length);
    });
})