import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'
import Bmc from '../assets/bmc-logo-streamline.png'
import Github from '../assets/search-book--brainstorm.png'
import SocialMedia from '../assets/social-media.png'

const contact = () => {
  return (
    <Layout>
      <Wrapper>
        <Seo
          title="Kuhusu Sisi | DevHabari Jarida La Tekinologia"
          description="Jarida la wazi la wasanidi kwenye jamii"
        />
        <div className="container support-container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title categories-title">HISTORIA YA MSIKITI WA TAQWA BUNGONI</h1>
          
              <p>
            Msikiti huu ambao upo hapa kati ya mtaa wa Bungoni na Mtaa wa Ngoma katika Serikali ya
          Mtaa wa Kasulo, Kata ya Ilala, Manispaa ya Ilala, Dar es Salaam, hapo awali ulikuwa umetokea
          katika eneo lililokuwa likijulikana kama GINDA ambapo sasa ndipo panapoitwa Gerezani
          Railway Club. Katika miaka ya 1930 ndipo ulipohamishiwa katika eneo lililokuwa likiitwa
          Michongomani (ambalo kwa sasa ndiyo hapa Mtaa wa Bungoni) chini ya Waasisi wafuatao:
        </p>
<ul>
    <li>Marehemu Sheikh Yusuf bin Saidi (aliyekuwa Imam)</li>
    <li>Marehemu Mwinyimkuu Suleiman Hega</li>
    <li>Marehemu Saidi Mwaruka</li>
    <li>Marehemu Mwinyi Mshindo</li>
    <li>Marehemu Mwinyi Khamisi Bakari</li>
    <li> Marehemu Yusuf Ibrahim</li>
   <li> Marehemu Mohamedi Harmnisi</li>
   <li> Marehemu Mzee Hashim Mwinshehe</li>
   <li> Marehemu Mohaned Shaha</li>
   <li>Marehemu Mohamedi Nyamgunda</li>
</ul>
 <hr></hr>
 <p></p>             
<p>Mnamo mwaka 1935, Waasisi hao waliongozwa na Marehemu Mzee Mwinyi Mshindo walishauriana
kuongeza Msikiti na baada ya kupata Kibali cha Bwana DC wa wakati huo, walijenga Msikiti kwa kutumia
miti na matope hapo Michongomani.</p>
              
<p>Msikiti huo uliendelea kupanuliwa kwa kadri ya waumini walivyokuwa wakiongezeka. Kwa upande wa
mashariki kati ya Mtaa wa Tukuyu/ Ngoma Wazee hao walijenga Zawiya, Madrasa na nyumba ya Imam
Sheikh Yusuf Said. Aidha upande wa kusini mwa Msikiti huo kulikuwa ni eneo la makaburi lakuzikia
Waislam ambapo baadae Uongozi wa Msikiti uliamua kuyaondosha makaburi hayo na kutoruhusu watu
kuendelea kuzikana tena hapo kwatahadhari ya kwamba wakati wa kutaka kupanua Msikiti isiwe tabu.</p>
              
<p>Kwahiyo makaburi yote yaliondoshwa na likabakishwa kaburi moja tu la Sheikh Yusuf bin Said lililokuwa
ndani ya Msikiti ambalo nalo pia mwaka 2000 likaondoshwa baada ya kushauriana na familia ya
marehemu Sheikh Yusuf bin Said.</p>

<h2 className="support-title"> 2. YALIYOJIRI KATIKA MIAKA YA 1940 HADI 1973.</h2>
<p></p>Mwanzoni mwa miaka ya 1940 marehemu Mzee Aziz Ali na Mzee John Rupia waliomba idhini Serikalini
ili watumie sehemu ya uwanja wa Msikiti wa Michongomani kwa lengo la kuweka Lingo la kuni. Hata
hivyo, Serikali iliwaelekeza wapeleke maombi yao kwa Viongozi wa Msikiti wa Michongomani. Viongozi
wa Msikiti waliwakubaliana na ombi lao na Lingo la Kuni liliendelea kuwepo hapo hadi mwanzoni mwa
mwaka 1962 lingo hilo likafa.</p>
            
<p>Hatimae eneo lililokuwa likitumika kama lingo la kuni liliombwa tena na Bwana KIBIK MWINYIPEMBE
kwa viongozi wa Msikiti ili aendeshe Gereji. Naye alikubaliwa hadi mwaka 1973 uongozi wa msikiti
uliondosha gereji hiyo baada ya bwana huyo kuvunja masharti waliyokubaliana awali.Kwahiyo,Viongozi
waliamua kuuvunja Msikiti huo wa miti na kuujenga upya kwa kutumia matofali ikiwa ni pamoja na
kuuboresha kwa kuongeza katika jengo jipya sehemu ya kuswalia wanawake.</p>      

              {/* Item */}
              <div className="support-item">
                <div>
                  <a
                    className="support-link"
                    href="https://www.buymeacoffee.com/chrismorrison"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Bmc}
                      alt="maono logo"
                      className="support-img"
                    />
                  </a>
                </div>
                <div>
                  <h2 className="support-title">Maono</h2>
                  <p>
                     Jamii ya watu wanao endesha shuhuli zao kwa kutumia tekinologia, kiswahili na tekinologia inawezekana.
            
                    
                  </p>
                 
                </div>
              </div>
              {/* Item */}
              <div className="support-item">
                <div>
                  <a
                    className="support-link"
                    href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Github}
                      alt="mikakati logo"
                      className="support-img"
                    />
                  </a>
                </div>
                <div>
                  <h2 className="support-title">Mikakati</h2>
                  <p>
                    DevHabiri ni tuvuti ambayo lengo lake niku chapisha makala za jinsi ambayo unaweza kutumia tekinologia katika mazingira yako ili kurahisisha shuhuli mbalimbali, hapa utapata mbinu na dondoo mbali mbali za jinsi ambanyo unaweza kutumia tekinologia.

