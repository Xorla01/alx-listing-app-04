export interface CardProps {
  property: PropertyProps;
}

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  onClick?: () => void; 
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}


export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}