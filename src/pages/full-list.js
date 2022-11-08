import React from 'react'
import JSONData from '../../json/movies.json'
import Layout from '../components/layout'

const fullList = () => {
    return (
        <Layout>
            <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
                <h1>{JSONData.title}</h1>
                <ul>
                {JSONData.content.map((data, index) => (
                    <li key={`content_title_${index}`}>{data.title}</li>
                ))}
                </ul>
            </div>
        </Layout>
)}
export default fullList