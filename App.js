import React from 'react'
import styled from 'styled-components/native'
import {ScrollView, StatusBar} from 'react-native'
import Appbar from './Comp/Appbar'
import Toolbar from './Comp/Toolbar'
import Users from './Comp/Users'
import Story from './Comp/Story'
import Feed from './Comp/Feed'

const Container = styled.SafeAreaView`
    flex:1
`;


const App=()=>{
  return (
    <>
    <StatusBar backgroundColor="#FFFFFF"
    barStyle="dark-content"
    />
    <Container>
      <ScrollView> 
      <Appbar/>
      <Toolbar/>
      <Users/>
      <Story/>
      <Feed/>
      </ScrollView>
    </Container>
    </>
  )
}

export default App