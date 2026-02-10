import { createBrowserRouter } from "react-router-dom";
import MainPage from "src/ui/pages/MainPage";

export const Router = createBrowserRouter(
  [
    { index: true, element: <MainPage /> }
  ]
)