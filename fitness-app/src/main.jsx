import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import CreateSheetPage from "./pages/CreateSheetPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MySheetsPage from "./pages/MySheetsPage";
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
