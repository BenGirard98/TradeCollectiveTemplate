import VideoPlayer from "../components/VideoPlayer";
import { Section } from "../pages/TradeInfoPage";
import DITL_eletrical_apprentice from "../assets/videos/DITL_electrical_apprentice.mp4";
import ElectricianCareerPathways from "../assets/images/ElectricianCareerPathways.jpg";

import electricianIntroVideo from "../assets/videos/electricianIntro.mp4";
import InfoSectionImage from "../components/InfoSectionImage";
import InfoSectionTextDisplay from "../components/InfoSectionTextDisplay";

export const electricianSections: Section[] = [
  {
    name: "Introduction",
    content: (
      <VideoPlayer src={electricianIntroVideo} title="Electrician Intro" />
    ),
  },
  {
    name: "Salary and Career Progression",
    content: (
      <InfoSectionImage
        title="Career Progression"
        imgSrc={ElectricianCareerPathways}
      ></InfoSectionImage>
    ),
  },
  {
    name: "Note About Next Section",
    content: (
      <InfoSectionTextDisplay
        title="Note About Next Section"
        content="Ok so the next section is a video I stole from tiktok. We'd definetly need permissions or something to use it. I was just feeling when trying to gather sample content that a lot of it was kind of monotone and not exciting. I was thinking that we could have the first run through of the LEARN MORE be the kind of lame informational content and then when you finished that if it was interesting to you, you could get more shortform content we source online giving what feels like more a more realistic look at what your day might be like."
      ></InfoSectionTextDisplay>
    ),
  },
  {
    name: "Typical Day",
    content: (
      <VideoPlayer src={DITL_eletrical_apprentice} title="A Day in the Life" />
    ),
  },
];