Tuliamua kuchagua lugha ya kiswahili kutokana na uhaba wa makala kamahizi kwa lugha hii "Kiswahili".

Sababu nyingine kubwa zaidi ni kwamba lugha za tekinologia ya komputa zimeandikwa kwajili ya binadamua kusoma na kuelewa alafu mashine "komputa" huzitumia "execute" pale zinapo hitaji.

kwa mantiki hiyo basi sisi tumeamua kuzisimulia(chambua)/"fafanua" kwa lugha ya kiswahili

ili iwe rahisi kwa mtu yoyote yule amabaye anajua lughaa ya kiswahili kufuatilia makala hizi na hatimaye kunufaika nazo kwa namna moja au nyingine.
              
                  </p>
                 
               
                </div>
              </div>
              {/* Item */}
              <div className="support-item">
                <div>
                  <img
                    src={SocialMedia}
                    alt="various social media icons"
                    className="support-img"
                  />
                </div>
                <div>
                  <h2 className="support-title">Share na dunia</h2>
                  <p>
                    Kizuri kula na? kama umependa kazi zetu, share
                    makala zetu kwa marafiki, ndugu na jamaa, kwenye mitandao yote ya kijamii, na
                    kwingineko. Ni njia mojawapo ya kutuunga mkono!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blockquote-wrapper">
          <div className="blockquote">
            <h3>
              "Plato alisema utofauti unao tugawa sisi 
              binadamu na wanyama ni uwezo wetu waku ongea
               ambao wao hawana".Sisi tunaongezea "ni uwezo wetu wa
              kuandika ambao wao hawana!"
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              
            </h3>
            <h4>
              &mdash; <strong>DevHabari101</strong>
              <br aria-hidden="true" />
              
            </h4>
          </div>
        </div>
        <ContactForm />
      </Wrapper>{' '}
    </Layout>
  )
}

const Wrapper = styled.section`
  .section-title {
    font-size: 180%;
  }

  .support-container {
    margin: 5rem auto;
  }

  .support-title {
    font-size: 18px;
  }

  .support-item {
    margin: 3rem auto;
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0.5rem;
    }
  }

  .support-link {
    color: var(--primary-7);
    font-size: 110%;
    font-weight: 500;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: var(--primary-8);
    }
  }

  .support-img {
    width: 3rem;
    height: auto;
    margin-right: 3rem;
    display: block;
  }

  /* increase header size after 600px */
  @media all and (max-width: 600px) {
    .blockquote-wrapper,
    .section-title {
      text-align: left;
    }

    .support-item {
      flex-direction: column;
      text-align: center;
    }

    .support-img {
      margin: 0 0 0.8rem 0;
    }
  }

  /* center the blockquote in the page */
  .blockquote-wrapper {
    display: flex;
    padding: 0 20px;
    background-color: #292a2b;
  }

  /* Blockquote main style */
  .blockquote {
    position: relative;
    font-family: 'Barlow Condensed', sans-serif;
    max-width: 620px;
    margin: 80px auto;
    align-self: center;
  }

  .blockquote,
  h3,
  h4 {
    text-transform: none !important;
  }

  /* Blockquote header */
  .blockquote h3 {
    font-family: 'Montserrat', sans-serif;
    position: relative; /* for pseudos */
    color: var(--primary-6);
    font-size: 1rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    border: 2px solid #fff;
    border: solid 2px;
    border-radius: 20px;
    padding: 25px;
  }

  /* Blockquote right double quotes */
  .blockquote h3:after {
    content: '';
    position: absolute;
    border: 2px solid var(--primary-6);
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -60px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  .blockquote h3:before {
    content: '';
    position: absolute;
    width: 80px;
    border: 6px solid #292a2b;
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  /* increase header size after 600px */
  @media all and (min-width: 600px) {
    .blockquote h3 {
      font-size: 1.4rem;
      line-height: 1.2;
    }
  }

  /* Blockquote subheader */
  .blockquote h4 {
    position: relative;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    padding-top: 15px;
    z-index: 1;
    margin-left: 150px;
    padding-left: 12px;
  }

  .blockquote h4:first-letter {
    margin-left: -12px;
  }

  @media screen and (max-width: 800px) {
    .support-link {
      color: var(--primary-7);
      font-size: 140%;
      font-weight: 500;
      transition: color 0.1s ease-in-out;
    }
  }
`

export default contact
