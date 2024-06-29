import { type PaginationProps } from "./types";
import {
  Container,
  Button,
  VisibleButtonDotsLeft,
  VisibleButtonDotsRight,
  VisibleButton,
  CurrentPageButton,
  CurrentPageButtonDotsAround,
  CurrentPageButtonDotsLeft,
  CurrentPageButtonDotsRight,
  ButtonContent,
} from "./styles/styled";

import { useState } from "react";

const Pagination: React.FC<PaginationProps> = ({
  itemsLimitPerPage,
  totalItemsCount,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = (totalItemsCount: number, itemsLimitPerPage: number) => {
    const pagesCount = Math.ceil(totalItemsCount / itemsLimitPerPage);
    const result = [];
    for (let i = 1; i <= pagesCount; ++i) {
      result.push(i);
    }
    return result;
  };

  const btnIsDisabled = () => {
    return (currentPage + 1) * itemsLimitPerPage >= totalItemsCount;
  };

  function styledButton(currentPage: number, aPage: number, pages: number[]) {
    if (currentPage + 1 === aPage) {
      if (aPage - 3 > 1 && pages.length - aPage > 1) {
        return (
          <CurrentPageButtonDotsAround
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </CurrentPageButtonDotsAround>
        );
      }
      if (pages.length - aPage > 1 && aPage > 2) {
        return (
          <CurrentPageButtonDotsRight
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </CurrentPageButtonDotsRight>
        );
      }
      if (aPage - 3 > 1) {
        return (
          <CurrentPageButtonDotsLeft
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </CurrentPageButtonDotsLeft>
        );
      }
      return (
        <CurrentPageButton
          aria-label={`go to page ${aPage}`}
          key={Math.random() * 10000}
          onClick={() => setCurrentPage(aPage)}
        >
          {aPage}
        </CurrentPageButton>
      );
    }
    if (currentPage + 1 !== aPage) {
      if (aPage > 3 && aPage !== pages.length)
        return "";
      if (aPage === pages.length && aPage < pages.length - 1) {
        return (
          <VisibleButtonDotsLeft
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </VisibleButtonDotsLeft>
        );
      }
      if (aPage === 3 && pages.length > 4 && currentPage + 1 < 3) {
        return (
          <VisibleButtonDotsRight
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </VisibleButtonDotsRight>
        );
      }
      if (aPage <= 3 || aPage === pages.length)
        return (
          <VisibleButton
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </VisibleButton>
        );
    }
    return;
  }

  return (
    <Container>
      <Button
        aria-label="previous page"
        type="button"
        disabled={currentPage <= 0}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <ButtonContent>chevron_left</ButtonContent>
      </Button>
      {pages(totalItemsCount, itemsLimitPerPage).map((aPage) => {
        return styledButton(
          currentPage,
          aPage,
          pages(totalItemsCount, itemsLimitPerPage)
        );
      })}
      <Button
        aria-label="next page"
        type="button"
        disabled={btnIsDisabled()}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <ButtonContent>chevron_right</ButtonContent>
      </Button>
    </Container>
  );
};

export default Pagination;
