import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
  state = {
    players: [
      { name: 'LDK', id: 1},
      { name: 'HONG', id: 2},
      { name: 'KIM', id: 3},
      { name: 'PARK', id: 4}
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemove: ', id);
    // 해당되는 id를 삭제
    this.setState(prevState => {
      const players = prevState.players.filter(item => item.id !== id);
      // es6 short hand property: 키와  값이 같으면 한쪽 생략
      return { players }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />
        {
          this.state.players.map((item) => (
              <Player id={item.id} name={item.name} key={item.id}
                      removePlayer={this.handleRemovePlayer}></Player>
            )
          )
        }
      </div>
    );
  }
}

export default App;
