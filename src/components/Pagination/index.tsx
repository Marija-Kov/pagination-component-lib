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
  curPage,
  setCurPage,
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
    return curPage * itemsLimitPerPage >= totalItemsCount;
  }

  function styledButton(curPage: number, aPage: number, pages: number[]) {
    if (curPage === aPage) {
      if (aPage - 3 > 1 && pages.length - aPage > 1) {
        return (
          <>
            <span>...</span>
            <CurrentPageButton
              aria-label={`go to page ${aPage}`}
              key={Math.random() * 10000}
              onClick={() => setCurPage(aPage)}
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
              onClick={() => setCurPage(aPage)}
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
              onClick={() => setCurPage(aPage)}
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
          onClick={() => setCurPage(aPage)}
        >
          {aPage}
        </CurrentPageButton>
      );
    }
    if (aPage === 3 && pages.length > 4 && curPage < 3) {
      return (
        <>
          <VisibleButton
            aria-label={`go to page ${aPage}`}
            key={Math.random() * 10000}
            onClick={() => setCurPage(aPage)}
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
          onClick={() => setCurPage(aPage)}
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
        disabled={curPage <= 1}
        onClick={() => setCurPage(curPage - 1)}
      >
        <Chevron>previous</Chevron>
      </Button>
      {pages(totalItemsCount, itemsLimitPerPage).map((aPage) => {
        return styledButton(
          curPage,
          aPage,
          pages(totalItemsCount, itemsLimitPerPage)
        );
      })}
      <Button
        aria-label="next page"
        type="button"
        disabled={isDisabled()}
        onClick={() => setCurPage(curPage + 1)}
      >
        <Chevron>next</Chevron>
      </Button>
    </Container>
  );
};

export default Pagination;
