import React, { useState } from 'react';
import styled from 'styled-components';

const color = ({ theme }) => theme.color;
const accent = ({ theme }) => theme.accent;

// Calculate the longest label and add a buffer of 2 characters on either side (total of 4)
const longestString = (label1, label2) => `${4 + Math.max(label1.length, label2.length)}ch`;

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

const ContentContainer = styled.div`
  display: flex;
  height: auto;
  align-items: stretch;
  flex: 1;
  & > div:first-of-type {
    display: ${(props) => props.checked && 'none'};
    flex: 1;
  }
  & > div:last-of-type {
    display: ${(props) => !props.checked && 'none'};
    flex: 1;
  }
`;

export const Toggle = ({ options }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <>
      <Input
        type='checkbox'
        id='input'
        label1={options.opt1.title}
        label2={options.opt2.title}
        hidden
        checked={isChecked}
        onChange={handleChange}
      />
      <Label htmlFor='input' />
      <ContentContainer checked={isChecked}>
        <div>{options.opt1.component}</div>
        <div>{options.opt2.component}</div>
      </ContentContainer>
    </>
  );
};
