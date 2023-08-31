import React, { useState } from 'react';
import styled from 'styled-components';

const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

const Label = styled.label``;

const Input = styled.input`
  display: none;

  + ${Label} {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;

    /* Skew */
    overflow: hidden;
    transform: skew(-10deg);
    backface-visibility: hidden;
    transition: all 0.2s ease;
    background: ${accent};

    &:after,
    &:before {
      position: relative;
      display: block;
      content: '';
      width: 50%;
      height: 100%;

      /* Skew */
      transform: skew(10deg);
      display: inline-block;
      transition: all 0.2s ease;
      width: 100%;
      text-align: center;
      position: absolute;
      line-height: 2em;
      font-weight: bold;
      color: ${color};
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }

    &:after {
      left: 100%;
      content: ${(props) => props.label};
    }

    &:before {
      display: none;

      /* Skew */
      left: 0;
      content: ${(props) => props.label};
    }

    /* Skew */
    &:active {
      background: #888;
      &:before {
        left: 10%;
      }
    }

    /* Skew */
    &:checked + ${Label} {
      background: red;
      &:before {
        left: 100%;
      }

      &:after {
        left: 0;
      }

      &:active:after {
        left: 10%;
      }
    }
  }

  &:checked + ${Label}:after {
    left: 50%;
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
