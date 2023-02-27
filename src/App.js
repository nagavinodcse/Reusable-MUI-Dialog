import React from 'react';
import './style.css';
import useDialog from './useDialog';

export default function App() {
  const [DialogComponent, handleClickOpen, DialogContainer] = useDialog();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleClickOpen}>Create New Dialog</button>
      <DialogContainer />
    </div>
  );
}
