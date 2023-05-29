"use client";

import React from "react";
import { useRouter } from "next/navigation";
import WorksComponent from "./WorksCardComponent.tsx";

const card = [
  {
    image: "/Mezzanine.jpeg",
    ImgTitle: "no title",
    name: "Mezzanine",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },
  {
    image: "/Stairways.jpeg",
    ImgTitle: "no title",
    name: "Stairways",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },
  {
    image: "/Teardown.jpeg",
    ImgTitle: "no title",
    name: "Teardown & Dismantle Service",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },
  {
    image: "/Structural-Racking.jpeg",
    ImgTitle: "no title",
    name: "Structual Racking",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },

  {
    image: "/Selective.webp",
    ImgTitle: "no title",
    name: "Selective Racking",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },

  {
    image: "Maintenance.jpeg",
    ImgTitle: "no title",
    name: "All Types of Storage Systems",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },

  {
    image: "/Push-Back.jpeg",
    ImgTitle: "no title",
    name: "Push Back Racking",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },

  {
    image: "/Shelving.webp",
    ImgTitle: "no title",
    name: "Shelving",
    description:
      "Description goes in here for the customer to see and learn more about our services",
    onClick: "/github/....",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="flex gap-3 justify-center py-12 flex-wrap cursor-default">
        {card.map((item) => (
          <WorksComponent
            key="item"
            image={item.image}
            ImgTitle={item.ImgTitle}
            name={item.name}
            description={item.description}
            onClick={() => router.push(item.onClick)}
          />
        ))}
      </div>
    </div>
  );
}
