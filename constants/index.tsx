import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const TopbarConstants = [
  {
    id: 1,
    icon: <BsFacebook />,
    href: "https://www.facebook.com/profile.php?id=100063696184008",
  },
  {
    id: 2,
    icon: <BiLogoTiktok />,
    href: "https://www.tiktok.com/@300aragvelii",
  },
  {
    id: 3,
    icon: <BsDiscord />,
    href: "https://discord.gg/EqjNYGqH",
  },
  {
    id: 4,
    icon: <BsYoutube />,
    href: "https://discord.gg/EqjNYGqH",
  },
  {
    id: 5,
    icon: <BsTwitter />,
    href: "https://discord.gg/EqjNYGqH",
  },
];

export const Navbarconstants = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "News",
    href: "/news",
  },
  {
    id: 3,
    title: "Shop",
    href: "/shop",
  },
  {
    id: 4,
    title: "Roster",
    href: "/roster",
  },
  {
    id: 5,
    title: "Results",
    href: "/results",
  },
];

export const RosterConstants = [
  {
    id: 1,
    fullName: "გიგა აბდუშელიშვილი",
    imgUrl: "/assets/gigs.jpg",
    pubgUsername: "argGGS1007",
    pubgId: "5507397507",
    details: {
      match: "",
      kills: 0,
      damage: "",
      survivalTime: "",
    },
  },
  {
    id: 2,
    fullName: "გიორგი ილარიანი",
    imgUrl: "/assets/ripper.jpg",
    pubgUsername: "argRipper",
    pubgId: "5626814320",
    details: {
      match: "",
      kills: 0,
      damage: "",
      survivalTime: "",
    },
  },
  {
    id: 3,
    fullName: "დათა ბრაგვაძე",
    imgUrl: "/assets/bragva.jpg",
    pubgUsername: "argBragvaa99",
    pubgId: "51233142365",
    details: {
      match: "",
      kills: 0,
      damage: "",
      survivalTime: "",
    },
  },
  {
    id: 4,
    fullName: "გიორგი წაქაძე",
    imgUrl: "/assets/sky.jpg",
    pubgUsername: "arg S K Y",
    pubgId: "5335305576",
    details: {
      match: "",
      kills: 0,
      damage: "",
      survivalTime: "",
    },
  },
  {
    id: 5,
    fullName: "ვახო მეგრელიანი",
    imgUrl: "/assets/xushti.jpg",
    pubgUsername: "argXUSHTIb7",
    pubgId: "5133407197",
    details: {
      match: "",
      kills: 0,
      damage: "",
      survivalTime: "",
    },
  },
];

export const shoppingItemsCategory = [
  "laptops",
  "headsets",
  "chairs",
  "videocards",
  "others",
  "smartphones",
  "mice",
  "monitors",
  "keyboards",
  "pads",
];
