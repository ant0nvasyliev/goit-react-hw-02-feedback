import { Button } from './IconButton.styled'

export const IconButton = ({ children, $status, onClick }) => {
   return <Button onClick={onClick} $status={$status}>{children}</Button>
}



