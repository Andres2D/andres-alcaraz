export interface Experience {
  id: number;
  title: string;
  from: number;
  description: string;
  icon: IconSelection;
  to?: number | string;
  place?: string;
  link?: string;
};

type IconSelection = 'developer' | 'worker' | 'language' | 'education';
