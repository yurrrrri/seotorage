import MainPage from "../ui/pages/MainPage";
import BasePage from "../ui/pages/BasePage";
import SearchPage from "../ui/pages/SearchPage";
import { createBrowserRouter } from "react-router-dom";
import MySeotoragePage from "../ui/pages/MySeotoragePage";

export const Router = createBrowserRouter(
  [
    {
      path: "*", element: <BasePage />, children: [
        { index: true, element: <MainPage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'my', element: <MySeotoragePage /> }
      ]
    },
  ]
)