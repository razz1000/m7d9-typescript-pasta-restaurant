export interface PastaObject {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}

export interface Reservation {
  _id?: string;
  name: string;
  phone: number;
  numberOfPeople: number;
  smoking: boolean;
  dateTime: string;
  specialRequests: string;
}

interface Comment {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}
