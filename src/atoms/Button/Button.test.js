/* eslint node/no-unpublished-import: 0 */

import React from "react";
import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import Button from "./Button";

describe("Button tests", () => {
  const mockedOnClick = jest.fn();

  it("should render component", () => {
    expect(() => render(<Button />)).not.toThrow();
  });

  it("should call onClick after button click", async () => {
    const { getByText } = render(
      <Button onClick={mockedOnClick}>Button</Button>,
    );
    const button = getByText("Button");

    await fireEvent.click(button);
    expect(mockedOnClick).toHaveBeenCalled();
  });
});
