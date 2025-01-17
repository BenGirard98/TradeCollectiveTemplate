import { Section } from "../pages/TradeInfoPage";

export interface Trade {
  image: string; // Path to the image
  title: string; // Title of the trade
  cardDescription: string; // Short description for the trade card
  onClick: () => void; // Function to handle clicks
  data: any;
  sections: Section[];
  iconName: string;
}
