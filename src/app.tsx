import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./routes/error-page";
import { RobotStatus } from "./routes/robot-status";
import { SD } from "./routes/sd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root />,
    children: [
      { index: true, element: <RobotStatus /> },
      { path: "sd", element: <SD /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="acrobot-dashboard-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
