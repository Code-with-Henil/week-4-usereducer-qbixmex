import { Typography } from '@mui/material';
import { blue, green, grey, orange, purple } from '@mui/material/colors';
import { FC, useEffect, useState } from 'react';

type Props = {
  children: string;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  fontSize: number;
  color?: 'blue' | 'orange' | 'green' | 'purple' | 'dark' | 'light',
};

const Heading: FC<Props> = ({ children, component, fontSize, color = 'dark' }) => {
  const [ fontColor, setFontColor ] = useState('dark');

  const changeColor = () => {
    switch (color) {
      case 'blue':
        setFontColor(blue['400']);
        break;
      case 'orange':
        setFontColor(orange['400']);
        break;
      case 'green':
        setFontColor(green['400']);
        break;
      case 'purple':
        setFontColor(purple['400']);
        break;
      case 'light':
        setFontColor(grey['100']);
        break;
      default:
        setFontColor(grey['900']);
    }
  };

  useEffect(() => {
    changeColor();
  }, [color]);

  return (
    <Typography
      component={component}
      sx={{
        textAlign: 'center',
        fontSize: `${fontSize}rem`,
        fontWeight: 700,
        color: fontColor,
        mt: 2,
        mb: 3,
      }}
    >{ children }</Typography>
  );
};

export default Heading;