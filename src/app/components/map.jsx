import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3904192571713!2d75.8756560751079!3d11.306147988876665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65cc2c705227b%3A0x97125bf5007f7b3!2sSree%20Padmam%20Auditorium!5e0!3m2!1sen!2sae!4v1735763713190!5m2!1sen!2sae" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
