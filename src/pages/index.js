import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Button from '../components/button'
import * as Styles from '../components/styles.module.css'

const none = "none";
var selectedGeo = none;
var selectedMood = none;
var selectedSanta = none;
const geo = "geoButtons";
const mood = "moodButtons";
const santa = "santaButtons";
const movieData = require("../../json/movies.json");
var recommendation;

const IndexPage = () => {
  return (
    <Layout>
      <div id="title">
        <h1 className={Styles.heading}>
          Christmas Movie Database
          <br />
          <span className={Styles.headingAccent}>— a site to help you get in the holiday spirit!</span>
        </h1>
        <h2 className={Styles.headingAccent}>
          Welcome! Let me help you pick a Christmas movie to get in the holiday spirit! 🎄
        </h2>
      </div>
      <div id="quiz">
        <div className={Styles.quizQuestion}>Pick a location: </div>
        <br />
        <div>
          <Button
            name="geoButtons"
            value="United States"
            id="geo.US"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <Button
            name="geoButtons"
            value="Abroad"
            id="geo.abroad"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
        <br />
        <div className={Styles.quizQuestion}>Pick a mood: </div>
        <br />
        <div>
          <Button
            name="moodButtons"
            value="Funny"
            id="mood.funny"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
        <div>
          <Button
            name="moodButtons"
            value="Emotional"
            id="mood.emotional"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
        <br />
        <div className={Styles.quizQuestion}>Santa or no Santa? </div>
        <br />
        <div>
          <Button
            name="santaButtons"
            value="Santa 🎅"
            id="santa.yes"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
        <div>
          <Button
            name="santaButtons"
            value="No Santa"
            id="santa.no"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
      </div>
      <div id="recommendationHeader" className={Styles.recommendationHeader}>
        <br />
        You should check out:
        <br />
      </div>
      <div className={Styles.recommendationBody} id="recommendationBody">
        <br />
        <br />
        <div id="movieTitle" className={Styles.movieTitle}></div>
        <br />
        <div id="movieDescription" className={Styles.movieDescription}></div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

function toggleGeo(e) {
  if (selectedGeo === e.target.id) {
    e.target.className = Styles.button;
    selectedGeo = none;
  } else {
    if (selectedGeo !== none) {
      document.getElementById(selectedGeo).className = Styles.button;
    }

    e.target.className = Styles.buttonSelected;
    selectedGeo = e.target.id;
  }
}

function toggleMood(e) {
  if (selectedMood === e.target.id) {
    e.target.className = Styles.button;
    selectedMood = none;
  } else {
    if (selectedMood !== none) {
      document.getElementById(selectedMood).className = Styles.button;
    }

    e.target.className = Styles.buttonSelected;
    selectedMood = e.target.id;
  }
}

function toggleSanta(e) {
  if (selectedSanta === e.target.id) {
    e.target.className = Styles.button;
    selectedSanta = none;
  } else {
    if (selectedSanta !== none) {
      document.getElementById(selectedSanta).className = Styles.button;
    }

    e.target.className = Styles.buttonSelected;
    selectedSanta = e.target.id;
  }
}

function buttonPressed(e) {
  // e.target.className = Styles.buttonSelected;
  if (e.target.name === geo) {
    toggleGeo(e);
  } else if (e.target.name === mood) {
    toggleMood(e);
  } else if (e.target.name === santa) {
    toggleSanta(e);
  }
  if (selectionsComplete()) {
    generateRecommendation();
  }
}

function selectionsComplete() {
  if ( selectedGeo !== none && selectedMood !== none && selectedSanta !== none) {
    return true;
  } else {
    return false;
  }
}

function generateRecommendation() {
  var selectedTags = [selectedGeo, selectedMood, selectedSanta];

  var filteredMovies = movieData.filter((movie) => 
    selectedTags.every((t) => movie.tags.includes(t))
  );

  if (filteredMovies.length === 0) {
    return;
  }

  recommendation = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
  var titleDiv = document.getElementById("movieTitle");
  var descriptionDiv = document.getElementById("movieDescription");
  var recHeaderDiv = document.getElementById("recommendationHeader");
  var recBodyDiv = document.getElementById("recommendationBody");

  recHeaderDiv.style.display = "block";
  recBodyDiv.style.display = "block";
  titleDiv.innerHTML = recommendation.title;
  descriptionDiv.innerHTML = recommendation.description;
  titleDiv.style.display = "block";
  descriptionDiv.style.display = "block";

}