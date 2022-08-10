import React from "react";
import taschibra from '@assets/taschibra.png';

import { 
    Container, 
    Content,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    LogoutButton,
    Icon,
    Title,
    Represented,
    Company,
    CompanyLogo
 } from './styles';

export function Home(){
    return (
        <Container>
            <Content>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/67348916?v=4'}} />

                            <User>
                                <UserGreeting>Olá, Rafael</UserGreeting>
                                <UserName>Atualize seu estoque</UserName>
                            </User>

                        </UserInfo>

                        <LogoutButton>
                            <Icon name="log-out" />
                        </LogoutButton>
                    </UserWrapper>                   
                </Header>

                <Title>
                    Escolha uma de nossas {'\n'}
                    representadas abaixo e escolha {'\n'}
                    os produtos
                </Title>

                <Represented>

                    <Company>
                        <CompanyLogo source={taschibra} />
                    </Company>
                    
                    <Company>
                        <CompanyLogo source={taschibra} />
                    </Company>

                    <Company>
                        <CompanyLogo source={taschibra} />
                    </Company>

                    <Company>
                        <CompanyLogo source={taschibra} />
                    </Company>

                </Represented>
            </Content>
        </Container>
    )
}