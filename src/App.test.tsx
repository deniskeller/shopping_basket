import { act } from "@testing-library/react";
import ReactDOM from "react-dom";
import MainApp from "./App";

test("<MainApp/>", () => {
  act(() => {
    const div = document.createElement("div");
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
