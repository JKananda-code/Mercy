// types/service.ts
export type ServiceCategory = 'braids' | 'weaves' | 'natural' | 'bridal' | 'kids';

export type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
  durationMinutes: number;
  startingPrice: number;
  image?: string;
};
