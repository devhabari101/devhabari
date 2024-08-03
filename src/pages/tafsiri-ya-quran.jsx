import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const TafsiriPage = () => (
  <Layout>
    <h1>Tafsiri ya quraan</h1>
  <p> وَأَنَّ هَـٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ ۖ  وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَن سَبِيلِهِ ۚ</p>

<p>Na kwamba hii ndiyo njia Yangu iliyonyooka, basi ifuateni. Na wala msifuate njia nyinginezo zitakufarikisheni na Njia Yake. [Al-An’aam (6:153)]</p>
    <ul>
      <li><Link to="/quran-category/al-fatiha/">Al-FATIHA</Link></li>
      <li><Link to="/example-category/list-2/">Go to List 2</Link></li>
    </ul>
  </Layout>
);

export default TafsiriPage;

