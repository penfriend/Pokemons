import React, { useState, memo, Component } from 'react';

export default class extends Component {

  shouldComponentUpdate(nextProps) {
    // console.log('nextProps', nextProps);
    // console.log('props', this.props);

    return nextProps.name !== this.props.name ||
    nextProps.id !== this.props.id ||
    nextProps.catched !== this.props.catched

  }
  render (){
    const { id, catched, name, toggleCatchedPokemon } = this.props;
    // const [isTurnTowardsUs, setIsTurnTowardsUs] = useState(true);

    const handleClick = () => {
      // setIsTurnTowardsUs(!isTurnTowardsUs);
    }

    function handleCatch(){
      if(toggleCatchedPokemon){
        toggleCatchedPokemon(id);
      }
    }

    const imageSrc = true
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;

    const style = {
      backgroundColor: catched ? 'red' : 'grey'
    };

    console.log('rendered', id);
    
    return (
      <div className="card" style={style}>
        <button onClick={handleCatch}>{catched ? "Leave Pokemon" : "Catch Pokemon"}</button>
        <h3 className="card__id">#{id}</h3>
        <img
          src={imageSrc}
          onClick={handleClick}
          className="card__image"
        />
        <p className="card__text">{name}</p>
      </div>
    );
  }
}
// export default memo(Card);

// const obj = true&& function(1)

// obj = {
//   a: () => 123,
// }

// const result = obj.a && obj.a();
// const result = obj.b && obj.b();

// false
// 0
// NaN
// ''
// null
// undefined