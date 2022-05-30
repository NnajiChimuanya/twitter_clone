import React from 'react';
import Sidebar from './sidebar/Sidebar';
import "./app.css"
import Feed from './feed/Feed';
import Widgets from './widget/Widget';

function App() {
  return (


    <div className="app">
      < Sidebar />

      < Feed />

      < Widgets />

        
    </div>

    
  );
}

export default App;


