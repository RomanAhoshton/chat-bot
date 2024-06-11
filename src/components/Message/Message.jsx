/* eslint-disable react/prop-types */
import s from './index.module.css';

import FilterVintageIcon from '@mui/icons-material/FilterVintage';

const Message = ({ message }) => {
  return (
    <div className={s.messageContainer}>
      {message.type === 'response' ? (
        <div>
          {message.optionsResponse?.length > 0 ? (
            <div className={s.optionsResponse}>
              <div className={s.responseIcon}>
                <FilterVintageIcon fontSize='large' color='primary' />
                <span className={s.messageResponse}>{message.text}</span>
              </div>

              <div className={s.options}>
                {message.optionsResponse.map((item) => {
                  return (
                    <button key={item} className={s.optionButton}>
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className={s.response}>
              <FilterVintageIcon fontSize='large' color='primary' />
              <span className={s.messageResponse}>{message.text}</span>
            </div>
          )}
        </div>
      ) : (
        <span className={s.messageRequest}>{message.text}</span>
      )}
    </div>
  );
};

export default Message;
