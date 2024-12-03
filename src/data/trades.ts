import aviationImg from "../assets/images/Aviation.jpg";
import constructionImg from "../assets/images/Construction.jpg";
import firefightingImg from "../assets/images/Firefighting.jpg";
import plumbingImg from "../assets/images/Plumbing.jpg";
import solarImg from "../assets/images/Solar.jpg";
import weldingImg from "../assets/images/Welding.jpg";

import { Trade } from "../types/Trade";

export const trades: Trade[] = [
  {
    image: aviationImg,
    title: "Aviation",
    description: "Sample Text describing profession.",
    onClick: () => alert("Explore Aviation!"),
  },
  {
    image: constructionImg,
    title: "Construction",
    description: "Sample text describing profession.",
    onClick: () => alert("Explore Construction!"),
  },
  {
    image: firefightingImg,
    title: "Fire Fighter",
    description: "Sample text describing profession.",
    onClick: () => alert("Explore Fire Fighting!"),
  },
  {
    image: plumbingImg,
    title: "Plumbing",
    description: "Sample text describing profession.",
    onClick: () => alert("Explore Plumbing!"),
  },
  {
    image: solarImg,
    title: "Solar",
    description: "Sample text describing profession.",
    onClick: () => alert("Explore Solar!"),
  },
  {
    image: weldingImg,
    title: "Welding",
    description: "Sample text describing profession.",
    onClick: () => alert("Explore Welding!"),
  },
];
