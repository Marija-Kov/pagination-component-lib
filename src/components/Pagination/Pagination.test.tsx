import "@testing-library/jest-dom";
import Pagination from ".";
import { render } from "@testing-library/react";

describe("Pagination", () => {
 it("renders the correct (number of) pagination buttons", () => {
    const limit = 3;
    const total = 100;
    const { getByText, queryByText } = render(<Pagination itemsLimitPerPage={limit} totalItemsCount={total} />);

    const firstPageBtn = getByText("1");
    const lastPageBtn = getByText("34");
    const prevPageBtn = getByText("previous");
    const nextPageBtn = getByText("next");
    const hiddenPageBtn = queryByText("14");

    expect(firstPageBtn).toBeInTheDocument();
    expect(lastPageBtn).toBeInTheDocument();
    expect(prevPageBtn).toBeInTheDocument();
    expect(nextPageBtn).toBeInTheDocument();
    expect(hiddenPageBtn).toBeNull();

 })
});