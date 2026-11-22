import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/site.config";

const socialLinks = [
  // {
  //   icon: <FaXTwitter />,
  //   title: "X.com",
  //   link: siteConfig.social.twitter,
  // },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    link: siteConfig.social.linkedin,
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    link: siteConfig.social.instagram,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: siteConfig.email ? `mailto:${siteConfig.email}` : "",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    link: siteConfig.social.github,
  },
  {
    icon: <FaMedium />,
    title: "Medium",
    link: siteConfig.social.medium,
  },
].filter((s) => s.link);

export default socialLinks;
