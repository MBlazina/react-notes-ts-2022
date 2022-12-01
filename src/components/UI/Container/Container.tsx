import {ContainerProps } from './Container.types'
import { ContainerStyled } from "./Container.style"

const Container = ({children}:ContainerProps) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}

export default Container