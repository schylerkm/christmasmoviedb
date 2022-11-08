import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Button from '../components/button'
import * as Styles from '../components/styles.module.css'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontFamily: "sans-serif",
}
const headingAccentStyles = {
  color: "#bf1818",
  fontFamily: "sans-serif",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const quizQuestion = {
  color: "#E57321",
  fontWeight: "bold",
  fontSize: 20,
  width: "100%",
}

const none = "none";
var selectedGeo = none;
const geo = "geoButtons";
const movieData = require("../json/movies.json");
var recommendation;

const IndexPage = () => {
  return (
    <Layout>
      <div id="title">
        <h1 style={headingStyles}>
          Christmas Movie Database
          <br />
          <span style={headingAccentStyles}>— a site to help you get in the holiday spirit!</span>
        </h1>
        <h2 style={headingAccentStyles}>
          Welcome! Let me help you pick a Christmas movie to get in the holiday spirit! 🎄
        </h2>
      </div>
      <div id="quiz">
        <div style={quizQuestion}>Pick your location: </div>
        <br />
        <Button
          name="US"
          value="United States"
          id="geo.US"
          className={Styles.button}
          onClick={buttonPressed}
        />
        <Button
          name="abroad"
          value="Abroad"
          id="geo.abroad"
          className={Styles.button}
          onClick={buttonPressed}
        />
      </div>
      {/* <StaticImage
        alt="Closeup christmas tree with ornaments - source Unsplash"
        src="../images/christmas-tree-unsplash.jpg"
        width={200}
        height={200}
      /> */}
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

function buttonPressed(e) {
  if (e.target.nam === geo) {
    toggleGeo(e);
  }
}
