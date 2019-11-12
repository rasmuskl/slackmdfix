import React from 'react';
import './App.css';
import slacifyMarkdown from 'slackify-markdown';
import copy from 'copy-to-clipboard';

function App() {
  const [text, setText] = React.useState('');

  function copyText() {
    copy(slacifyMarkdown(text));
  }

  return (
    <div>
      <div style={{background: '#555', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontWeight: 'bold', padding: 10}}>Slack Markdownifier</div>
        <div style={{padding: "10px 20px", background: '#333', cursor: 'pointer'}} onClick={copyText}>Copy Result</div>
      </div>

      <div className="App" style={{display: 'flex', width: '100%', height: '100vh', alignItems: 'stretch'}}>
        <textarea style={{flex: 1}} value={text} onChange={e => setText(e.target.value)}></textarea>
        <div style={{flex: 1, background: '#ddd'}}>{slacifyMarkdown(text)}</div>
      </div>
    </div>
  );
}

export default App;
