// FeedbackOptions.js
import { IconButton } from "components/IconButton/IconButton"
import { ButtonsContainer } from "./FeedbackOptions.styled"
import { CgSmile, CgSmileNeutral, CgSmileSad } from "react-icons/cg";

export const FeedbackOptions = ({ handleAddStats }) => {
   return (
      <>
         <ButtonsContainer>
            <IconButton onClick={() => handleAddStats('good')} $status="smile">
               <CgSmile />
            </IconButton>
            <IconButton onClick={() => handleAddStats('neutral')} $status="neutral">
               <CgSmileNeutral />
            </IconButton>
            <IconButton onClick={() => handleAddStats('bad')} $status="sad">
               <CgSmileSad />
            </IconButton>
         </ButtonsContainer>
      </>
   )
}

