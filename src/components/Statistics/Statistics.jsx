import {StatisticsContainer, StatisticsItem} from './Statistics.styled'

export const Statistics = ({ feedbackScore, totalFeedback }) => {
return  (
   <StatisticsContainer>
      <StatisticsItem>Good - {feedbackScore.good}</StatisticsItem>
      <StatisticsItem>Neutral - {feedbackScore.neutral}</StatisticsItem>
      <StatisticsItem>Bad - {feedbackScore.bad}</StatisticsItem>
      <StatisticsItem>Total - {totalFeedback}</StatisticsItem>
      <StatisticsItem>Average percentage - </StatisticsItem>
   </StatisticsContainer>    
);        
};