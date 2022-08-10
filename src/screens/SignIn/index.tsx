import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import { Input } from '@components/Input';
import { PasswordInput } from '@components/PasswordInput';
import { Button } from '@components/Button';
import loadAnimation from '@assets/packaging-for-delivery.json';

import { useAuth } from '@hooks/auth';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, isLogging } = useAuth();

    function handleSignIn(){
        signIn(email, password);
    }

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
                        onChangeText={setEmail}
                        />

                    <PasswordInput 
                        iconName="lock" 
                        placeholder="Senha"
                        autoCapitalize="none"
                        onChangeText={setPassword}
                    />

                    <ForgotPasswordButton >
                        <ForgotPasswordLabel>Esqueci Minha Senha</ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button 
                        title='Entrar' 
                        type='primary' 
                        onPress={handleSignIn} 
                        isLoading={isLogging}
                    />

                    <ConectarLabel>ou Cadastre-se</ConectarLabel>

                    <Button title='Cadastrar' type='secondary' onPress={() => ('')} />
                </KeyboardAvoidingView>
            </Content>
        </Container>
    )
}