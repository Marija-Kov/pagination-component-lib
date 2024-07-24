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
    curPage: {
      description: "Current page",
      control: {
        type: "number",
      },
    },
    setCurPage: {
      description: "Current page state updater",
      control: {
        type: "function",
      },
    },
  },
};

export const ManyPages = {
  args: {
    itemsLimitPerPage: 3,
    totalItemsCount: 100,
    curPage: 2,
    setCurPage: () => {}
  },
};

export const DisabledChevrons = {
  args: {
    itemsLimitPerPage: 3,
    totalItemsCount: 1,
    curPage: 1,
    setCurPage: () => {}
  },
};
