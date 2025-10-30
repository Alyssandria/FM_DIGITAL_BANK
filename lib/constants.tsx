import { Facebook } from "@/app/components/ui/icons/facebook";
import { OnboardingIcon } from "@/app/components/ui/icons/fast-onboarding-icon";
import { Instagram } from "@/app/components/ui/icons/instagram";
import { OnlineBanking } from "@/app/components/ui/icons/online-banking-icon";
import { ApiIcon } from "@/app/components/ui/icons/open-api-icon";
import { Pinterest } from "@/app/components/ui/icons/pinterest";
import { BudgetingIcon } from "@/app/components/ui/icons/simple-budgeting-icon";
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
  },

  MARKETING: {
    TAGLINE: " Why choose Digitalbank?",
    SUBTITLE: "We leverage Open Banking to turn your bank account into your financial hub.Control your finances like never before. ",
    CARDS: [
      {
        TITLE: "Online Banking",
        NAME: "ONLINE_BANKING",
        ICON: <OnlineBanking />,
        CLASSNAME: "",
        CONTENT: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
      },

      {
        TITLE: "Simple Budgeting",
        NAME: "SIMPLE_BUDGETING",
        ICON: <BudgetingIcon />,
        CLASSNAME: "",
        CONTENT: "See exactly where your money goes each month.Receive notifications when you’re close to hitting your limits."
      },

      {
        TITLE: "Fast Onboarding",
        NAME: "FAST_ONBOARDING",
        ICON: <OnboardingIcon />,
        CLASSNAME: "",
        CONTENT: "We don’t do branches.Open your account in minutes online and start taking control of your finances right away."
      },

      {
        TITLE: "Open API",
        NAME: "OPEN_API",
        ICON: <ApiIcon />,
        CLASSNAME: "",
        CONTENT: "Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier."
      }
    ]
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

