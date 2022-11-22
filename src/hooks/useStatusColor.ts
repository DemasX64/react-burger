import { useEffect, useState } from 'react';

const useStatusColor = (status:'done' | 'pending' | 'cancel' | null | undefined) => {
  const [statusColor, setStatusColor] = useState('');
  const [statusText, setStatusText] = useState('');
  useEffect(() => {
    switch (status) {
      case 'done':
        setStatusColor('text_color_success');
        setStatusText('Выполнен');
        break;
      case 'cancel':
        setStatusColor('text_color_error');
        setStatusText('Отменен');
        break;
      case 'pending':
        setStatusText('Готовится');
        break;
      default:
        break;
    }
  }, [status]);
  return { statusColor, statusText };
};

export default useStatusColor;
