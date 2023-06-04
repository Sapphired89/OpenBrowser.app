import React, { lazy, Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader'; // Import the ClipLoader component
import './App.css';

const LazyHeader = lazy(() => import('./SapphireBrowser/header'));
const LazyContent = lazy(() => import('./SapphireBrowser/content'));
const LazyFooter = lazy(() => import('./SapphireBrowser/footer'));

function App() {
  const override = ''; // Define the `override` variable with the appropriate value or CSS class

  return (
    <div className="container">
      <Suspense fallback={<ClipLoader css={override} size={50} color={'#123abc'} />}>
        <LazyHeader />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}> {/* Add a fallback component or message */}
        <LazyContent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}> {/* Add a fallback component or message */}
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default App;

