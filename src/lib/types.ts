export type ServiceType = {
  image: string;
  title: string;
  description: string;
};

export type TestimonialType = {
  avatar: string;
  name: string;
  content: string;
  rating: number; // 0-5 scale
};

export type ExpertType = {
  id: number;
  img_url: string;
  img_name: string;
};