import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'

const FruitsPage = () => {
  return (
    <>
      <CategoryPage title="Fruit & Vegetable" categories={["Fruit","Vegetable"]}  bgimage="/Banner/4.jpg"/>
    </>
  )
}

export default FruitsPage