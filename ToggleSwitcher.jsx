import React from 'react';
import classes from './ToggleSwitcher.module.css';

export const toggleSwitcherTypes = {
  WHITE: {
    container: classes.toggleContainerWhite,
    input: classes.toggleInputWhite,
    slider: classes.toggleSliderWhite
  },
  MAIN: {
    container: classes.toggleContainerMain,
    input: classes.toggleInputMain,
    slider: classes.toggleSliderMain
  }
};

export const ToggleSwitcher = ({
  onChange,
  checked,
  label1,
  label2,
  containerClassName,
  labelClassName,
  toggleType
}) => {
  if (toggleType === toggleSwitcherTypes.MAIN)
    return (
      <div className={toggleType.container}>
        <label>
          <input
            type="checkbox"
            className={`${classes.toggleInput} ${
              toggleType ? toggleType.input : ''
            }`}
            onChange={onChange}
            checked={checked}
          />
          <span
            className={`${classes.toggleSlider} ${classes.toggleRound} ${
              toggleType ? toggleType.slider : ''
            }`}
          ></span>
        </label>
        <div
          className={`${classes.toggleLabelMain} ${classes.toggleLabelMain1} ${
            !checked ? classes.toggleLabelMainActive : ''
          }`}
          onClick={onChange}
        >
          {label1}
        </div>
        <div
          className={`${classes.toggleLabelMain} ${classes.toggleLabelMain2} ${
            checked ? classes.toggleLabelMainActive : ''
          }`}
          onClick={onChange}
        >
          {label2}
        </div>
      </div>
    );

  return (
    <div
      className={`${classes.toggleBox} ${
        containerClassName ? containerClassName : ''
      }`}
    >
      <b className={labelClassName}>{label1}</b>
      <label
        className={`${classes.toggleContainer} ${
          toggleType ? toggleType.container : ''
        }`}
      >
        <input
          type="checkbox"
          className={`${classes.toggleInput} ${
            toggleType ? toggleType.input : ''
          }`}
          onChange={onChange}
          checked={checked}
        />
        <span
          className={`${classes.toggleSlider} ${classes.toggleRound} ${
            toggleType ? toggleType.slider : ''
          }`}
        ></span>
      </label>
      <b className={labelClassName}>{label2}</b>
    </div>
  );
};
