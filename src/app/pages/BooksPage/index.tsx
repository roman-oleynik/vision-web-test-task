import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { getLocalStorageItem } from 'app/utils/localStorageAPI';
import { Redirect } from 'react-router-dom';
import { Container, Title, Text } from './styled-components';
import { booksModel } from '../../model';
import { Book, PageChangeEvent, State } from 'app/types';
import { BooksRenderer } from '../../components/BooksRenderer';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../reducers/booksReducer';
import { setCurPage } from '../../reducers/curPageReducer';
import { setPagesAmount } from '../../reducers/pagesAmountReducer';

export function BooksPage() {
    const dispatch = useDispatch();
    const isUserLogged: string | null = getLocalStorageItem("isUserLogged");

    const [ areBooksLoading, setAreBooksLoading ] = useState<boolean>(true);

    const pagesAmount = useSelector((state: State) => state.pagesAmount);
    const curPage = useSelector((state: State) => state.curPage);
    const books = useSelector((state: State) => state.books);
    const booksOnPage = 5;

    const countPagesAmount = (booksAmount: number, booksOnPage: number): number => {
        return Math.ceil(booksAmount / booksOnPage);
    };
    const fetchBooks = () => {
        setTimeout(() => {
            dispatch(setBooks(booksModel));
            setAreBooksLoading(false);
        }, 1000);
    };
    const userIsNotLogged: boolean = !isUserLogged || isUserLogged === "false";
    useEffect(() => {
        if ( userIsNotLogged ) {
            return;
        }
        fetchBooks();
        if ( books.length ) {
            dispatch(setPagesAmount(countPagesAmount(books.length, booksOnPage)));
        }
    }, [books]);

    const getBooksForCurPage = (books: Book[], curPage: number, booksOnPage: number): Book[] => {
        return books.slice((curPage - 1) * booksOnPage, booksOnPage + (curPage - 1) * booksOnPage)
    };
    const handlePageChange = (EO: PageChangeEvent) => {
        dispatch(setCurPage(EO.curPage));
    };

    if ( userIsNotLogged ) {
        return <Redirect to="/login" />;
    }
    if ( areBooksLoading ) {
        return <Container>
            <Text>Loading...</Text>
        </Container>
    }
    return (
        <Container>
            <Title>The best books by The Guardian version</Title>
            <Pagination
                pagesAmount={pagesAmount}
                initPage={1}
                onPageChange={handlePageChange}
            />
            <BooksRenderer
                books={getBooksForCurPage(books, curPage, booksOnPage)}
            />
        </Container>

    );
}