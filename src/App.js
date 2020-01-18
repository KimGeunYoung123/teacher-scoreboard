import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
  state = {
    players: [
      { name: 'LDK', score: 5, id: 1},
      { name: 'HONG', score: 6, id: 2},
      { name: 'KIM', score: 7, id: 3},
      { name: 'PARK', score: 8, id: 4}
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
              <Player id={item.id} name={item.name} score={item.score} key={item.id}
                      removePlayer={this.handleRemovePlayer}></Player>
            )
          )
        }
      </div>
    );
  }
}

export default App;
