import Category from './components/Category';
import Food from './components/Food';
import HeadlineCard from './components/HeadlineCard';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
