import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'; // do not use this
import * as scale from 'd3-scale';

const ProgressChart = ({ data }) => {
  const barData = data.map(item => ({
    value: item.value,
    svg: {
      fill: item.color,
    },
  }));

  const labels = data.map(item => item.label);

  return (
    <View style={{ flexDirection: 'column', height: 200, padding: 20 }}>
      <BarChart
        style={{ flex: 1 }}
        data={barData}
        gridMin={0}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 30, bottom: 30 }}
      />
      <XAxis
        style={{ marginTop: 10 }}
        data=data
        scale={scale.scaleBand}
        formatLabel={(value, index) => labels[index]}
        labelStyle={{ color: 'black' }}
        contentInset={{ left: 25, right: 25 }}
      />
    </View>
  );
};

ProgressChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

ProgressChart.defaultProps = {
  data: [],
};

export default ProgressChart;
