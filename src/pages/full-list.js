import React from 'react'
import JSONData from '../../json/movies.json'
import Layout from '../components/layout'
import * as Styles from '../components/styles.module.css'

const fullList = () => {
    return (
        <Layout>
            <div className={Styles.page}>
                <h1 className={Styles.heading}>Full Movie List:</h1>
                <ul>
                {JSONData.map((data, index) => (
                    <li key={`${index}`}>{data.title}</li>
                ))}
                </ul>
            </div>
        </Layout>
)}
export default fullList

export const Head = () => <title>Full Movie List</title>