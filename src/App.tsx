import Home from 'views/Home';

function App() {
  // DISCLAIMER:
  // I would usually add here the application router with some router guard abstraction for authenticated applications.
  // Since the challenge only requires one view, I directly load the only one available here.

  return (
    <>
      <Home />
    </>
  );
}

export default App;
