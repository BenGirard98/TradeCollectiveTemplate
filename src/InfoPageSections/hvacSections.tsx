import VideoPlayer from "../components/VideoPlayer";
import { Section } from "../pages/TradeInfoPage";
import HVACVideo1 from "../assets/videos/HVACIntro.mp4";
import HVACImg from "../assets/images/HVAC.jpg";
import HVACCarrerPathways from "../assets/images/HVACCareerPathways.jpg";
import DITLImg from "../assets/images/Construction.jpg";
import InfoSectionTextDisplay from "../components/InfoSectionTextDisplay";
import InfoSectionImage from "../components/InfoSectionImage";
import InfoSectionForm from "../components/InfoSectionForm";

export const hvacSections: Section[] = [
  {
    name: "Introduction",
    content: (
      <VideoPlayer
        src={HVACVideo1}
        poster={HVACImg}
        title="Welcome to HVAC Trade Information"
      />
    ),
  },
  {
    name: "Typical Day",
    content: (
      <VideoPlayer
        src={HVACVideo1}
        poster={DITLImg}
        title="A Day in the Life"
      />
    ),
  },
  {
    name: "Pathways",
    content: (
      <InfoSectionTextDisplay
        title="Training and Certification Pathway"
        content="This is some place holder text. The goal is just to see how a paragraph of info might look in this component. I'm expecting that we might want some images added or something else as well but I'm kind of hoping that we'll be able to create some nice images of this info and just display those instead of me tring to format information nicely. I'll try to find an example of what I'm thinking for the next slide :)"
      ></InfoSectionTextDisplay>
    ),
  },
  {
    name: "Salary and Career Progression",
    content: (
      <InfoSectionImage
        title="Career Progression"
        imgSrc={HVACCarrerPathways}
      ></InfoSectionImage>
    ),
  },
  {
    name: "Local Employers",
    content: (
      <InfoSectionForm
        title="Employers in Your Area"
        content="Here's a sample form slide where we can ask any questions we'd like. It could include just this single text entry field, multiple fields, or even something entirely different."
      ></InfoSectionForm>
    ),
  },
  {
    name: "Summary",
    content: (
      <div>
        <h2>Summary</h2>
        <p>
          Recap what you've learned and take the next steps toward your HVAC
          career.
        </p>
      </div>
    ),
  },
];
