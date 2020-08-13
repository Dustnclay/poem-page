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
    <img src={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1492446190781-58ac4285911d%3Fixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fimages%2Fnature%2Fstar&tbnid=hfm4Ol-Pmoj5xM&vet=12ahUKEwjt0vuFopfrAhWC0FMKHcRmBBYQMygEegUIARDZAQ..i&docid=4W2o0DTC0j-uQM&w=1000&h=721&q=stars%20images&ved=2ahUKEwjt0vuFopfrAhWC0FMKHcRmBBYQMygEegUIARDZAQ'} alt='stars'/>
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
