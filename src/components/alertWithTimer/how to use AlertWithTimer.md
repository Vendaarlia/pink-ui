// how to use Alert with timer
import React from 'react';
import AlertTime from './AlertTime';
import { useAlertTime } from './useAlertTime';

const App: React.FC = () => {
  const { visible, message, type, showAlert } = useAlertTime();

  return (
    <div>
      <button onClick={() => showAlert('This is a normal timed alert', 'normal')}>
        Show Normal Timed Alert
      </button>
      <button onClick={() => showAlert('This is a danger timed alert', 'danger', 5000)}>
        Show Danger Timed Alert (5s)
      </button>
      {visible && <AlertTime message={message} type={type} />}
    </div>
  );
};

export default App;
