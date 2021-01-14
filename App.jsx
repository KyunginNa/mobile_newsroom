import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen'
import ArticleShow from './components/ArticleShow'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={styles}
        />
        <Stack.Screen
          name="ArticleShow"
          component={ArticleShow}
          options={styles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  title: "News of the world",
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
