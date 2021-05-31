import React from 'react';
import Grid from './Grid';
import Controls from './Controls';
import Presets from './Presets';
import { GENERATION_TIME, createWorld, nextGeneration, shuffle } from '../game';
import { loadPreset } from '../presets';
import $ from 'jquery';
class Game extends React.Component {

  state = {
    world: loadPreset('line'),
    generation: 0,
    playing: false,
    preset: 'line'
  }

  changeState = (world, generation, preset) => this.setState({
    world: world,
    generation: generation,
    preset: preset
  });

  onChange = world => this.changeState(world, this.state.generation + 1, this.state.preset);

  onClear = () => this.changeState(createWorld(), 0, this.state.preset);

  onShuffle = () => this.changeState(shuffle(this.state.world), 0, this.state.preset);

  onPreset = preset => this.changeState(loadPreset(preset), 0, preset);

  onNext = () => {
    if(this.state.preset === "key") {
      if(this.state.generation === 100) {
        this.onStop();
        $('#divGameInnerContainer').css('opacity', 0);
      }
    }
    this.onChange(nextGeneration(this.state.world));
  }

  onPlay = () => {
    this.setState({ playing: true });
    this.interval = setInterval(() => this.onNext(), GENERATION_TIME);
  }

  onStop = () => {
    this.setState({ playing: false });
    clearInterval(this.interval);
  }

  render() {
    const { world, playing } = this.state;
    return (
      <div id="divGameInnerContainer">
        <Grid world={world} onChange={this.onChange} />
        <p>Generation: {this.state.generation}</p>
        <Controls
          clear={this.onClear}
          next={this.onNext}
          play={this.onPlay}
          stop={this.onStop}
          shuffle={this.onShuffle}
          playing={playing}
        />
        <Presets
          load={this.onPreset}
          playing={playing}
        />
      </div>
    );
  }

}

export default Game;
