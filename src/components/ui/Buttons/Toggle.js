import React, { useState } from 'react';
import styled from 'styled-components';
import { left, right } from '../../styles/Animations/Elastic.styled';

const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

const switchWidth = 263;
const switchHeight = 40;
const sliderWidth = (switchWidth / 2) * 0.9;
const sliderHeight = switchHeight;
const paddingX = 4;
const paddingY = 4;
const side = 40;
const duration = 1;

const Label = styled.label`
  cursor: pointer;
  font-size: 1.5em;
  width: ${switchWidth}px;
  height: ${switchHeight}px;
  display: inline-block;
  position: relative;
  background: #ddddff;
  line-height: ${sliderHeight}px;
  box-sizing: border-box;

  &:before {
    width: ${sliderWidth}px;
    height: ${sliderHeight}px;
    position: absolute;
    top: 0;
    display: inline-block;
    text-align: center;
    content: '${(props) => props.label}';
    background-color: ${accent};
    color: ${color};
    transition: all ${duration}s ease-in-out;
    transform-origin: 0% 50%;
    animation: ${left} ${duration}s ease-in-out forwards;
  }
`;

const Input = styled.input`
  // Checked: True --> right
  &:checked + ${Label} {
    &:before {
      animation: ${right} ${duration}s ease-in-out forwards;
      right: 0;
    }
  }
`;

export const Toggle = ({ opt1, opt2 }) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <>
      <p>{`Checked: ${isChecked}`}</p>
      <Input type='checkbox' id='input' hidden checked={isChecked} onChange={handleChange} />
      <Label for='input' label={isChecked ? opt2 : opt1} />
    </>
  );
};
