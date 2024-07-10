import { useState, useCallback } from 'react';

export const useAlert = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'normal' | 'danger'>('normal');

  const showAlert = useCallback((msg: string, alertType: 'normal' | 'danger' = 'normal') => {
    setMessage(msg);
    setType(alertType);
    setVisible(true);
  }, []);

  const hideAlert = useCallback(() => {
    setVisible(false);
  }, []);

  return { visible, message, type, showAlert, hideAlert };
};
