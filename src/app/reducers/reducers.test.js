import { booksReducer, setBooks } from './booksReducer';
import { curPageReducer, setCurPage } from './curPageReducer';
import { pagesAmountReducer, setPagesAmount } from './pagesAmountReducer';


describe("reducers", () => {
    describe("booksReducer", () => {
        const state = {
            books: [],
            curPage: 1,
            pagesAmount: 1,
        };
        it("should change books with the setBooks() action creator", () => {
            const result = booksReducer(state.books, setBooks([{id: "1", title: "Some title", author: "John Doe"}]));
            expect(result).toEqual([{id: "1", title: "Some title", author: "John Doe"}]);
        });
        it("shouldn't change books with the other action creator", () => {
            const result = booksReducer(state.books, setCurPage(1));
            expect(result).toEqual([]);
        });
    });
    describe("curPageReducer", () => {
        const state = {
            books: [],
            curPage: 1,
            pagesAmount: 1,
        };
        it("should change curPage with the setCurPage() action creator", () => {
            const result = curPageReducer(state.curPage, setCurPage(2));
            expect(result).toEqual(2);
        });
        it("shouldn't change curPage with the other action creator", () => {
            const result = curPageReducer(state.curPage, setPagesAmount(5));
            expect(result).toEqual(state.curPage);
        });
    });
    describe("pagesAmountReducer", () => {
        const state = {
            books: [],
            curPage: 1,
            pagesAmount: 1,
        };
        it("should change pagesAmount with the setPagesAmount() action creator", () => {
            const result = pagesAmountReducer(state.pagesAmount, setPagesAmount(2));
            expect(result).toEqual(2);
        });
        it("shouldn't change pagesAmount with the other action creator", () => {
            const result = pagesAmountReducer(state.pagesAmount, setCurPage(3));
            expect(result).toEqual(state.pagesAmount);
        });
    });
});