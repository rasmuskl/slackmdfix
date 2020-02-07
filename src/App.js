import React from 'react';
import './App.css';
import slacifyMarkdown from 'slackify-markdown';
import copy from 'copy-to-clipboard';

function App() {
  const [text, setText] = React.useState('');
  const [copiedRecently, setCopiedRecently] = React.useState(false);

  function copyText() {
    copy(transformText(text));
    setCopiedRecently(true);
    setTimeout(() => {
      setCopiedRecently(false);
    }, 2000);
  }

  return (
    <div>
      <div style={{background: '#555', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontWeight: 'bold', padding: 10}}>Slack Markdownifier</div>
        <div style={{padding: "10px 20px", background: '#333', cursor: 'pointer'}} onClick={copyText}>{copiedRecently ? 'Copied Result' : 'Copy Result'}</div>
      </div>

      <div className="App" style={{display: 'flex', width: '100%', height: '100vh', alignItems: 'stretch'}}>
        <textarea style={{flex: 1}} value={text} onChange={e => setText(e.target.value)}></textarea>
        <div style={{flex: 1, background: '#ddd', whiteSpace: 'pre', textAlign: 'left', overflowX: 'scroll'}}>{transformText(text)}</div>
      </div>
    </div>
  );
}

function transformText(text) {
  let result = slacifyMarkdown(text);
  result = stripInvisibleSpaces(result);
  return result;
}

function stripInvisibleSpaces(text) {
  return text.replace(/[\u200b]/g, '');
}

export default App;