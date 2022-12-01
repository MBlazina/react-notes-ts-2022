export type ButtonProps = {
  children: string | JSX.Element,
  onClick?: ()=> void,
  primary?: boolean,
  close?:boolean,
  className?: string,
  type?: string,
}