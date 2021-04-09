import { Category } from '@material-ui/icons';
import React from 'react';
import Offered from './Offered';
import View from './View';
import Categories from './Categories';
import Discuss from '../Component/Student/comp/Discuss';
import Path from '../Component/Assets/image/Path.png';

export default function Courses() {
  return (
    <div>
      <Offered />
      <img className='sideArrows' src={Path}></img>
      <img className='sideArrows2' src={Path}></img>
      <View />
      <Categories />
      <Discuss />
    </div>
  );
}
