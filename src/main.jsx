import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootLoader } from "./routes/root";
import { projectLoader } from "./routes/project";
import { projectsLoader, ProjectsPage } from "./routes/projects";
import ProjectDetailPage from "./routes/project";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProjectsPage />,
        loader: projectsLoader,
      },
      {
        path: "project/:id",
        element: <ProjectDetailPage />,
        loader: projectLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
