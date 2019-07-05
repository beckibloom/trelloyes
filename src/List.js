import React from 'react';
import Card from './Card.js';
import './List.css';


function List(props) {
    const cardList = props.cards.map((card) => 
        <Card 
            key={card.id} 
            id={card.id}
            title={card.title} 
            content={card.content}
            handleDelete={props.handleDelete}
        />
    )

    return (
        <section className='List' id={props.id}>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cardList}
                <button 
                    type="button" 
                    className="List-add-button"
                    onClick={() => props.handleAddRandom(props.id)}>
                + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;