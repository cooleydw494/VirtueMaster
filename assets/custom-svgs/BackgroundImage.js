import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackgroundImage = (props) => (
  <Svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMid meet" {...props}>
    <Path
      fill="#e0e0e0"
      fillOpacity="1"
      d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,245.3C840,267,960,277,1080,261.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
    <Path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,288L60,288C120,288,240,288,360,266.7C480,245,600,203,720,213.3C840,224,960,288,1080,309.3C1200,331,1320,321,1380,314.7L1440,309L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    />
  </Svg>
);

export default BackgroundImage;