import Pagination from ".";

export default {
  title: "Components/Pagination",
  component: Pagination,
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

export const PaginationOne = {
  args: {
    itemsLimitPerPage: 3,
    totalItemsCount: 100,
  },
};
