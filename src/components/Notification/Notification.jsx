import { NotificationTitle,NotificationLogo } from './Notification.styled'
import { BsFillSignStopFill } from "react-icons/bs";

export const Notification = () => {
return (
   <>
   <NotificationLogo><BsFillSignStopFill/></NotificationLogo>
   <NotificationTitle>There is no feedback</NotificationTitle>
   </>
)
};