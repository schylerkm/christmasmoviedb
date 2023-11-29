import React from 'react'
import Layout from '../components/layout'
import * as Styles from '../components/styles.module.css'

const infoPage = () => {
    return (
        <Layout>
            <div className={Styles.page}>
                <h1 className={Styles.heading}>About: </h1>
                <div>My name is Schyler, I like Christmas</div>
                <br></br>
                <div>Inspiration for this site came from my friend Diane. Please check out her book recommendation site: </div>
                <a href="https://bookrecommendermain.gtsb.io/">Book Recommender</a>
                <br></br>
                <br></br>
                <div>This site was developed using{" "}
                    <a href="https://www.gatsbyjs.com/">Gatsby</a> and is hosted on Gatsby Cloud
                </div>
            </div>
        </Layout>
)}
export default infoPage

export const Head = () => <title>About</title>