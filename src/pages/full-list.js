import React from 'react'
import JSONData from '../../json/movies.json'
import Layout from '../components/layout'

const fullList = () => {
    return (
        <Layout>
            <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
                <h1>Full Movie List:</h1>
                <ul>
                {JSONData.map((data, index) => (
                    <li key={`${index}`}>{data.title}</li>
                ))}
                </ul>
            </div>
        </Layout>
)}
export default fullList