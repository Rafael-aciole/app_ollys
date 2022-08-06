import React, { useState } from 'react'; 
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputText,
  IconContainer
} from './styles'; 

interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function Input({
    iconName,
    value,
    ...rest
} : Props ){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
   <Container >

    <IconContainer {...rest} isFocused={isFocused}>
       <Feather 
        name={iconName}
        size={24}
        color={theme.COLORS.SHAPE}
       />
    </IconContainer>

      <InputText 
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        isFocused={isFocused}
      />
   </Container>
  );
}