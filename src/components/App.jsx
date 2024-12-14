import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntryComponent(emojipedia) {
  return (
      <Entry 
       emoji= {emojipedia.emoji}
       name={emojipedia.name} 
       meaning={emojipedia.meaning}
       />

  )
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntryComponent)}

      {/*  <Entry 
       emoji={emojipedia[0].emoji}
       name={emojipedia[0].name} 
       meaning={emojipedia[0].meaning}
       />
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />
       <Entry
       emoji={emojipedia[2].emoji}
       name={emojipedia[2].name} 
       meaning={emojipedia[2].meaning}
      /> */}
      </dl>
    </div>
  );
}

export default App;
