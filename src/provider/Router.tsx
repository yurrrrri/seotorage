import { createBrowserRouter } from "react-router-dom";
import { BasePage, MainPage, MySeotoragePage, SearchPage, SettingsPage, WritePage } from "../ui/pages";

export const Router = createBrowserRouter(
  [
    {
      path: "*", element: <BasePage />, children: [
        { index: true, element: <MainPage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'my', element: <MySeotoragePage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: 'write/:bookId', element: <WritePage /> }
      ]
    },
  ]
)