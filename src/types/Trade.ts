export interface Trade {
  image: string; // Path to the image
  title: string; // Title of the trade
  cardDescription: string; // Short description for the trade card
  modalDescription: string; // Longer more in depth desciption to be displayed when clicked
  onClick: () => void; // Function to handle clicks
  data: any;
}
