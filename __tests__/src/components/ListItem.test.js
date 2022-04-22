import React from "react";
import { render, cleanup } from "@testing-library/react-native";
import ListItem from "../../../src/components/ListItem";

describe("ListItem Component", () => {
  let component;
  const mockItem = { id: "a", name: "Batman" };

  beforeEach(() => {
    component = render(<ListItem item={mockItem} />);
  });

  afterEach(cleanup);

  it("renders correctly", () => {
    const { getByText, toJSON } = component;
    expect(toJSON()).toMatchSnapshot();
    expect(getByText("Batman")).toBeTruthy();
  });
});
