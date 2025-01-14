import VideoPlayer from "../components/VideoPlayer";
import { Section } from "../pages/TradeInfoPage";
import HVACVideo1 from "../assets/videos/WhatIsHVAC.mp4";
import HVACImg from "../assets/images/HVAC.jpg";
import DITLImg from "../assets/images/Construction.jpg";

export const hvacSections: Section[] = [
  {
    name: "Introduction",
    content: (
      <div>
        <h2>Welcome to HVAC Trade Information</h2>
        <VideoPlayer src={HVACVideo1} poster={HVACImg} />
      </div>
    ),
  },
  {
    name: "Typical Day",
    content: (
      <div>
        <h2>A Day in the Life</h2>
        <VideoPlayer src={HVACVideo1} poster={DITLImg} />
      </div>
    ),
  },
  {
    name: "Pathways",
    content: (
      <div>
        <h2>Training and Certification Pathways</h2>
        <p>
          Learn about the educational and certification pathways available to
          start your career.
        </p>
      </div>
    ),
  },
  {
    name: "Salary and Career Progression",
    content: (
      <div>
        <h2>Salary and Career Progression</h2>
        <p>
          Discover potential salaries and career growth opportunities in HVAC.
        </p>
      </div>
    ),
  },
  {
    name: "Local Employers",
    content: (
      <div>
        <h2>Employers in Your Area</h2>
        <p>Get to know some local employers hiring in the HVAC industry.</p>
      </div>
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
