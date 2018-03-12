export interface Flight {
  carrierCode: string;
  flightNumber: string;
  remainingTickets: number;
  deprature: Date;
  arrival: Date;
  fares: Fare[];
}

export interface Fare {
  fareSellKey: string;
  price: number;
  bundle: Bundle;
}

export enum Bundle {
  Basic = 'basic',
  Standard = 'standard',
  Plus = 'plus'
}
