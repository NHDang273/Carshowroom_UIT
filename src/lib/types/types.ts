export type CarManufacturer =
  | "Lamborghini"
  | "Ferrari"
  
  | "Bugatti";


export type LoaderProps = {
  selectedCar: {
    manufacturer: string;
    model: string;
    logo: string;
  };
};

export type CarColorProps = {
  name: string;
  hexCode: string;
};
