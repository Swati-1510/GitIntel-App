import { View, Text, ScrollView } from 'react-native'
import SearchBar  from "../../src/Components/SearchBar"
import React from 'react'
import RepositoryCard from '@/Components/RepositoryCard'
import SkillHeatmapCard from '@/Components/SkillHeatmapCard'
import SystemLog from '@/Components/SystemLog'

const Search = () => {
  return (
    <ScrollView >
      <SearchBar/>
      <RepositoryCard/>
      <SkillHeatmapCard/>
      <SystemLog/>
    </ScrollView>
  )
}
export default Search