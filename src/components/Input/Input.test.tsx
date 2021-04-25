// @ts-nocheck
import Input from "./Input";
import { render, fireEvent } from "@testing-library/react";

describe("<Input/>", () => {
  const { getByTestId } = render(<Input />);
  const input = getByTestId("input");

  it("input render check", () => {
    expect(input).toBeTruthy();
  });

  it("change in input check", () => {
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});
