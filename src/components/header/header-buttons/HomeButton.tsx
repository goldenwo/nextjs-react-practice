import { Button } from '@mui/material';

interface HomeButtonProps {
  onClick: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Home
    </Button>
  );
};

export default HomeButton;
