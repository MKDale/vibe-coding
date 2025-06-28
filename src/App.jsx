import './App.css';
import background from './assets/background.png';
import logo from './assets/logo.png';

function App() {
  return (
    <div
      className="landing-bg min-h-screen w-full flex flex-col justify-between"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-start w-full px-10 pt-10">
        <a
          href="https://buildidealis.com/"
          target="_blank"
        >
          <img src={logo} alt="Idealis logo" className="h-12 md:h-16" style={{height: '100px', padding: '1em'}} />
        </a>
      </header>
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <h1 className="text-5xl md:text-7xl font-caudex tracking-widest mb-8 text-center" style={{letterSpacing: '0.15em'}}>
          COMING SOON
        </h1>
        <h2 className="font-caudex text-lg md:text-xl mb-4 text-center max-w-2xl">
          I'm almost there! Check back soon to see what I'm building using Cursor AI, Lovable, & Figma.
        </h2>
        <p className="font-syne text-sm md:text-base mb-8 text-center max-w-xl tracking-wide">
          In the meantime, feel free to drop me your email and I'll let you know when the first project drops.
        </p>
        <a
          href="https://buildidealis.com/contact/"
          className="px-8 py-3 bg-black text-white rounded-md font-syne text-base tracking-widest shadow hover:bg-gray-900 transition mb-8"
          target="_blank"
          style={{letterSpacing: '0.12em'}}
        ><button>Notify me!</button>
        </a>
      </main>
    </div>
  );
}

export default App;
