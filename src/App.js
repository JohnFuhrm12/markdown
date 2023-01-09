import './App.css';

function App() {
  return (
    <>
    <div className="container">
      <div className='sectionContainer'>
        <h2 className='title' id='editorTitle'>Editor</h2>
        <textarea id='editor'/>
      </div>
      <div className='sectionContainer'>
        <h2 className='title'>Preview</h2>
        <div id='preview'/>
      </div>
    </div>
    </>
  );
}

export default App;
