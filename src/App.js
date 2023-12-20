import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import HomePage from "./pages/Home";
import ShowPage from "./pages/Shows";
import MoviesPage from "./pages/Movies";
import MyListPage from "./pages/MyList";
import TitlePage from "./pages/Title";
import RootLayout from "./pages/RootLayout";
import NewPage from "./pages/New";
import Lorem from "./pages/Lorem";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <div className="content h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        </div>
      </RootLayout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shows",
        element: <ShowPage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },

      {
        path: "/new",
        element: <NewPage />,
      },
      {
        path: "/my-list",
        element: <MyListPage />,
      },
      {
        path: "/title/:id",
        element: <TitlePage />,
      },
      {
        path: "/lorem",
        element: <Lorem />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
