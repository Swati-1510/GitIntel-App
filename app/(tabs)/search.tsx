import { View, Text } from 'react-native'
import SearchBar  from "../../src/Components/SearchBar"
import React from 'react'
import RepositoryCard from '@/Components/RepositoryCard'

const Search = () => {
  return (
    <View >
      <SearchBar/>
      <RepositoryCard/>
    </View>
  )
}
export default Search