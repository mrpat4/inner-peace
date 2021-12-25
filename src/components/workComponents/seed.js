import albaDashboard from "images/alba-dashboard.png";
import albaCategory from "images/alba-category.png";
import albaAddCategory from "images/alba-add-category.png";
import albaAddUser from "images/alba-users.png";
import evronexDashboard from "images/evronex-dashboard.png";
import evronexProfile from "images/evronex-profile.png";
import evronexTrading from "images/evronex-trading.png";
import evronexClose from "images/evronex-close-panel.png";
import partnersDashboard from "images/partners-dashboard.png";
import partners from "images/partners.png";
import wingleLogin from "images/wingle-login.png";
import wingleDashboard from "images/wingle-dashboard.png";
import wingleUserDashboard from "images/wingle-user-dashboard.png";
import wingleUserList from "images/wingle-user-list.png";
import wingleUser from "images/wingle-user.png";
export const workData = [
  {
    name: "Evronex Bot",
    description:
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    disabled: false,
    images: [evronexDashboard, evronexProfile, evronexClose, evronexTrading],
    link: "http://178.128.200.244:5001/",
  },
  {
    name: "Partners Panel",
    description:
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    images: [partners, partnersDashboard],
    disabled: true,
    link: "#",
  },
  {
    name: "Wingle Panel",
    description:
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    disabled: true,
    images: [wingleLogin, wingleDashboard, wingleUserDashboard, wingleUser, wingleUserList],
    link: "#",
  },
  {
    name: "Alba Education",
    description:
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
    disabled: true,
    images: [albaDashboard, albaCategory, albaAddCategory, albaAddUser],
    link: "#",
  },
];
