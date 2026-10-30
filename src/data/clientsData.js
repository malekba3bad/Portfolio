import bankBindowalIcon from "../Assets/Clients/bank-bindowal-icon.webp";
import bindowalPayIcon from "../Assets/Clients/bindowal-pay-icon.webp";
import bindowalGroupIcon from "../Assets/Clients/bindowal-group-icon.webp";
import alarabIcon from "../Assets/Clients/alarab-icon.svg";
import arabwareDosIcon from "../Assets/Clients/arabwaredos.webp";
import mrcmedIcon from "../Assets/Clients/mrcmed-icon.webp";
import princelineIcon from "../Assets/Clients/princeline.webp";
import hadhramautShippingIcon from "../Assets/Clients/hadhramaut-shipping-icon.svg";
import bindowalSolarIcon from "../Assets/Clients/bindowal-solar.webp";
import bindowalLogisticsIcon from "../Assets/Clients/bindowal-logistics.webp";
import meohIcon from "../Assets/Clients/meoh.webp";
import sahelClubIcon from "../Assets/Clients/sahel-club.webp";

const clientsData = [
  {
    id: "bank-bindowal",
    icon: bankBindowalIcon,
    projectIds: ["bin-dowal-islamic-bank"],
    ar: { shortName: "بنك بن دول الإسلامي" },
    en: { shortName: "Bin Dowal Bank" },
  },
  {
    id: "bindowal-pay",
    icon: bindowalPayIcon,
    projectIds: ["bin-dowal-pay"],
    ar: { shortName: "بن دول باي" },
    en: { shortName: "Bin Dowal Pay" },
  },
  {
    id: "bindowal-group",
    icon: bindowalGroupIcon,
    projectIds: ["currency-exchange-board"],
    ar: { shortName: "مجموعة بن دول" },
    en: { shortName: "Bin Dowal Group" },
  },
  {
    id: "alarab-exchange",
    icon: alarabIcon,
    projectIds: ["al-arab-exchange"],
    ar: { shortName: "العرب للصرافة" },
    en: { shortName: "Al-Arab Exchange" },
  },
  {
    id: "arabwaredos",
    icon: arabwareDosIcon,
    invertOnDusk: true,
    projectIds: ["arabware-dos"],
    ar: { shortName: "عرب وير دوز" },
    en: { shortName: "ArabWare Dos" },
  },
  {
    id: "mrcmed",
    icon: mrcmedIcon,
    projectIds: ["mukalla-radiotherapy-center"],
    ar: { shortName: "مركز المكلا الإشعاعي" },
    en: { shortName: "MRC Radiotherapy" },
  },
  {
    id: "princeline",
    icon: princelineIcon,
    projectIds: ["prince-line-marine"],
    ar: { shortName: "برنس لاين للملاحة" },
    en: { shortName: "Prince Line" },
  },
  {
    id: "hadhramaut-shipping",
    icon: hadhramautShippingIcon,
    projectIds: ["hadhramaut-shipping"],
    ar: { shortName: "حضرموت للملاحة" },
    en: { shortName: "Hadhramaut Shipping" },
  },
  {
    id: "bindowal-solar",
    icon: bindowalSolarIcon,
    projectIds: ["bin-dowal-renewable-energy"],
    ar: { shortName: "بن دول للطاقة" },
    en: { shortName: "Bin Dowal Solar" },
  },
  {
    id: "bindowal-logistics",
    icon: bindowalLogisticsIcon,
    projectIds: ["bin-dowal-contracting-logistics"],
    ar: { shortName: "بن دول اللوجستية" },
    en: { shortName: "Bin Dowal Logistics" },
  },
  {
    id: "meoh",
    icon: meohIcon,
    projectIds: ["ministry-of-education-portal"],
    ar: { shortName: "مكتب التربية والتعليم" },
    en: { shortName: "Ministry of Education" },
  },
  {
    id: "sahel-club",
    icon: sahelClubIcon,
    projectIds: ["sahel-sports-club"],
    ar: { shortName: "نادي الساحل الرياضي" },
    en: { shortName: "Al-Sahel Club" },
  },
];

export default clientsData;
