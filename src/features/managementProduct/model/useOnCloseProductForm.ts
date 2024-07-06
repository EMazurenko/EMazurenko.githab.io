import { useNavigate } from 'react-router-dom';

export const useOnCloseProductForm = () => {
  const navigate = useNavigate();

  return {
    onClose: () => {
      navigate('/warehouse');
    },
  };
};
