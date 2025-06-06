import {
  Facebook,
  // Instagram,
  // Twitter,
  // Youtube,
  // Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ServiceType, TestimonialType, Expert, ComparisonSet, JunkRemovalType, Customer } from "./types";

export const CONTACT_INFO = [
  {
    name: "Address",

    icon: <MapPin size={16} className="stroke-foreground fill-background" />,
    value: "Tyler, TX, United States, Texas 75702",
  },
  {
    name: "Phone",
    icon: <Phone size={16} className="stroke-foreground fill-background" />,
    value: "903-714-0271",
  },
];

export const SOCIAL_LINKS = [
  // {
  //   name: "Instagram",
  //   icon: <Instagram size={24} />,
  //   url: "/",
  // },
  // {
  //   name: "Twitter",
  //   icon: <Twitter size={24} />,
  //   url: "/",
  // },
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/profile.php?id=61571069666198",
  },
  // {
  //   name: "Youtube",
  //   icon: <Youtube size={24} />,
  //   url: "/",
  // },
];

export const QUICK_LINKS = [
  {
    name: "About Us",
    url: "#story",
  },
  {
    name: "Services",
    url: "#services",
  },
  {
    name: "Reviews",
    url: "#testimonials",
  },
  {
    name: "Contact Us",
    url: "#contact",
  },
];

export const SERVICES: ServiceType[] = [
  {
    image: "/images/service1.jpg",
    title: "Stump & Yard Debris Removal",
    description:
      "We don’t just do junk—we do stumps and storm cleanups too.",
  },
  {
    image: "/images/service2.jpg",
    title: "Property Cleanouts",
    description:
      "Moving out? Tenant left a mess? Let us handle the heavy lifting.",
  },
  {
    image: "/images/service3.jpg",
    title: "General Junk Removal",
    description:
      "We clear out garages, sheds, storage units, and anywhere else junk piles up.",
  },
  {
    image: "/images/service4.jpg",
    title: "Construction & Renovation Debris",
    description:
      "We help contractors and homeowners keep their job sites clean.",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    avatar: "/images/avatar.png",
    name: "Mari T.",
    content:
      "Super services, great guys! Quality work, excellent follow up and communication. I highly recommend them!",
    rating: 5,
  },
  {
    avatar: "/images/avatar.png",
    name: "Joseph N.",
    content:
      "Awesome experience. Same day service on a Saturday. The price was extremely fair. The two gentlemen that did the removal work were pleasant and very professional. Great attitudes actually. I will certainly be holding on to their number.",
    rating: 5,
  },
  {
    avatar: "/images/avatar.png",
    name: "Blanca Baldillez Simmons",
    content:
      "They were quick to respond and within a few hours they were at my house and got the job done. Very nice and respectful young men. Highly recommend",
    rating: 5,
  },
];

export const SERVICE_AREAS = [
  "Flint",
  "Tyler",
  "Liberty City",
  "Crockett",
  "Chandler",
  "Jacksonville",
  "Wills Point",
  "Nacogdoches",
];

export const EXPERT_IMAGES: Expert[] = [
  {
    id: 1,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
  {
    id: 2,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
  {
    id: 3,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.jpg",
        img_name: "Expert 1",
      },
      {
        id: 2,
        img_url: "/images/image_1.jpg",
        img_name: "Expert 2",
      },
      {
        id: 3,
        img_url: "/images/image_2.jpg",
        img_name: "Expert 3",
      },
      {
        id: 4,
        img_url: "/images/image_3.jpg",
        img_name: "Expert 4",
      },
      {
        id: 5,
        img_url: "/images/image_4.jpg",
        img_name: "Expert 5",
      },
    ],
  },
];

export const COMPARISON_SETS: ComparisonSet[] = [
  {
    id: 1,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Backyard Cleanup",
  },
  {
    id: 2,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Garage Cleanup",
  },
  {
    id: 3,
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    title: "Home Cleanout",
  },
];

export const JUNK_REMOVAL_IMAGES: JunkRemovalType[] = [
  {
    id: 1,
    img_url: "/images/junk_remove.png",
    img_name: "Junk Removal 1",

  },
  {
    id: 2,
    img_url: "/images/junk_remove.png",
    img_name: "Junk Removal 2",
  },
  {
    id: 3,
    img_url: "/images/junk_remove.png",
    img_name: "Junk Removal 3",
  },
];

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    avatar_url: "/images/avatar_1.png",
    name: "Pedro Beatty",
  },
  {
    id: 2,
    avatar_url: "/images/avatar_2.png",
    name: "Justin Gerhold Jr.",
  },
  {
    id: 3,
    avatar_url: "/images/avatar_3.png",
    name: "Rufus Mohr",
  },
  {
    id: 4,
    avatar_url: "/images/avatar_1.png",
    name: "John Doe",
  },
];
