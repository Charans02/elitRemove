import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ServiceType, TestimonialType, Expert } from "./types";

export const CONTACT_INFO = [
  {
    name: "Email",
    icon: <Mail size={16} className="stroke-foreground fill-background" />,
    value: "Trash.lion.llc@gmail.com",
  },
  {
    name: "Address",

    icon: <MapPin size={16} className="stroke-foreground fill-background" />,
    value: "Philadelphia , Pa",
  },
  {
    name: "Phone",
    icon: <Phone size={16} className="stroke-foreground fill-background" />,
    value: "267-356-1542",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: <Instagram size={24} />,
    url: "/",
  },
  {
    name: "Twitter",
    icon: <Twitter size={24} />,
    url: "/",
  },
  {
    name: "Facebook",
    icon: <Facebook size={24} />,
    url: "/",
  },
  {
    name: "Youtube",
    icon: <Youtube size={24} />,
    url: "/",
  },
];

export const QUICK_LINKS = [
  {
    name: "About Us",
    url: "#",
  },
  {
    name: "Service",
    url: "#",
  },
  {
    name: "Pricing",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  },
];

export const SERVICES: ServiceType[] = [
  {
    image: "/images/service_1.png",
    title: "Property clean outs",
    description:
      "If you recently purchased a house or our trying to sell a house or had a tenant recently move out. We are the right guys for the job!",
  },
  {
    image: "/images/service_2.png",
    title: "Auto/Boat/RV removal",
    description:
      "We are one of the only junk removal companies in Philadelphia who are  able to get your car, boat or rv stuck in your driveway gone today!",
  },
  {
    image: "/images/service_3.png",
    title: "Trash and Junk Removal",
    description:
      "We remove any trash or junk piling up in your home, garage or any where you need it gone!",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    avatar: "/images/avatar_1.png",
    name: "Pedro Beatty",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam sapien. Phasellus pellentesque, quam sed tempus tempus, dui magna semper urna, placerat tristique diam augue ut nunc.",
    rating: 5,
  },
  {
    avatar: "/images/avatar_2.png",
    name: "Justin Gerhold Jr.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam sapien. Phasellus pellentesque, quam sed tempus tempus, dui magna semper urna, placerat tristique diam augue ut nunc.",
    rating: 3,
  },
  {
    avatar: "/images/avatar_3.png",
    name: "Rufus Mohr",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam sapien. Phasellus pellentesque, quam sed tempus tempus, dui magna semper urna, placerat tristique diam augue ut nunc.",
    rating: 4,
  },
];

export const SERVICE_AREAS = [
  "Horsham",
  "Bryn Athyn",
  "Willow Grove",
  "Heaton",
  "Hatboro",
  "Newtown",
  "Woodmont",
  "Willow Manor",
  "Warminster Heights",
  "Bensalem, Bensalem Township",
  "Levittown",
  "Norristown",
  "Philadelphia",
  "Ivyland",
  "Alnwick",
  "Westbury",
  "Warrington",
  "Abington Township",
  "Huntington Valley, Bryn Athyn",
  "Southampton, Upper Southampton Township",
];

export const EXPERT_IMAGES: Expert[] = [
  {
    id: 1,
    img_group: [
      {
        id: 1,
        img_url: "/images/image.png",
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
        img_url: "/images/image.png",
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
        img_url: "/images/image.png",
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
