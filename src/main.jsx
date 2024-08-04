import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { rootLoader } from "./routes/root";
import { projectLoader } from "./routes/project";
import { projectsLoader } from "./routes/projects";
import SpinnerScreen from "./components/design-system/SpinnerScreen";

const ProjectsPage = lazy(() => import("./routes/projects"));
const ProjectDetailPage = lazy(() => import("./routes/project"));

const router = createHashRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<SpinnerScreen />}>
            <ProjectsPage />
          </Suspense>
        ),
        loader: projectsLoader,
      },
      {
        path: "project/:id",
        element: (
          <Suspense fallback={<SpinnerScreen />}>
            <ProjectDetailPage />
          </Suspense>
        ),
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
