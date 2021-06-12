import React from 'react';
import { Button, Input, Toggle } from './components';
import { HomeIcon, HomeIconPressed, CardsIcon, CardsIconPressed, PlusIconPressed, SettingsIcon, SettingsIconPressed } from './components/Icons';
import './main.scss';

function App() {

  return (
    <div className="App">

      {/* BUTTONS */}
      <section className="section section--first">
        <div className="container">
          <h1>Buttons</h1>
          <div className="items-group">

            <div className="items__item">
              <Button>
                <HomeIconPressed size={26} />
              </Button>
            </div>

            <div className="items__item">
              <Button curved>
                <HomeIcon size={26} />
              </Button>
            </div>

            <div className="items__item">
              <Button soft circle className='custom-classname'>
                <CardsIcon size={26} />
              </Button>
            </div>


            <div className="items__item">
              <Button soft>
                <HomeIcon size={26} />
              </Button>
            </div>

            <div className="items__item"></div>

            {/* With word */}
            <div className="items__item">
              <Button>
                Press me
              </Button>
            </div>

            <div className="items__item">
              <Button curved>
                Press me
              </Button>
            </div>

            <div className="items__item">
              <Button soft circle className='custom-classname'>
                Press me
              </Button>
            </div>


            <div className="items__item">
              <Button soft>
                Press me
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ICONS */}
      <section className="section section--first">
        <div className="container">
          <h2>Icons</h2>
          <div className="items-group">

            <div className="items__item">
              <HomeIconPressed size={26}  className="custom-class"/>  <HomeIcon size={26} />
            </div>

            <div className="items__item">
              <CardsIcon />
              <CardsIconPressed />
            </div>

            <div className="items__item">
              <PlusIconPressed />
            </div>


            <div className="items__item">
              <SettingsIcon />
              <SettingsIconPressed />
            </div>

          </div>
        </div>
      </section>


      {/* INPUTS */}
      <section className="section section--first">
        <div className="container">
          <h3>Inputs</h3>
          <div className="items__item-full">
            <Input placeholder="Placeholer..." onChange={(e) => { console.log(e.target.value) }} icon={<HomeIconPressed />} />
          </div>

          <br />

          <div className="items-group">

            <div className="items__item">
              <Input placeholder="____/____/____/____" name="card" onChange={(e) => { console.log(e.target.value) }} icon={<CardsIcon size={18} />} />
            </div>

            <div className="items__item">
              <Input placeholder="Some text..." value="Some value (Read only)" />
            </div>


            <div className="items__item">
              <Toggle text="Check me" data-test="test" name="check-rights"/>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
