import VideoPlayer from "../components/VideoPlayer";
import { Section } from "../pages/TradeInfoPage";
import autoIntroVideo from "../assets/videos/automotiveIntro.mp4";
import autoIntroImg from "../assets/images/AutoIntro.jpg";

export const automotiveSections: Section[] = [
  {
    name: "Introduction",
    content: (
      <VideoPlayer
        src={autoIntroVideo}
        poster={autoIntroImg}
        title="Intro To Auto"
      />
    ),
  },
];
