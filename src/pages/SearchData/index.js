
import React, { useState, useEffect } from 'react';
import './index.less'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import 'brace/ext/language_tools';

const SearchData = () => {
  const [value, setValue] = useState('');
  const complete = editor => {
    editor.completers.push({
      getCompletions: function (editors, session, pos, prefix, callback) {
        callback(null, completers);
      }
    });
  };
  const completers = [
    {
      name: 'word',
      value: 'word',
      score: 100,
      meta: 'keyword'
    }
  ];

  const onChange = (val) => { console.log(val); setValue(val) }
  return (
    <>
      <AceEditor
        mode="mysql"
        theme="github"
        wrapEnabled={true}
        tabSize={2}
        fontSize={18}
        showGutter={true}
        debounceChangePeriod={60}
        onChange={onChange}
        value={value}
        enableBasicAutocompletion
        enableLiveAutocompletion
        enableSnippets
        showLineNumbers
        tabSize={2}
        onLoad={complete}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "100%", height: "600px", fontSize: "18px" }}
      />
    </>
  )
}

export default SearchData;