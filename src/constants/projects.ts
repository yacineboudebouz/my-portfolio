import {
  bariditrust,
  expenses,
  expressStore,
  groupie,
  myPortfolio,
  resimob,
  viralbet,
} from "../assets";

export const projects = [
  {
    title: "Express Store",
    description:
      "A simple e-commerce website to sell books built with Flutter and riverpod, and express js",
    image: expressStore,
    techs: ["Flutter", "Riverpod", "Express JS", "MySql"],
  },
  {
    title: "Resimob",
    description:
      "A mobile application to manage university residence with various features, languages, themes and roles.",
    image: resimob,
    techs: ["Kotlin", "Firebase", "Cloud Firestore"],
  },
  {
    title: "My Portfolio",
    description:
      "A simple portfolio website built with React, TypeScript, Material UI and CSS",
    image: myPortfolio,
    techs: ["React", "TypeScript", "CSS", "Material UI"],
  },
  {
    title: "ViralBet",
    description:
      "A football betting application with a user-friendly interface and a wide range of leagues and clubs.",
    image: viralbet,
    techs: ["Flutter", "Riverpod", "Nest js"],
  },
  {
    title: "Expenses",
    description:
      "A simple expense tracker application built with Flutter, Provider and SQflite.",
    image: expenses,
    techs: ["Flutter", "Provider", "SQflite"],
  },
  {
    title: "Groupie",
    description:
      "A simple chat application with a user-friendly interface and basic features.",
    image: groupie,
    techs: ["Flutter", "Firebase", "Cloud Firestore"],
  },
  {
    title: "Baridi Trust",
    description:
      "A simple website for P2P service  built with React, TypeScript and Express js",
    image: bariditrust,
    techs: ["React", "Javascript", "Tailwind css", "Express js", "MongoDB"],
  },
];
