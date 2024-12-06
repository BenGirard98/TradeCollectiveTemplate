import aviationImg from "../assets/images/Aviation.jpg";
import constructionImg from "../assets/images/Construction.jpg";
import firefightingImg from "../assets/images/Firefighting.jpg";
import plumbingImg from "../assets/images/Plumbing.jpg";
import solarImg from "../assets/images/Solar.jpg";
import weldingImg from "../assets/images/Welding.jpg";

import { Trade } from "../types/Trade";

const fireTradeData = {
  title: "Fire",
  startingSalary: "$57,120 - $75,000",
  currentHireNeeds: 110,
  collectiveLeaders: ["EFD (Paul Polep)", "MABAS Division 3"],
  unionLeaders: [],
  careerPossibilities: {
    entrySalary: "$40,000",
    experiencedSalary: "$94,000",
    seniorSalary: "N/A",
  },
  requirements: [
    "21 yrs. Minimum Age",
    "Point System",
    "CPAT/Ladder Climb Certification/Written Test",
    "Personal Group Interview (Dress to Impress/Eye Contact/Strong Handshake)",
  ],
  certifications: [
    "EMT Certification",
    "State of Illinois Firefighter II Certification",
    "Paramedic License",
    "Hazardous Material Operations Certification",
    "Class A Non-Commercial Driver's License",
  ],
  careerPathways: [
    {
      name: "Evanston Explore Program",
      link: "https://example.com/evanston-program",
    },
    {
      name: "Oakton College: Fire Science Technology A.A.S.",
      link: "https://catalog.oakton.edu/career-programs-pathways/fire-science-technology/#degreestext",
    },
  ],
  programs:
    "Paid on-call hiring (Northfield & Mt. Prospect). Hiring based on the point system beginning with the Explore Program, Boy Scouts of America, and Evanston Lifeguard Program in high school. Previous trade experience is a major advantage in hiring.",
  localBusinesses: [
    {
      organization: "Org A",
      contact: "John Doe",
      email: "john@example.com",
      hiringNeeds: "3",
    },
    {
      organization: "Org B",
      contact: "Jane Smith",
      email: "jane@example.com",
      hiringNeeds: "5",
    },
  ],
  totalHiresRequired: "XX",
};

export const trades: Trade[] = [
  {
    image: aviationImg,
    title: "Aviation",
    cardDescription: "Sample Text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Aviation!"),
    data: null,
  },
  {
    image: constructionImg,
    title: "Construction",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Construction!"),
    data: null,
  },
  {
    image: firefightingImg,
    title: "Fire Fighter",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Fire Fighting!"),
    data: fireTradeData,
  },
  {
    image: plumbingImg,
    title: "Plumbing",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Plumbing!"),
    data: null,
  },
  {
    image: solarImg,
    title: "Solar",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Solar!"),
    data: null,
  },
  {
    image: weldingImg,
    title: "Welding",
    cardDescription: "Sample text describing profession.",
    modalDescription:
      "Sample text that talks more in depth about the trade, in the future this could be a sequence of text, graphics, and informative videos about the trade. I was thinking about having a section for each of the major pieces of info that we collect on a trade like. i.e. a section for expected starting pay, one for major employers and demand, one for expected work/qualifications to get the position, etc...",
    onClick: () => alert("Explore Welding!"),
    data: null,
  },
];
