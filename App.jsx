import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './app/components/MainScreen'
import ArticleShow from './app/components/ArticleShow'
import LoginScreen from './app/components/LoginScreen'
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={(props) => ({
            title: appTitle,
            headerRight: () => {
              return (
                <Ionicons
                  name="person"
                  size={24}
                  color="white"
                  onPress={() => props.navigation.navigate('Login')}
                  style={{marginRight: 10}}
                />
              )
            },
            ...styles
          })}
        />

        <Stack.Screen
          name="ArticleShow"
          component={ArticleShow}
          options={{
            title: appTitle,
            ...styles
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  headerStyle: {
    backgroundColor: '#959cca'
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  }
}

export default App
