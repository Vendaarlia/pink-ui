// how to use Alert
import React from 'react';
import Alert from './Alert';
import { useAlert } from './useAlert';

const App: React.FC = () => {
  const { visible, message, type, showAlert, hideAlert } = useAlert();

  return (
    <div>
      <button onClick={() => showAlert('This is a normal alert', 'normal')}>
        Show Normal Alert
      </button>
      <button onClick={() => showAlert('This is a danger alert', 'danger')}>
        Show Danger Alert
      </button>
      {visible && (
        <Alert message={message} type={type} onClose={hideAlert} />
      )}
    </div>
  );
};

export default App;
