import { useState, useCallback, useEffect } from 'react';

export const useAlertWithTimer = (defaultDuration = 3000) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'normal' | 'danger'>('normal');
  const [duration, setDuration] = useState<number>(defaultDuration);

  const showAlert = useCallback((msg: string, alertType: 'normal' | 'danger' = 'normal', alertDuration?: number) => {
    setMessage(msg);
    setType(alertType);
    setVisible(true);
    setDuration(alertDuration || defaultDuration);
  }, [defaultDuration]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  return { visible, message, type, showAlert };
};
