import { Book } from 'app/types';
import React from 'react';
import { Container, BookContainer, BookTitle, BookAuthor } from './styled-components';

type Props = {
  books: Book[],
};

export function BooksRenderer({ books }: Props) {
  return (
    <Container>
      {
        books
        .map((el: Book) => {
          return (
            <BookContainer key={el.id}>
              <BookTitle>{el.title}</BookTitle>
              <BookAuthor>{el.author}</BookAuthor>
            </BookContainer>
          );
        })
      }
    </Container>
  );
}