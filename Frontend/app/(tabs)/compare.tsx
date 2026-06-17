import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CompareHeader from '@/Components/CompareHeader'
import CompareUserCard from '@/Components/CompareUserCard'

const compare = () => {
  return (
    <ScrollView>
      <CompareHeader/>
      <CompareUserCard/>
    </ScrollView>
  )
}

export default compare