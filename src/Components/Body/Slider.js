import * as React from 'react';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import styled from 'styled-components';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: '#fff' 
  },
  '& .MuiSlider-track': {
    color : '#80A9E7',
  },
  '& .MuiSlider-rail': {
    color: '#d8d8d8',
  },
}));

export default function InputSlider() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    console.log("??");
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <SliderStyle>
      <CustomSlider
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
      />
      <InputStyle>
        {value}
        {/* <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          inputProps={{
            step: 5,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        /> */}
      </InputStyle>
    </SliderStyle>
  );
}

const SliderStyle = styled.div`
    width : 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const InputStyle = styled.div`
    margin-left: 10px;
    color: #FF9393;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
`;
