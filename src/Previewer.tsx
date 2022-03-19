import React from 'react';
import {FC} from 'react';
import {Link} from 'react-router-dom';

type Props = {}

export const Previewer: FC<Props> = ({}) => {
  return <div>
    <h3>Previewer</h3>
    <div>
      <div>This is the previewer</div>
      <div><Link to='/editor'>to editor</Link></div>
    </div>
  </div>;
}
