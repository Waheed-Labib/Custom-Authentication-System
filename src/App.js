import { useState } from 'react';
import './App.css';
import WelcomeSection from './sections/welcome-section/WelcomeSection';
import ActionSection from './sections/action-section/ActionSection';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className='w-full py-12 md:w-1/2 min-h-[50vh] flex items-center justify-center'>
        <WelcomeSection isLoggedIn={isLoggedIn}></WelcomeSection>
      </div>

      <div className='w-full md:w-1/2'>
        <ActionSection isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></ActionSection>
      </div>
    </div>
  );
}

export default App;
