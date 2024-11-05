// CardContainer.js
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(3, 0),
  borderRadius: theme.shape.borderRadius,
}));

export default CardContainer;
