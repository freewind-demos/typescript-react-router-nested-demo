import React, {FC} from 'react';
import {Link} from 'react-router-dom';

type Props = {}

export const Editor: FC<Props> = ({}) => {
  return <div>
    <div>Editor</div>
    <div>
      <div>This is the editor</div>
      <div><Link to='/previewer'>to previewer</Link></div>
    </div>
  </div>;
}
