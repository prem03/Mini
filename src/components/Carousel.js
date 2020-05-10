import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://media.gettyimages.com/photos/cricket-the-game-moment-picture-id642535304?s=2048x2048',
    altText: 'Slide 1',
    //caption: 'Cricket',
    header: 'Cricket',
    key: '1'
  },
  {
    src: 'https://media.gettyimages.com/photos/soccer-game-moment-with-goalkeeper-picture-id505988052?s=2048x2048',
    altText: 'Slide 2',
   // caption: 'Football',
    header: 'Football',
    key: '2'
  },
  {
    src: 'https://media.gettyimages.com/photos/field-hockey-player-in-mid-action-during-hockey-game-picture-id503545170?s=2048x2048',
    altText: 'Slide 3',
   // caption: 'Basketball',
    header: 'Basketball',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;