import { expressStore, myPortfolio, resimob, viralbet } from "../assets";

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
];
