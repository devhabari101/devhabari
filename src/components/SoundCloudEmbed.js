import React from 'react';

const SoundCloudEmbed = ({ trackUrl }) => {
  return (
    <div>
      <iframe 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
      </iframe>
      <div 
        style={{
          fontSize: '10px', 
          color: '#cccccc', 
          lineBreak: 'anywhere', 
          wordBreak: 'normal', 
          overflow: 'hidden', 
          whiteSpace: 'nowrap', 
          textOverflow: 'ellipsis', 
          fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: 100
        }}
      >
        <a 
          href="https://soundcloud.com/masjidtaqwa-ilala" 
          title="masjidtaqwa ilala" 
          target="_blank" 
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          masjidtaqwa ilala
        </a> 
        · 
        <a 
          href="https://soundcloud.com/masjidtaqwa-ilala/khutba-ya-ijumaa_maalim-juma_mmanga" 
          title="Khutba ya ijumaa_maalim _juma_mmanga_masjid_taqwa_ilala_bungoni_tutubu_kwa_Allah" 
          target="_blank" 
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Khutba ya ijumaa_maalim _juma_mmanga_masjid_taqwa_ilala_bungoni_tutubu_kwa_Allah
        </a>
      </div>
    </div>
  );
};

export default SoundCloudEmbed;
