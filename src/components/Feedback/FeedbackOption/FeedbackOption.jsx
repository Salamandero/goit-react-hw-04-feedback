import { BtnFeedback, BtnWrapper } from './FeedbackOption.styled';
import PropTypes from 'prop-types';

const FeedbackOption = ({ option, onLeaveFeedback }) => {

  return (
    <>
      <BtnWrapper>
        {option.map(el => (
          <BtnFeedback key={el} type="button" onClick={onLeaveFeedback}>
            {el}
          </BtnFeedback>
        ))}
      </BtnWrapper>
    </>
  );
};

FeedbackOption.propTypes = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
