import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const TafsiriPage = () => (
  <Layout>
    <h1>Tafsiri ya quraan</h1>
    <p>This is the about page.</p>
    <h2>Related Articles</h2>
    <ul>
      <li><Link to="/content/quran/list1/">Go to List 1</Link></li>
      
    </ul>
  </Layout>
);

export default TafsiriPage;

