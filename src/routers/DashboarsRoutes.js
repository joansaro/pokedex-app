import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import Pokedex from '../components/Pokedex/Pokedex'
import FirstGenerationScreen from '../components/Generations/FirstGenerationScreen'
import SecondGenerationScreen from '../components/Generations/SecondGenerationScreen'
import ThirdGenerationScreen from '../components/Generations/ThirdGenerationScreen'
import QuarterGenerationScreen from '../components/Generations/QuarterGenerationScreen'
import FifthGenerationScreen from '../components/Generations/FifthGenerationScreen'
import SixthGenerationScreen from '../components/Generations/SixthGenerationScreen'
import SeventhGenerationScreen from '../components/Generations/SeventhGenerationScreen'
import EighthGenerationScreen from '../components/Generations/EighthGenerationScreen'
import { WelcomeScreen } from '../components/welcome/WelcomeScreen'
import SearchScreen from '../components/Search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const DashboarsRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* <Route path="/pokedex" element={<Pokedex/>} /> */}
                <Route path="/welcome" element={<WelcomeScreen />} />
                <Route path="/primera-generacion" element={<FirstGenerationScreen />} />
                <Route path="/segunda-generacion" element={<SecondGenerationScreen />} />
                <Route path="/tercera-generacion" element={<ThirdGenerationScreen />} />
                <Route path="/cuarta-generacion" element={<QuarterGenerationScreen />} />
                <Route path="/quinta-generacion" element={<FifthGenerationScreen />} />
                <Route path="/sexta-generacion" element={<SixthGenerationScreen />} />
                <Route path="/septima-generacion" element={<SeventhGenerationScreen />} />
                <Route path="/octava-generacion" element={<EighthGenerationScreen />} />
                
                <Route path="/buscar" element={<SearchScreen />} />

                <Route path="/" element={<FirstGenerationScreen />} />
            </Routes>
        </>
    )
}
