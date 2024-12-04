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
    cardDescription: "Sample Text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Aviation!"),
  },
  {
    image: constructionImg,
    title: "Construction",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Construction!"),
  },
  {
    image: firefightingImg,
    title: "Fire Fighter",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Fire Fighting!"),
  },
  {
    image: plumbingImg,
    title: "Plumbing",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Plumbing!"),
  },
  {
    image: solarImg,
    title: "Solar",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Solar!"),
  },
  {
    image: weldingImg,
    title: "Welding",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Welding!"),
  },
];
