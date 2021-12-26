import React from 'react'
import styled from 'styled-components'
// Components
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section />
            <Section />
        </Container>
    )
}
export default Home

// Styles
const Container = styled.div`
    height: 100vh;
`
