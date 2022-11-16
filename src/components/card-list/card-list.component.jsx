import { Component } from 'react';
// When you return a component, make sure there is only one top level component return that is 
// one top level top HTML tag.

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div>
                {
                    monsters.map((monster) => {
                        <div key={monster.id}>   
                            <h1>{monster.name}</h1>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default CardList;