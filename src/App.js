import { useState } from 'react'
import * as marked from "https://cdn.skypack.dev/marked@4.0.0";
import './App.css';

function App() {
  const [state, setState] = useState({
    content: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  });


  let handleChange = (event) => {
    const target = event.target
    const name = target.name;
    const value = target.value;
    console.log(value);
    setState({
      [name]: value
    })
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="toolbar"><i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Editor<i class="fa fa-arrows-alt"></i></div>
        <textarea id="textArea" name="content" value={state.content} onChange={handleChange} placeholder="Type Here">
       
        </textarea>
      </header>
      <div className='converter'></div>
      <body className='previewWrap'>
        <div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(state.content)}}></div>
        </div>
      </body>
    </div>
  );
}

export default App;
