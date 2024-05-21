import MyProfile from "./pages/Profile/MyProfile";
import Home from "./pages/Home/Home";
import Poweral from "./pages/Poweral/Poweral";
import Injury from "./pages/Injury/Injury";
import Diet from "./pages/Diet/Diet";
import CoachPanel from "./pages/Coach/CoachPanel";
import About from "./pages/About/About";

const router = [
  {path:"/user-profile" ,element : <MyProfile/>},
  { path: "/", element: <Home /> },
  { path: "/poweral-assets", element: <Poweral /> },
  { path: "/injury-assets", element: <Injury /> },
  { path: "/diet", element: <Diet /> },
  { path: "/coach-panel", element: <CoachPanel /> },
  { path: "/about", element: <About /> },
];


export default router;