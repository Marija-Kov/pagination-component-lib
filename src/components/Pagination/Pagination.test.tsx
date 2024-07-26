import "@testing-library/jest-dom";
import Pagination from ".";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import React, { useState } from "react";

describe("Pagination", () => {
  it("renders the correct (number of) pagination buttons", () => {
    const limit = 3;
    const total = 100;
    const mockCurPage = 1;
    const setMockCurPage: React.Dispatch<
      React.SetStateAction<number>
    > = () => {};
    const { getByText, queryByText, getByLabelText } = render(
      <Pagination
        itemsLimitPerPage={limit}
        totalItemsCount={total}
        curPage={mockCurPage}
        setCurPage={setMockCurPage}
      />
    );

    const firstPageBtn = getByText("1");
    const lastPageBtn = getByText("34");
    const prevPageBtn = getByLabelText("previous page");
    const nextPageBtn = getByLabelText("next page");
    const hiddenPageBtn = queryByText("14");
    const ellipsis = getByText("...");

    expect(firstPageBtn).toBeInTheDocument();
    expect(firstPageBtn).toHaveStyle("background: black; color: white");
    expect(lastPageBtn).toBeInTheDocument();
    expect(prevPageBtn).toBeInTheDocument();
    expect(prevPageBtn).toHaveAttribute("disabled");
    expect(nextPageBtn).toBeInTheDocument();
    expect(hiddenPageBtn).toBeNull();
    expect(ellipsis).toBeInTheDocument();
  });

  it("navigates to the next page when 'next' button is clicked", async () => {
    user.setup();
    const MockParentComponent = () => {
      const [mockCurPage, setMockCurPage] = useState(1);
      const limit = 3;
      const total = 100;
      return (
        <div className="mock-parent">
          <Pagination
            itemsLimitPerPage={limit}
            totalItemsCount={total}
            curPage={mockCurPage}
            setCurPage={setMockCurPage}
          />
        </div>
      );
    };
    const { getByText, getByLabelText } = render(<MockParentComponent />);

    const nextPageBtn = getByLabelText("next page");
    await user.click(nextPageBtn);
    const secondPageBtn = getByText("2");
    const prevPageBtn = getByLabelText("previous page");
    expect(secondPageBtn).toHaveStyle("background: black; color: white;");
    expect(prevPageBtn).not.toHaveAttribute("disabled");
  });

  it("navigates to the previous page when 'previous' button is clicked", async () => {
    user.setup();
    const MockParentComponent = () => {
      const [mockCurPage, setMockCurPage] = useState(3);
      const limit = 3;
      const total = 100;
      return (
        <div className="mock-parent">
          <Pagination
            itemsLimitPerPage={limit}
            totalItemsCount={total}
            curPage={mockCurPage}
            setCurPage={setMockCurPage}
          />
        </div>
      );
    };
    const { getByText, getByLabelText } = render(<MockParentComponent />);

    const prevPageBtn = getByLabelText("previous page");
    await user.click(prevPageBtn);
    const pageLesserByOne = getByText("2");
    expect(pageLesserByOne).toHaveStyle("background: black; color: white;");
  });

  it("navigates to page N when button N is clicked", async () => {
    user.setup();
    const MockParentComponent = () => {
      const [mockCurPage, setMockCurPage] = useState(1);
      const limit = 3;
      const total = 100;
      return (
        <div className="mock-parent">
          <Pagination
            itemsLimitPerPage={limit}
            totalItemsCount={total}
            curPage={mockCurPage}
            setCurPage={setMockCurPage}
          />
        </div>
      );
    };
    const { getByText } = render(<MockParentComponent />);

    const targetBtn = getByText("3");
    user.click(targetBtn);
    expect(targetBtn).toHaveStyle("background: black; color: white;");
  });

  it("surrounds current page button with ellipsis", async () => {
    user.setup();
    const MockParentComponent = () => {
      const [mockCurPage, setMockCurPage] = useState(1);
      const limit = 3;
      const total = 100;
      return (
        <div className="mock-parent">
          <Pagination
            itemsLimitPerPage={limit}
            totalItemsCount={total}
            curPage={mockCurPage}
            setCurPage={setMockCurPage}
          />
        </div>
      );
    };
    const { findByText, findAllByText, getByLabelText } = render(
      <MockParentComponent />
    );

    const targetPageNumber = 7;
    const nextPageBtn = getByLabelText("next page");
    for (let i = 1; i < targetPageNumber; ++i) {
      await user.click(nextPageBtn);
    }
    const currentPageBtn = await findByText(`${targetPageNumber}`);
    const ellipsis = await findAllByText("...");
    expect(currentPageBtn).toHaveStyle("background: black; color: white;");
    expect(ellipsis).toHaveLength(2);
    // How to test if the ellipsis are in the right place?
  });
});
