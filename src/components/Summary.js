import React from "react";
import "./Summary.css";

function Summary() {
  return (
    <>
      <header role='banner'>
        <h1>Summary</h1>
      </header>

      <section className='summary-stats'>
        <header>
          <h2>Stats</h2>
        </header>

        <h3>Run Frequency</h3>
        <img
          src='https://placehold.it/600x300?text=line%20graph%20run%20frequency'
          alt='chart showing run frequency'
        />

        <h3>Badges</h3>
        <div className="summary-stats__badges">
          <img
          src='https://placehold.it/25x25?text=Badge'
          alt='jogger'
          title="jogger"
          />
          <img
          src='https://placehold.it/25x25?text=Badge'
          alt='runner'
          title="runner"
          />
        </div>
        <div className="summary-stats__pr">
          <h3>Personal Records</h3>
          <ul>
            <li><strong>5k:</strong> 19:00</li>
            <li><strong>10k:</strong> 47:00</li>
            <li><strong>15k:</strong> --:--</li>
            <li><strong>25k:</strong> --:--:--</li>
            <li><strong>30k:</strong> --:--:--</li>
            <li><strong>half-marathon:</strong> --:--:--</li>
            <li><strong>marathon:</strong> --:--:--</li>
          </ul>
        </div>
      </section>

      <section className='summary-entries'>
        <header>
          <h2>Runs</h2>
        </header>
        
        <div className='summary-entries__controls'>
          <label htmlFor='search'>Search: </label>
          <input name='search' id='search' placeholder='search by location' />

          <label htmlFor='sort'>Sort by: </label>
          <select name='sort' id='sort'>
            <option>distance</option>
            <option>time</option>
            <option>weather</option>
            <option>terrain</option>
            <option>location</option>
          </select>
        </div>

        <section>
          <header>
            <h3>Philadelphia, PA</h3>
            <h3>01/01/2021</h3>
          </header>

          <p>
            <strong>Distance:</strong> 5k
          </p>
          <p>
            <strong>Time:</strong> 21:00
          </p>
          <p>
            <strong>Weather:</strong> Clear
          </p>
          <p>
            <strong>Surface:</strong> Pavement
          </p>
          <p>
            <strong>Terrain:</strong> Flat
          </p>
          <p>
            <strong>Notes:</strong>
            Training run. Felt sluggish at the start, but my stride opened up
            about 5 minutes in.
          </p>
          <div className="summary-entries__buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </section>

        <section>
          <header>
            <h3>Cinnaminson, NJ</h3>
            <h3>12/31/2020</h3>
          </header>
          <p>
            <strong>Distance:</strong> 5k
          </p>
          <p>
            <strong>Time:</strong> 21:00
          </p>
          <p>
            <strong>Weather:</strong> Clear
          </p>
          <p>
            <strong>Surface:</strong> Pavement
          </p>
          <p>
            <strong>Terrain:</strong> Flat
          </p>
          <p>
            <strong>Notes:</strong>
            Training run. Felt sluggish at the start, but my stride opened up
            about 5 minutes in.
          </p>
          <div className="summary-entries__buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </section>

        <section>
          <header>
            <h3>HaddonField, NJ</h3>
            <h3>12/26/2020</h3>
          </header>
          <p>
            <strong>Distance:</strong> 5k
          </p>
          <p>
            <strong>Time:</strong> 21:00
          </p>
          <p>
            <strong>Weather:</strong> Clear
          </p>
          <p>
            <strong>Surface:</strong> Pavement
          </p>
          <p>
            <strong>Terrain:</strong> Flat
          </p>
          <p>
            <strong>Notes:</strong>
            Training run. Felt sluggish at the start, but my stride opened up
            about 5 minutes in.
          </p>
          <div className="summary-entries__buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </section>

        <section>
          <header>
            <h3>Cinnaminson, NJ</h3>
            <h3>12/31/2020</h3>
          </header>
          <p>
            <strong>Distance:</strong> 5k
          </p>
          <p>
            <strong>Time:</strong> 21:00
          </p>
          <p>
            <strong>Weather:</strong> Clear
          </p>
          <p>
            <strong>Surface:</strong> Pavement
          </p>
          <p>
            <strong>Terrain:</strong> Flat
          </p>
          <p>
            <strong>Notes:</strong>
            Training run. Felt sluggish at the start, but my stride opened up
            about 5 minutes in.
          </p>
          <div className="summary-entries__buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Summary;
