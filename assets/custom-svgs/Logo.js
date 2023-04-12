import React from 'react';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const Logo = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <Defs>
        <RadialGradient
          id="gradient1"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <Stop offset="0%" stopColor="#4CAF50" stopOpacity="1" />
          <Stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient
          id="gradient2"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <Stop offset="0%" stopColor="#FFC107" stopOpacity="1" />
          <Stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient
          id="gradient3"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <Stop offset="0%" stopColor="#2196F3" stopOpacity="1" />
          <Stop offset="100%" stopColor="#2196F3" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Circle cx="50" cy="50" r="35" fill="url(#gradient1)" />
      <Circle cx="45" cy="45" r="25" fill="url(#gradient2)" />
      <Circle cx="50" cy="50" r="15" fill="url(#gradient3)" />
    </Svg>
  );
};

export default Logo;
