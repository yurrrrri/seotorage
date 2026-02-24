import { createBrowserRouter } from "react-router-dom";
import { BasePage, EditPage, MySeotoragePage, SearchPage, SettingsPage, WritePage } from "../ui/pages";

export const Router = createBrowserRouter(
  [
    {
      path: "*", element: <BasePage />, children: [
        { index: true, element: <SearchPage /> },
        { path: 'my', element: <MySeotoragePage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: 'write/:bookId', element: <WritePage /> },
        { path: 'edit/:contentId', element: <EditPage /> },
      ]
    },
  ]
)