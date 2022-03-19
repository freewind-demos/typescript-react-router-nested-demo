import React, {FC} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {Editor} from './Editor';
import {Previewer} from './Previewer';
import {Home} from './Home';

type Props = {}

export const App: FC<Props> = () => {
  return <div>
    <h1>Hello</h1>
    <Link to='/'>to home</Link>
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='editor' element={<Editor/>}/>
        <Route path='previewer' element={<Previewer/>}/>
      </Route>
    </Routes>
  </div>;
}
