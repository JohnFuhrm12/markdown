import './App.css';
import { useEffect, useState } from 'react';

import {marked} from 'marked';

function App() {
  const initialText = `
  # Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:`

  const [text, setText] = useState(initialText);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(marked.parse(text));
  })

  return (
    <>
    <div className="container">
      <div className='sectionContainer'>
        <h2 className='title' id='editorTitle'>Editor</h2>
        <textarea value={text} onChange={(e) => {setText(e.target.value)}} id='editor'/>
      </div>
      <div className='sectionContainer'>
        <h2 className='title'>Preview</h2>
        <div id='preview' dangerouslySetInnerHTML={{__html: markdown}}></div>
      </div>
    </div>
    </>
  );
}

export default App;
