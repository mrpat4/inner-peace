import albaDashboard from "images/alba-dashboard.png";
import albaCategory from "images/alba-category.png";
import albaAddCategory from "images/alba-add-category.png";
import albaAddUser from "images/alba-users.png";
import evronexDashboard from "images/evronex-dashboard.png";
import evronexProfile from "images/evronex-profile.png";
import evronexTrading from "images/evronex-trading.png";
import evronexClose from "images/evronex-close-panel.png";
import arash1 from "images/arash1.png";
import arash2 from "images/arash2.png";
import arash3 from "images/arash3.png";
import arash4 from "images/arash4.png";
import wingleLogin from "images/wingle-login.png";
import wingleDashboard from "images/wingle-dashboard.png";
import wingleUserDashboard from "images/wingle-user-dashboard.png";
import wingleUserList from "images/wingle-user-list.png";
import wingleUser from "images/wingle-user.png";
export const workData = [
  {
    name: "evronex bot",
    description:
      "Evronex Bot is a trading robot,i done the front coding using html css bootstrap and javaScript,its live and you can go to its website and start using it, the functionality is written in python,that one of my college done it . . .",
    disabled: false,
    images: [evronexDashboard, evronexProfile, evronexClose, evronexTrading],
    link: "http://178.128.200.244:5001/",
  },
  {
    name: "arash payam",
    description:
      "This is a website for a photographer,he is my brother actually,i wrote this one about 3 years ago,wrote it using html,css,js and heavily gsap animation library",
    images: [arash1, arash2, arash3, arash4],
    disabled: false,
    link: "https://arash-payam.ir/",
  },
  {
    name: "wingle panel",
    description:
      "This is a panel for wingle application(a social media app),we use react,redux,saga,yup for validations,axios for fetching data,a custom table component,react-hook-form for forms,this panel is so big and detailed,i wish you could use it but its for a customer and i can't link it here,sorry !",
    disabled: true,
    images: [wingleLogin, wingleDashboard, wingleUserDashboard, wingleUser, wingleUserList],
    link: "#",
  },
  {
    name: "alba education",
    description:
      "alba education is a panel for an educational app,they use it for adding data to its application,i use react,redux,saga,axios,yup,react-hook-form for this panel,its functional and the owner use it daily,sorry,it's a panel and i can't give you the link,but you can check the photos .",
    disabled: true,
    images: [albaDashboard, albaCategory, albaAddCategory, albaAddUser],
    link: "#",
  },
];
