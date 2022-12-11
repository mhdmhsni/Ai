import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

// App Route components
import Root from "./routes/Root";
import Board from "./routes/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/board",
    element: <Board />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
