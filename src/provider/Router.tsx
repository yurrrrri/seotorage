import BasePage from "../ui/pages/BasePage";
import SearchPage from "../ui/pages/SearchPage";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter(
  [
    {
      path: "*", element: <BasePage />, children: [
        { path: 'search', element: <SearchPage /> },
        { path: 'my', element: <SearchPage /> }
      ]
    },
  ]
)