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
  },

  ARTICLES: {
    TAGLINE: "Latest Articles",
    CARDS: [
      {
        AUTHOR: "Claire Robinson",
        IMAGE: "/image-currency.jpg",
        CLASSNAME: "",
        CONTENT: "The world is getting smaller and we’re becoming more mobile.So why should you be forced to only receive money in a single …",
        TITLE: "Receive money in any currency with no fees",
      },

      {
        AUTHOR: "Wilson Hutton",
        IMAGE: "/image-restaurant.jpg",
        CLASSNAME: "",
        TITLE: "Treat yourself without worrying about money",
        CONTENT: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you …",
      },

      {
        AUTHOR: "Wilson Hutton",
        IMAGE: "/image-plane.jpg",
        CLASSNAME: "",
        TITLE: "Take your Digitalbank card wherever you go",
        CONTENT: "We want you to enjoy your travels.This is why we don’t charge any fees on purchases while you’re abroad.We’ll even show you …",
      },

      {
        AUTHOR: "Claire Robinson",
        IMAGE: "/image-confetti.jpg",
        CLASSNAME: "",
        TITLE: "Our invite- only Beta accounts are now live!",
        CONTENT: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      },
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

