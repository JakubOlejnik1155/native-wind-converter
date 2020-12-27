import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import DismissKeyboard from './Components/DismissKeyboard';

import {Unit, Input, InputContainer} from './styles/Inputs.styles';

const SpeedScreen = () => {
  const [feets, setFeets] = React.useState(null);
  const [meters, setMeters] = React.useState(null);
  const [nm, setNm] = React.useState(null);
  const [km, setKm] = React.useState(null);

  return (
    <DismissKeyboard>
      <Container>
        <View>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={feets}
              onChangeText={(text) => setFeets(text)}
            />
            <Unit>ft</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={meters}
              onChangeText={(text) => setMeters(text)}
            />
            <Unit>m</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={nm}
              onChangeText={(text) => setNm(text)}
            />
            <Unit>nm</Unit>
          </InputContainer>
          <InputContainer>
            <Input
              keyboardType="decimal-pad"
              value={km}
              onChangeText={(text) => setKm(text)}
            />
            <Unit>km</Unit>
          </InputContainer>
        </View>
      </Container>
    </DismissKeyboard>
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
