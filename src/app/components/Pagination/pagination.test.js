import React from 'react';
import { act, create } from 'react-test-renderer';
import { Pagination } from '.';
import rrd, { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { SwitchButton, PageLink, SelectedPageLink } from './styled-components';


describe("Pagination", () => {
    rrd.BrowserRouter = () => <div></div>;
    it("should render arrows and 4 pages", () => {
        const onPageChange = jest.fn();
        let component;
        act(() => {
            component = create(
                <BrowserRouter>
                    <Provider store={store}>
                        <Pagination
                            pagesAmount={4}
                            initPage={1}
                            onPageChange={onPageChange}
                        />
                    </Provider>
                </BrowserRouter>
            );
        })
        expect(component.root.findAllByType(PageLink)).toHaveLength(3);
        expect(component.root.findAllByType(SelectedPageLink)).toHaveLength(1);
        expect(component.root.findAllByType(SwitchButton)).toHaveLength(2);
    });
    it("should change page on the second page click", () => {
        const onPageChange = jest.fn();
        let component;
        act(() => {
            component = create(
                <BrowserRouter>
                    <Provider store={store}>
                        <Pagination
                            pagesAmount={4}
                            initPage={1}
                            onPageChange={onPageChange}
                        />
                    </Provider>
                </BrowserRouter>
            );
        });
        const secondPageLink = component.root.findAllByType(PageLink)[0];
        secondPageLink.props.onClick({target: {dataset: {pageNum: 2}}});
        expect(onPageChange).toHaveBeenCalledTimes(1);
    });
    it("should change page on the right arrow click", () => {
        const onPageChange = jest.fn();
        let component;
        act(() => {
            component = create(
                <BrowserRouter>
                    <Provider store={store}>
                        <Pagination
                            pagesAmount={4}
                            initPage={1}
                            onPageChange={onPageChange}
                        />
                    </Provider>
                </BrowserRouter>
            );
        });
        const nextPageLink = component.root.findAllByType(SwitchButton)[1];
        nextPageLink.props.onClick();
        expect(onPageChange).toHaveBeenCalledTimes(1);
    });

    it("should change page on the left arrow click", () => {
        const onPageChange = jest.fn();
        let component;
        act(() => {
            component = create(
                <BrowserRouter>
                    <Provider store={store}>
                        <Pagination
                            pagesAmount={4}
                            initPage={3}
                            onPageChange={onPageChange}
                        />
                    </Provider>
                </BrowserRouter>
            );
        });
        const prevPageLink = component.root.findAllByType(SwitchButton)[0];
        prevPageLink.props.onClick();
        expect(onPageChange).toHaveBeenCalledTimes(1);
    });
    test("the right arrow should be disabled", () => {
        const onPageChange = jest.fn();
        let component;
        act(() => {
            component = create(
                <BrowserRouter>
                    <Provider store={store}>
                        <Pagination
                            pagesAmount={4}
                            initPage={4}
                            onPageChange={onPageChange}
                        />
                    </Provider>
                </BrowserRouter>
            );
        });
        const nextPageLink = component.root.findAllByType(SwitchButton)[1];
        expect(nextPageLink.props.disabled).toBe(true);
    });
    test("the left arrow should be disabled", () => {
        const onPageChange = jest.fn();
        let component;
        act(() => {
            component = create(
                <BrowserRouter>
                    <Provider store={store}>
                        <Pagination
                            pagesAmount={4}
                            initPage={1}
                            onPageChange={onPageChange}
                        />
                    </Provider>
                </BrowserRouter>
            );
        });
        const prevPageLink = component.root.findAllByType(SwitchButton)[0];
        expect(prevPageLink.props.disabled).toBe(true);
    });
})