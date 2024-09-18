"use client";

import Project from "@components/landingPage/project/project";

const tilesData = {
    firstTilesData: [
        {
            light: {
                image: "/shared/product/tm6-product-light.png",
                link: "",
            },
            title: "System Emails",
        },
        {
            light: {
                image: "/shared/product/sensor-product.png",
                link: "",
            },
            title: "Marketing Emails",
        }
    ],
    secondTilesData: [
        {
          light: {
            image: "/shared/product/tm6-product-light.png",
            link: "",
          },
          title: "Checkout",
        },
        {
          light: {
            image: "/shared/product/sensor-product.png",
            link: "",
          },
          title: "Demo Form",
        },
    ]
};

const heroHeadline = {
    mainLine: "<strong>Sales</strong><br />Projects",
    subLine: "The XDT designed templates to the Company's markets in order to support the Vorwerk international Sales division."
}

const headlines = {
    headlineAboveFirstTiles: {
        strong: "Email Templates",
        normal: "Email designs for system or marketing send-outs"
    },
    headlineAboveSecondTiles: {
        strong: "Sales Projects",
        normal: "Designs to support Sales division"
    }
}

export default function Home() {
  return <Project tilesData={tilesData} heroHeadline={heroHeadline} headlines={headlines} />;
}
