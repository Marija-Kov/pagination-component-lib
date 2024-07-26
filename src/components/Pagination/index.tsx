import { type PaginationProps } from "./types";
import {
  Container,
  Button,
  VisibleButton,
  CurrentPageButton,
  Chevron,
} from "./styles/styled";

const Pagination: React.FC<PaginationProps> = ({
  itemsLimitPerPage,
  totalItemsCount,
  currentPage,
  setCurrentPage,
}) => {
  function pages(totalItemsCount: number, itemsLimitPerPage: number) {
    const pagesCount = Math.ceil(totalItemsCount / itemsLimitPerPage);
    const result = [];
    for (let i = 1; i <= pagesCount; ++i) {
      result.push(i);
    }
    return result;
  }

  function isDisabled() {
    return currentPage * itemsLimitPerPage >= totalItemsCount;
  }

  function styledButton(currentPage: number, aPage: number, pages: number[]) {
    if (currentPage === aPage) {
      if (aPage - 3 > 1 && pages.length - aPage > 1) {
        return (
          <>
            <span>...</span>
            <CurrentPageButton
              aria-label={`go to page ${aPage}`}
              key={Math.random() * 10000}
              onClick={() => setCurrentPage(aPage)}
            >
              {aPage}
            </CurrentPageButton>
            <span>...</span>
          </>
        );
      }
      if (pages.length - aPage > 1 && aPage > 2) {
        return (
          <>
            <CurrentPageButton
              aria-label={`go to page ${aPage}`}
              key={Math.random() * 10000}
              onClick={() => setCurrentPage(aPage)}
            >
              {aPage}
            </CurrentPageButton>
            <span>...</span>
          </>
        );
      }
      if (aPage - 3 > 1) {
        return (
          <>
            <span>...</span>
            <CurrentPageButton
              aria-label={`go to page ${aPage}`}
              key={Math.random() * 10000}
              onClick={() => setCurrentPage(aPage)}
            >
              {aPage}
            </CurrentPageButton>
          </>
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
    if (aPage === 3 && pages.length > 4 && currentPage < 3) {
      return (
        <>
          <VisibleButton
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurrentPage(aPage)}
          >
            {aPage}
          </VisibleButton>
          <span>...</span>
        </>
      );
    }
    if (aPage <= 3 || aPage === pages.length) {
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
    return "";
  }

  return (
    <Container>
      <Button
        aria-label="previous page"
        type="button"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <Chevron>previous</Chevron>
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
        disabled={isDisabled()}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <Chevron>next</Chevron>
      </Button>
    </Container>
  );
};

export default Pagination;
