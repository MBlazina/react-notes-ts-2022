export type ButtonProps = {
  children: string,
  click: React.MouseEventHandler<HTMLButtonElement>,
  primary?: boolean,
  className?: string,
}