import { Subreddis, Comments, Posts } from "./components";
import AppLayout from "./layouts";

import { useRoutes } from "react-router-dom";

function App() {
  const pages = useRoutes([
    {
      path: "/",
      element: (
        <AppLayout>
          <Subreddis />
        </AppLayout>
      ),
    },
    {
      path: "r/:subredditID",
      element: (
        <AppLayout>
          <Posts />
        </AppLayout>
      ),
    },
    {
      path: "r/:subredditID/:postID/comments",
      element: (
        <AppLayout>
          <Comments />
        </AppLayout>
      ),
    },
  ]);
  return pages;
}

export default App;
