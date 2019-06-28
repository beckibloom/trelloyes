import React from 'react';
import List from './List.js';
import STORE from './store.js';
import './App.css';

function App() {
  const lists = STORE.lists.map((list) => {
    for (let i = 0; i < STORE.lists.length; i++) {
      let cards = STORE.lists[i].cardIds;
      let cardArray = [];
      for (let j = 0; j < cards.length; j++) {
        let cardId = cards[j];
        let oneCard = STORE.allCards[cardId];
        cardArray.push(oneCard);
      }
    return (
      <List key={list.id} header={list.header} cards={cardArray} />
      )
    }
  })

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;