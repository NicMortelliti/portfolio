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

export const Labels = styled.span`
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 12px;
  transition: all 0.4s ease-in-out;

  &:before {
    content: '${(props) => props.opt1}';
    position: absolute;
    left: 5px;
    color: #ffffff;
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }

  &:after {
    content: '${(props) => props.opt2}';
    position: absolute;
    right: 5px;
    color: #4d4d4d;
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }
`;

export const Toggle = ({ opt1, opt2 }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <Switch>
      <Input type='checkbox' checked={isChecked} onChange={handleChange} />
      <Slider />
      <Labels opt1={opt1} opt2={opt2} />
    </Switch>
  );
};
