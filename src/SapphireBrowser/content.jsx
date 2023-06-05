import React, { useEffect } from 'react';

const Content = () => {
  useEffect(() => {
    const loadGoogleSearchScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cse.google.com/cse.js?cx=506207fb323e94bf0';
      script.async = true;
      document.body.appendChild(script);
    };

    loadGoogleSearchScript();

    return () => {
      const script = document.querySelector('script[src="https://cse.google.com/cse.js?cx=877b9fcfa5ccf4f76"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="flexContainer">
      <section>
        <div className="gcse-search"></div>
      </section>
    </main>
  );
};

export default Content;
