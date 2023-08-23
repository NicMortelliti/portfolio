import React, { useState } from 'react';
import styled from 'styled-components';

const switchWidth = 263;
const sliderWidth = 26;
const sliderHeight = 26;
const paddingX = 4;
const paddingY = 4;

const Switch = styled.label`
  position: relative;
  display: flex;
  width: ${switchWidth}px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: ${sliderWidth}px;
    width: ${sliderHeight}px;
    left: ${paddingX}px;
    bottom: ${paddingY}px;
    background-color: white;
    transition: 0.4s;
  }
`;

const Input = styled.input`
  display: none;
  opacity: 0;
  position: absolute;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(${switchWidth - sliderWidth - paddingX * 2}px);
  }
`;

export const Toggle = ({ opt1, opt2 }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <Switch>
      <Input type='checkbox' checked={isChecked} onChange={handleChange} />
      <Slider />
    </Switch>
  );
};
