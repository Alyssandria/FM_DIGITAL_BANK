import { Facebook } from "@/app/components/ui/icons/facebook";
import { Instagram } from "@/app/components/ui/icons/instagram";
import { Pinterest } from "@/app/components/ui/icons/pinterest";
import { Twitter } from "@/app/components/ui/icons/twitter";
import { Youtube } from "@/app/components/ui/icons/youtube";

export const NAV = [
  {
    NAME: "HOME",
    CONTENT: "Home",
    ONFOOTER: false,
    className: ""
  },
  {
    NAME: "ABOUT",
    CONTENT: "About",
    ONFOOTER: true,
    className: ""
  },
  {
    NAME: "CONTACT",
    CONTENT: "Contact",
    ONFOOTER: true,
    className: ""
  },
  {
    NAME: "CAREERS",
    CONTENT: "Careers",
    ONFOOTER: false,
    className: ""
  },
  {
    NAME: "BLOG",
    CONTENT: "Blog",
    ONFOOTER: true,
    className: ""
  },
];

export const MAIN = {
  HERO: {
    TAGLINE: "Next generation digital banking",
    SUBTITLE: "Take your financial life online. Your Digitalbank account will be a one -stop-shop for spending, saving, budgetingg, investing and much more."
  }
}

export const FOOTER = {
  SOCIALS: [
    {
      NAME: "Facebook",
      ICON: <Facebook />,
      className: ""
    },
    {
      NAME: "Youtube",
      ICON: <Youtube />,
      className: ""
    },
    {
      NAME: "Twitter",
      ICON: <Twitter />,
      className: ""
    },
    {
      NAME: "Pinterest",
      ICON: <Pinterest />,
      className: ""
    },
    {
      NAME: "Instagram",
      ICON: <Instagram />,
      className: ""
    },
  ],
  LINKS: [
    {
      NAME: "CAREERS",
      CONTENT: "Careers",
      className: ""
    },
    {
      NAME: "SUPPORT",
      CONTENT: "Support",
      className: ""
    },
    {
      NAME: "PRIVACY_POLICY",
      CONTENT: "Privacy Policy",
      className: ""
    }
  ]
}

