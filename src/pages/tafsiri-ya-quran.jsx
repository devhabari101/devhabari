import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const TafsiriPage = () => (
<Layout>
 <div className="container support-container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title categories-title">Tafsiri ya quraan</h1>
          
              
              <p> وَأَنَّ هَـٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ ۖ  وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَن سَبِيلِهِ ۚ</p>
             
             <p>Na kwamba hii ndiyo njia Yangu iliyonyooka, basi ifuateni. Na wala msifuate njia nyinginezo zitakufarikisheni na Njia Yake. [Al-An’aam (6:153)]</p>
             
             <ul>
             <li><Link to="/quran/al-fatiha/">Al-FATIHA</Link></li>
             <li><Link to="/quran/al-adiyat/">AL-ADIYAT</Link></li>
             <li><Link to="/quran/al-qaria/">AL-QARIA</Link></li>
             <li><Link to="/quran/at-takathur/">AT-TAKATHUR</Link></li>
             <li><Link to="/quran/al-asr/">AL-ASR</Link></li>
            </ul>
            </div>
          </div>
         </div>


  </Layout>
);

export default TafsiriPage;

