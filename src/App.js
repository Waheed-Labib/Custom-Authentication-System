import './App.css';
import WelcomeSection from './sections/welcome-section/WelcomeSection';
import ActionSection from './sections/action-section/ActionSection';

function App() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className='w-full md:w-1/2 min-h-[50vh]'>
        <WelcomeSection></WelcomeSection>
      </div>

      <div className='w-full md:w-1/2'>
        <ActionSection></ActionSection>
      </div>
    </div>
  );
}

export default App;
