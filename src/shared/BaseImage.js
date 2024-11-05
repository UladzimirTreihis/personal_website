// Image.js
import { styled } from '@mui/system';

const BaseImage = styled('img')({
  width: '100%',
  height: '300px', // Fixed height for consistency
  objectFit: 'cover',
  borderRadius: 8,
});

export default BaseImage;
