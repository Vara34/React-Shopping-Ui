import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents,Ladies } from '../data'
import WomenCollections from '../components/WomenCollections'

const MainPage = () => {
  const [gentsFashion]=useState(Gents)
  const [ladiesFashion]=useState(Ladies)
  console.log(Gents)
  return (
    <div>
      <Header/>
      <Banner gentsFashion={gentsFashion}/>
      <Collections gentsFashion={gentsFashion}/>
      <WomenCollections ladiesFashion={ladiesFashion}/>
      <Footer/>
    </div>
    
  )
 
}

export default MainPage
