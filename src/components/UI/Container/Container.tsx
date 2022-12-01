import {ContainerProps } from './Container.types'
import { ContainerStyled } from "./Container.style"

const Container = ({children, className}:ContainerProps) => {
  return (
    <ContainerStyled className={className}>
      {children}
    </ContainerStyled>
  )
}

export default Container