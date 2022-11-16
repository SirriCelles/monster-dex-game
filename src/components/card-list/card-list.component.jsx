import { Component } from 'react';
// When you return a component, make sure there is only one top level component return that is 
// one top level top HTML tag.
import Card from '../card/card.component';
import './card-list.styles.css';
class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        return (
                            <Card monster={monster}></Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;