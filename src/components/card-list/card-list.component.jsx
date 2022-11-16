import { Component } from 'react';
// When you return a component, make sure there is only one top level component return that is 
// one top level top HTML tag.
import './card-list.styles.css';
class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        const { name, email, id } = monster;
                        return (
                            <div key={id} className='card-container'>  
                                <img 
                                    alt={`monster ${monster.name}`} 
                                    src={`https://robohash.org/${id}?set=set2&size=180x180`}></img> 
                                <h2>{name}</h2>
                                <p>{email}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}

export default CardList;