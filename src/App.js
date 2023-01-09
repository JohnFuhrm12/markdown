import './App.css';
import { useEffect, useState } from 'react';

import {marked} from 'marked';

function App() {
  const initialText = 
  `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![image](https://res.cloudinary.com/dvmw658s9/image/upload/v1673226308/Portfolio/akxqcneh4mjpd3peo6pm.jpg)`;

  const [text, setText] = useState(initialText);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(marked.parse(text));
  })

  useEffect(() => {
    document.getElementById('preview').innerHTML = markdown;
  }, [markdown])

  return (
    <>
    <div className="container">
      <div className='sectionContainer'>
        <h2 className='title' id='editorTitle'>Editor</h2>
        <textarea value={text} onChange={(e) => {setText(e.target.value)}} id='editor'/>
      </div>
      <div className='sectionContainer'>
        <h2 className='title'>Preview</h2>
        <div id='preview'></div>
      </div>
    </div>
    </>
  );
}

export default App;
