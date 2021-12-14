import { Subreddis, Comments, Posts } from "../components";
import AppLayout from "../layouts";

import { useRoutes } from "react-router-dom";

const Pages = () =>
  useRoutes([
    { path: "/", element: <Subreddis /> },
    {
      path: "r/:subredditID",
      element: <Posts />,
      children: [{ path: ":postID", element: <Comments /> }],
    },
  ]);

// [
//   {
//     id: "subreddis",
//     path: "/",
//     component: Subreddis,
//     layout: AppLayout,
//   },
//   {
//     id: "posts",
//     path: "/r/:subredditID",
//     component: Posts,
//     layout: AppLayout,
//   },
//   {
//     id: "comments",
//     path: "/r/:subredditID/:postID",
//     component: Comments,
//     layout: AppLayout,
//   },
// ];

export default Pages;
