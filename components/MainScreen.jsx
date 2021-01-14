import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Articles from '../modules/Articles'
import ArticleIndexDetails from './ArticleIndexDetails'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const MainScreen = ({ navigation }) => {
  const { articles } = useSelector(state => state)
  useEffect(() => { Articles.index() }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArticleIndexDetails navigation={navigation} article={item} />}
      />
    </View>
  )
}

export default MainScreen