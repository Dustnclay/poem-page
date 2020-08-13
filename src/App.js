import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Poem Page</h1>
      <h2>
        The Learnd astronomer
      </h2>
    <div>
    <img src="data:image/jpeg;base64,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"/>
    </div>  
    <h3>
        When I heard the learn’d astronomer,<br/>
        When the proofs, the figures, were ranged in columns before me,<br/>
        When I was shown the charts and diagrams, to add, divide, and measure them,<br/>
        When I sitting heard the astronomer where he lectured with much applause in the lecture-room,<br/>
        How soon unaccountable I became tired and sick,<br/>
        Till rising and gliding out I wander’d off by myself,<br/>
        In the mystical moist night-air, and from time to time,<br/>
        Look’d up in perfect silence at the stars.<br/>
      </h3>
      <h3>
        This poem is brought to you by the late great Walt Whitman
      </h3>
      <h2>
        The Calf Path
      </h2>
      <img/>
      <h3>
        One day through the primeval wood
        A calf walked home as good calves should;
        But made a trail all bent askew,
        A crooked trail as all calves do.
        Since then three hundred years have fled,
        And I infer the calf is dead.
        But still he left behind his trail,
        And thereby hangs my moral tale.
        The trail was taken up next day
        By a lone dog that passed that way;
        And then a wise bell-wether sheep
        Pursued the trail oer vale and steep,
        And drew the flock behind him, too,
        As good bell-wethers always do.
        And from that day, oer hill and glade,
        Through those old woods a path was made,
        And many men wound in and out,
        And dodged and turned and bent about,
        And uttered words of righteous wrath
        Because twas such a crooked path;
        But still they followed—do not laugh—
        The first migrations of that calf,
        And through this winding wood-way stalked
        Because he wobbled when he walked.
        This forest path became a lane,
        That bent, and turned, and turned again.
        This crooked lane became a road,
        Where many a poor horse with his load
        Toiled on beneath the burning sun,
        And traveled some three miles in one.
        And thus a century and a half
        They trod the footsteps of that calf.
        The years passed on in swiftness fleet.
        The road became a village street;
        And this, before men were aware,
        A citys crowded thoroughfare,
        And soon the central street was this
        Of a renowned metropolis;
        And men two centuries and a half
        Trod in the footsteps of that calf.
        Each day a hundred thousand rout
        Followed this zigzag calf about,
        And oer his crooked journey went
        The traffic of a continent.
        A hundred thousand men were led
        By one calf near three centuries dead.
        They followed still his crooked way,
        And lost one hundred years a day,
        For thus such reverence is lent
        To well-established precedent.
        A moral lesson this might teach
        Were I ordained and called to preach;
        For men are prone to go it blind
        Along the calf-paths of the mind,
        And work away from sun to sun
        To do what other men have done.
        They follow in the beaten track,
        And out and in, and forth and back,
        And still their devious course pursue,
        To keep the path that others do.
        They keep the path a sacred groove,
        Along which all their lives they move;
        But how the wise old wood-gods laugh,
        Who saw the first primeval calf.
        Ah, many things this tale might teach—
        But I am not ordained to preach.
      </h3>
      <h3>
        The late great Sam Walter Foss
      </h3>
      
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
