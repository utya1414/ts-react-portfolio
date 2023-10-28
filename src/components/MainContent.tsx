import React from 'react'
import HomeHeader from './HomeHeader'
import HomeProfile from './HomeProfile'

const MainContent: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
        <HomeHeader />
        <HomeProfile />
    </div>
  )
}

export default MainContent