import React, { useEffect, useState } from 'react';
import { Container, SwitchButton, PageLink, SelectedPageLink } from './styled-components';
import { PageChangeEvent } from '../../types';

type Props = {
  pagesAmount: number,
	initPage: number,
  onPageChange: (page: PageChangeEvent) => void,
};



export function Pagination({ onPageChange, pagesAmount, initPage }: Props) {
  const [ page, setPage ] = useState<number>(initPage);
  const [ pageLinks, setPageLinks ] = useState<JSX.Element[]>([]);

  const goLeft = () => {
    setPage(page - 1);
    onPageChange({ curPage: page - 1 });
  };
  const goRight = () => {
    setPage(page + 1);
    onPageChange({ curPage: page + 1 });
  };
  const goToPage = (EO: React.SyntheticEvent<HTMLButtonElement>) => {
    const pageNum = (EO.target as HTMLButtonElement).dataset.pageNum;
    setPage(Number(pageNum as string));
    onPageChange({ curPage: Number(pageNum as string) });
  };

  const buildPages = () => {
    let links: JSX.Element[] = [];
    for (let i = 0; i < pagesAmount; i++) {
      if ( i + 1 === page ) {
        links.push(
          <SelectedPageLink
            key={i + 1}
          >{i + 1}</SelectedPageLink>
        );
      } else {
        links.push(
          <PageLink
            key={i + 1}
            data-page-num={i + 1}
            onClick={goToPage}
          >{i + 1}</PageLink>
        );
      }
    }
    setPageLinks(links);
  }

  useEffect(() => {
    buildPages();
  }, [pagesAmount, page]);

  return (
    <Container aria-label="Page navigation">
      <SwitchButton
        onClick={goLeft}
        disabled={page <= 1}
      >{"<"}</SwitchButton>
      {
        pageLinks
      }
      <SwitchButton
        onClick={goRight}
        disabled={page >= pagesAmount}
      >{">"}</SwitchButton>
    </Container>
  );
}


export default Pagination;