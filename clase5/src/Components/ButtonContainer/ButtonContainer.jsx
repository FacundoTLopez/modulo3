import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline;
`

export const ButtonContainer = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}
