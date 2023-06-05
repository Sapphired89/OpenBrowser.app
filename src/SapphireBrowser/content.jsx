import React, { useEffect, useState } from 'react';

const Content = () => {
  const [openLink, setOpenLink] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    const link = event.target.href;
    setOpenLink(link);
  };

  useEffect(() => {
    const loadGoogleSearchScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cse.google.com/cse.js?cx=877b9fcfa5ccf4f76';
      script.async = true;
      document.body.appendChild(script);
    };

    loadGoogleSearchScript();

    return () => {
      const script = document.querySelector(
        'script[src="https://cse.google.com/cse.js?cx=877b9fcfa5ccf4f76"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (openLink) {
      // Open link in mini-browser or perform any custom logic
      console.log('Opening link:', openLink);

      // Reset openLink state after handling the link
      setOpenLink('');
    }
  }, [openLink]);

  return (
    <main className="flexContainer">
      <section>
        <div className="gcse-search">
          {/* Add an event listener to the search box */}
          <a href="https://example.com" onClick={handleClick}>
            Open Link in Mini-Browser
          </a>
        </div>
      </section>
    </main>
  );
};

export default Content;
