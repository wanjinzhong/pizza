import Home from "./components/Home";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import OrderingGuide from "./components/about/OrderingGuide";
import Contact from "./components/about/Contact";
import History from "./components/about/History";
import Delivery from "./components/about/Delivery";
import About from "./components/about/About";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import PersonName from "./components/about/contact/PersonName";
import Phone from "./components/about/contact/Phone";

export const routes = [
  {
    path: "/", components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }, name: "homeLink"
  },
  {path: "/menu", component: Menu, name: "menuLink"},
  {path: "/admin", component: Admin, name: "adminLink"},
  {
    path: "/about", component: About, name: "aboutLink", redirect: "/about/contact", children: [
      {
        path: "/about/contact", name: "contactLink", redirect: "/personname", component: Contact, children: [
          {path: "/phone", name: "phoneNumber", component: Phone},
          {path: "/personname", name: "personName", component: PersonName},
        ]
      },
      {path: "/history", name: "historyLink", component: History},
      {path: "/orderingGuide", name: "orderingGuideLink", component: OrderingGuide},
      {path: "/delivery", name: "deliveryLink", component: Delivery},
    ]
  },
  {path: "/login", component: Login, name: "loginLink"},
  {path: "/register", component: Register, name: "registerLink"},
  {path: "*", component: NotFound},
];
