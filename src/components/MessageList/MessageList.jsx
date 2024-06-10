import s from './index.module.css';
import { messages } from '../../constants/fakeMessages';
import Message from '../Message';

const MessageList = () => {
  return (
    <div className={s.messageList}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
