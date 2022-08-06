import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';

import { Input } from '@components/Input';
import { PasswordInput } from '@components/PasswordInput';
import { Button } from '@components/Button';
import { SignInSocialButton } from '@components/SignInSocialButton';
import loadAnimation from '@assets/packaging-for-delivery.json';
import GoolgeSvg from '@assets/google.svg';

import { 
    Container,
    Content,
    Login,
    ForgotPasswordButton,
    ForgotPasswordLabel,
    ConectarLabel,
    Brand
 } from './styles';

export function SignIn(){
    return (
        <Container>
            <Content>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                    <Brand>
                        <LottieView 
                            source={loadAnimation}
                            autoPlay
                            loop                
                    />
                    </Brand>
                    <Login>Login</Login>

                    <Input 
                        iconName="mail" 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        
                        />

                    <PasswordInput 
                        iconName="lock" 
                        placeholder="Senha"
                        autoCapitalize="none"
                        
                    />

                    <ForgotPasswordButton >
                        <ForgotPasswordLabel>Esqueci Minha Senha</ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button title='Entrar' type='primary' onPress={() => ('')} />

                    <ConectarLabel>ou Cadastre-se</ConectarLabel>

                    {/* <SignInSocialButton 
                        title="Entrar com Google"
                        svg={GoolgeSvg}
                        
                    /> */}

                    <Button title='Cadastrar' type='secondary' onPress={() => ('')} />
                </KeyboardAvoidingView>
            </Content>
        </Container>
    )
}