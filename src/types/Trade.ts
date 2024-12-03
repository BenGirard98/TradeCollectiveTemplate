export interface Trade {
  image: string; // Path to the image
  title: string; // Title of the trade
  description: string; // Short description
  onClick: () => void; // Function to handle clicks
}
