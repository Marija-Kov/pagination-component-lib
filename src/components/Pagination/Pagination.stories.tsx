import React, { useState } from "react";
import Pagination from ".";

interface PaginationParentProps {
  itemsLimitPerPage: number;
  totalItemsCount: number;
}

const PaginationParent: React.FC<PaginationParentProps> = ({
  itemsLimitPerPage,
  totalItemsCount,
}) => {
  const [mockCurPage, setMockCurPage] = useState(1);
  return (
    <div className="mock-parent">
      <Pagination
        itemsLimitPerPage={itemsLimitPerPage}
        totalItemsCount={totalItemsCount}
        curPage={mockCurPage}
        setCurPage={setMockCurPage}
      />
    </div>
  );
};

export default {
  title: "Components/Pagination",
  component: PaginationParent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    itemsLimitPerPage: {
      description: "Max number of items displayed on a page",
      control: {
        type: "number",
      },
    },
    totalItemsCount: {
      description: "Total number of items",
      control: {
        type: "number",
      },
    },
  },
};

export const ManyPages = {
  args: {
    itemsLimitPerPage: 3,
    totalItemsCount: 100,
  },
};

export const DisabledChevrons = {
  args: {
    itemsLimitPerPage: 3,
    totalItemsCount: 1,
  },
};
