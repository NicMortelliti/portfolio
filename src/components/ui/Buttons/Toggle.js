import React, { useState } from 'react';
import styled from 'styled-components';

const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

const longestString = (label1, label2) => {
  console.log(label1.length, label2.length);
  return `${4 + (label1.length >= label2.length ? label1.length : label2.length)}ch`;
};

const Label = styled.label``;

const Input = styled.input`
  display: none;

  + ${Label} {
    outline: 0;
    display: block;
    width: ${(props) => longestString(props.label1, props.label2)};
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
    overflow: visible;
    transform: skew(-10deg);
    backface-visibility: hidden;
    transition: all 0.5s ease;
    background: ${accent};

    &:after,
    &:before {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      transform: skew(10deg);
      transition: all 0.2s ease;
      text-align: center;
      position: absolute;
      line-height: 2em;
      font-weight: bold;
      color: ${color};
    }

    &:after {
      left: 100%;
      font-size: 70%;
      content: ${(props) => (props.label2 ? `'${props.label2}'` : `''`)};
    }

    &:before {
      left: 0;
      content: ${(props) => (props.label1 ? `'${props.label1}'` : `''`)};
    }

    &:active {
      background: #888;
    }
  }

  &:checked + ${Label} {
    &:before {
      left: -100%;
      font-size: 70%;
    }

    &:after {
      left: 0;
      font-size: 100%;
    }
  }
`;

export const Toggle = ({ opt1, opt2 }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <>
      <Input
        type='checkbox'
        id='input'
        label1={opt1}
        label2={opt2}
        hidden
        checked={isChecked}
        onChange={handleChange}
      />
      <Label htmlFor='input' />
    </>
  );
};
