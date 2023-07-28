/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop on bed.jpeg";

const imageAltText = "A black laptop lying on bed with a black blanket.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Expense Tracker",
    description:
      "Expense tracker is a cross-platform mobile application built with Flutter. It helps you to track your daily expenses and income.",
    url: "https://github.com/ShishirRijal/expense_tracker",
  },
  {
    title: "Quiz App",
    description:
      "Quiz App is a cross-platform mobile application built with Flutter. It helps you to test your knowledge on various topics.",
    url: "https://github.com/ShishirRijal/Quiz-App-Flutter",
  },
  {
    title: "My Portfolio",
    description:
      "My portfolio website featuring my projects, skills, and contact information.",
    url: "https://shishirrijal.com.np/",
  },
  {
    title: "App Authentication with Flutter and Firebase using MVVM and Clean Code Architecture",
    description:
      "This is a sample project that demonstrates how to implement authentication in Flutter using Firebase with MVVM and Clean Code Architecture.",
    url: "https://github.com/ShishirRijal/Firebase-Authentication-With-CleanCode-Architecture",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
