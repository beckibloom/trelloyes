import React from 'react';
import List from './List.js';
import STORE from './store.js';
import './App.css';

// This code was the given 'random card' function
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
  + Math.random().toString(36).substring(2, 4);  
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {
  state = {
    store: STORE,
  };

  renderLists = () => {
    const lists = this.state.store.lists.map((list) => {
      for (let i = 0; i < this.state.store.lists.length; i++) {
        let cards = this.state.store.lists[i].cardIds;
        let cardArray = [];
        for (let j = 0; j < cards.length; j++) {
          let cardId = cards[j];
          let oneCard = this.state.store.allCards[cardId];
          cardArray.push(oneCard);
        }
        return (
          <List 
            key={list.id} 
            id={list.id} 
            header={list.header} 
            cards={cardArray}
            handleAddRandom={this.handleAddRandom}
            handleDelete={this.handleDelete}
          />
        )
      }
    })
    return lists;
  }

handleDelete = (cardId) => {
  console.log('handleDelete function ran');
  // Does this line make these into two variables?
  const { lists, allCards } = this.state.store;
  const newLists = lists.map(list => ({
    ...list,
    cardIds: list.cardIds.filter(id => id !== cardId)
  }));
  const newCards = omit(allCards, cardId);
  this.setState({
    store: {
      lists: newLists,
      allCards: newCards
    }
  })
}

//Why does this add the random card to every list?
handleAddRandom = (listId) => {
  console.log('handleAddRandom function ran')
  const newCard = newRandomCard()
  const newLists = this.state.store.lists.map(list => {
    if (list.id === listId) {
      return {
        ...list,
        cardIds: [...list.cardIds, newCard.id]
      };
    }
    return list;
  })
  this.setState({
    store: {
      lists: newLists,
      allCards: {
        ...this.state.store.allCards,
        [newCard.id]: newCard
      }
    }
  })
};

render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.renderLists()}
        </div>
      </main>
    )
  };
}

export default App;