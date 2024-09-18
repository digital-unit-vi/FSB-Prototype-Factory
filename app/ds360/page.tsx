"use client";

import Project from "@components/landingPage/project/project";

const tilesData = {
  firstTilesData: [
    {
      light: {
        image: "/shared/product/tm6-product-light.png",
        link: "/templates/email/light/tm6/var-a/index.html",
      },
      dark: {
        image: "/shared/product/tm6-product-dark.png",
        link: "/templates/email/dark/tm6/var-a/index.html",
      },
      title: "Main Device",
    },
    {
      light: {
        image: "/shared/product/sensor-product.png",
        link: "/templates/email/light/sensor/var-a/index.html",
      },
      dark: {
        image: "/shared/product/sensor-product.png",
        link: "/templates/email/dark/sensor/var-a/index.html",
      },
      title: "Main Accessory",
    },
    {
      light: {
        image: "/shared/product/blade-product.png",
        link: "/templates/email/light/blade/index.html",
      },
      dark: {
        image: "/shared/product/blade-product.png",
        link: "/templates/email/dark/blade/index.html",
      },
      title: "Basic Accessory",
    },
  ],
  secondTilesData: [
    {
      light: {
        image: "/shared/product/tm6-product-light.png",
        link: "/landing-page/light/tm6/var-a",
      },
      dark: {
        image: "/shared/product/tm6-product-dark.png",
        link: "/landing-page/dark/tm6/var-a",
      },
      title: "Main Device",
    },
    {
      light: {
        image: "/shared/product/sensor-product.png",
        link: "/landing-page/light/sensor",
      },
      dark: {
        image: "/shared/product/sensor-product.png",
        link: "/landing-page/dark/sensor",
      },
      title: "Main Accessory",
    },
  ]
};

const heroHeadline = {
  mainLine: "<strong>DS360</strong><br />Templates",
  subLine: "The XDT designed three business cases for Email Templates and two business cases for Landing Page Templates, based on three design principles such as usability first, content curation and sustainability and on the new CI/CD and guidelines."
}

const headlines = {
  headlineAboveFirstTiles: {
    strong: "Email Template",
    normal: "Three business cases available in light and dark version"
  },
  headlineAboveSecondTiles: {
    strong: "Landing Page Template",
    normal: "Two business cases available in light and dark version"
  }
}

export default function Home() {
  return <Project tilesData={tilesData} heroHeadline={heroHeadline} headlines={headlines} isDarkModeEnable={true} />;
}
