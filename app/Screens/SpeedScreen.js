import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import {Unit, Input, InputContainer} from './styles/Inputs.styles';

const SpeedScreen = () => {
  const [knots, setKnots] = React.useState(null);
  const [boufort, setBoufort] = React.useState(null);
  const [mps, setMps] = React.useState(null);
  const [kph, setKph] = React.useState(null);

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType="decimal-pad"
          value={knots}
          onChangeText={(text) => setKnots(text)}
        />
        <Unit>knt</Unit>
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType="decimal-pad"
          value={boufort}
          onChangeText={(text) => setBoufort(text)}
        />
        <Unit>°B</Unit>
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType="decimal-pad"
          value={mps}
          onChangeText={(text) => setMps(text)}
        />
        <Unit>mps</Unit>
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType="decimal-pad"
          value={kph}
          onChangeText={(text) => setKph(text)}
        />
        <Unit>kph</Unit>
      </InputContainer>
    </Container>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding-top: 50px;
  justify-content: flex-start;
  align-items: center;
`;

export default SpeedScreen;
