import React, { useState } from 'react'; 
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputText,
  IconContainer,
} from './styles'; 

interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({
    iconName,
    value,
    ...rest
} : Props ){
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handlePasswordVisibilityChange(){
    setIsPasswordVisible(prevState => !prevState)
  }

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
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        isFocused={isFocused}
      />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather 
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.COLORS.SHAPE}
          />
        </IconContainer>
      </BorderlessButton>

   </Container>
  );
}