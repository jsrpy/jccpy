import React, { Component } from "react";
// import './App.css';

import Header from "./Components/Header/Header";
import ProjectList from "./Components/ProjectList/ProjectList";

import "materialize-css/dist/css/materialize.min.css";

import twitter from "./img/twitter.jpg";
import voracious from "./img/voracious.jpg";
import impromptu from "./img/impromptu.jpg";
import expresso from "./img/expresso.jpg";
import musclehub from "./img/musclehub.jpg";
import nycprop from "./img/nycprop.jpg";

class App extends Component {
  state = {
    projects: [
      {
        name: "Live Twitter Sentiment",
        skill: "Dash, Plotly, Pandas, Python, MySQL, Nginx",
        github: "https://gist.github.com/jsrpy/412b46ccc09106b476f5f9c70db24cb3",
        demo: "http://tweetis.jccpy.com",
        description:
          "A twitter live sentiment dashboard targeting several international cities. Tweets streamed through Tweepy API and sentiment analysed with pretrained model from VaderSentiment. Tweets are stored in a MySQL table with periodical clean-up to maintain query speed. Leveraging Dash as a Flask app and generates interactive graphs as React as the frontend, the code base is purely written in Python. Deployed with gunicorn on a digital ocean instance.",
        img: twitter
      },

      {
        name: "Voracious",
        skill: "React, Javascript",
        github: "https://github.com/jsrpy/React_SPA/tree/master/voracious",
        demo: "https://voracious.surge.sh/",
        description: "Whenever you are hungry, Voracious helps you search for nearby restaurants base on type of food and location! You can search by Best Match, Highest Rated, or Most Reviewed. Voracious makes use of the Yelp API. Clicking on images of the search results will direct you to the corresponding restaurants' Yelp page, providing further information about that particular eatery.",
        img: voracious
      },

      {
        name: "New York Property Price Regression",
        skill: "Pandas, Matplotlib, Scikit-learn, Xgboost, Catboost, Lightgbm, Python",
        github: "https://github.com/jsrpy/NYC-Property-Regression",
        demo: "https://github.com/jsrpy/NYC-Property-Regression/blob/master/NYC_Property_Regression.ipynb",
        description: "A real life case study of property price prediction based on data of New York. It is found that the industry inexperienced appraisers predicts transaction price with $70,000 error on average. Given the properties' attributes, such as size, number of bedrooms, construction year, surrounding facilities and etc, a regression model might be able to achieve a lower mean absolute error than average practitioner. Various tree-based model API were used and their results compared. It is found that all tree-based model were able to achieve at least $50,000 MAE; and Catboost with the lowest $43,525 MAE.",
        img: nycprop
      },

      {
        name: "Impromptu",
        skill: "React, Javascript, OAuth",
        github: "https://github.com/jsrpy/React_SPA/tree/master/impromptu",
        demo: "https://impromptu.surge.sh/",
        description: "Impromptu helps you create your unique Spotify playlist! To being, simply search for tracks, you will be directed to login to you Spotify account. Then add tracks to your playlist and click SAVE TO SPOTIFY. You should see your new playlist at Your Spotify Library.",
        img: impromptu
      },

      {
        name: "Muscle Hub - Gym Membership Conversion",
        skill: "Pandas, Matplotlib, Scipy, Python",
        github: "https://github.com/jsrpy/intro-data-capstone-musclehub",
        demo: "https://github.com/jsrpy/intro-data-capstone-musclehub/blob/master/musclehub_project_JustinChing/musclehub.ipynb",
        description: "An A/B testing on visitor conversion to gym membership using hypothesis test. In Muscle Hub, visitors will be asked to take a fitness test before purchasing a membership. The manager splits visitors into two groups and would like to know whether skipping the fitness test could convert more membership.",
        img: musclehub
      },

      {
        name: "Expresso",
        skill: "ExpressJS, Javascript",
        github: "https://github.com/jsrpy/capstone-project-2-expresso",
        demo: "",
        description: "An Express Restful API that manage menu items and employees. This is a capstone project from Codecademy Web API course. The frontend is provided as part of the project material.",
        img: expresso
      },

      {
        name: "This Site",
        skill: "React, Javascript, HTML, CSS, Materialize",
        github: "",
        demo: "",
        description: "Of course, this simple portfolio page built with React and Materialize CSS.",
        img: ""
      }
    ]
  };

  render() {
    return (
      <div className="App container">
        <Header />
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
