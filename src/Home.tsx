import React, {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';

type Props = {}

export const Home: FC<Props> = ({}) => {
  return <div>
    <h2>Home</h2>
    <ul>
      <li><Link to="/editor">Editor</Link></li>
      <li><Link to="/previewer">Previewer</Link></li>
    </ul>
    <Outlet/>
  </div>;
}
