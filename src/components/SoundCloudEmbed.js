import React from 'react';
import styled from 'styled-components';

const SoundCloudEmbedWrapper = styled.div`
  width: 50%;
  height: 400px; /* Adjust this value to get the desired height */
  position: relative;
  overflow: hidden;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .soundcloud-details {
    font-size: 10px;
    color: #cccccc;
    line-break: anywhere;
    word-break: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif;
    font-weight: 100;
    margin-top: 0.5rem;
  }

  .soundcloud-link {
    color: #cccccc;
    text-decoration: none;
  }
`;

const SoundCloudEmbed = ({ trackUrl }) => {
  return (
    <SoundCloudEmbedWrapper>
      <iframe 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
      </iframe>
      <div className="soundcloud-details">
        <a 
          href="https://soundcloud.com/masjidtaqwa-ilala" 
          title="masjidtaqwa ilala" 
          target="_blank" 
          className="soundcloud-link"
        >
          masjidtaqwa ilala
        </a> 
        · 
        <a 
          href="https://soundcloud.com/masjidtaqwa-ilala/khutba-ya-ijumaa_maalim-juma_mmanga" 
          title="Khutba ya ijumaa_maalim _juma_mmanga_masjid_taqwa_ilala_bungoni_tutubu_kwa_Allah" 
          target="_blank" 
          className="soundcloud-link"
        >
          Khutba ya ijumaa_maalim _juma_mmanga_masjid_taqwa_ilala_bungoni_tutubu_kwa_Allah
        </a>
      </div>
    </SoundCloudEmbedWrapper>
  );
};

export default SoundCloudEmbed;
