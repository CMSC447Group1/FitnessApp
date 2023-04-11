import React from "react";
import ReactDOM from "react-dom/client";

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { element } from "prop-types";
import MySheetsPage from "./pages/MySheetsPage";
import CreateSheetPage from "./pages/CreateSheetPage";
import WorkoutPage from "./pages/WorkoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sheets",
    element: <MySheetsPage />,
  },
  {
    path: "/createWorkoutSheet",
    element: <CreateSheetPage />,
  },
  {
    path: "/myWorkout",
    element: <WorkoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
  // </BrowserRouter>
);
