import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineFolderOpen,
  AiOutlineProject,
} from 'react-icons/ai';

export const navigationLinks = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: '/dashboard',
    text: 'dashboard',
    icon: <AiOutlineContacts />,
  },
  {
    id: 3,
    url: '/widget',
    text: 'widget',
    icon: <AiOutlineFolderOpen />,
  },
  {
    id: 4,
    url: '/about',
    text: 'about',
    icon: <AiOutlineProject />,
  },
];

export const socialIcons = [
  {
    id: 1,
    url: 'facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'instagram.com',
    icon: <FaInstagram />,
  },
];
