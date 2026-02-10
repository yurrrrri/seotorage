import { createBrowserRouter } from "react-router-dom";
import MainPage from "@ui/pages/MainPage";

export const Router = createBrowserRouter(
  [
    { index: true, element: <MainPage /> }
  ]
)