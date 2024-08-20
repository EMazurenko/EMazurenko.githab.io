import { useNavigate } from 'react-router-dom';

export const useOnCloseCategoryForm = () => {
  const navigate = useNavigate();

  return {
    onClose: () => {
      navigate('/warehouse');
    },
  };
};
