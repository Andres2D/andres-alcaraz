export interface Job {
  id: number;
  place: string;
  role: string;
  from: number;
  description: string;
  to?: number;
  link?: string;
};
