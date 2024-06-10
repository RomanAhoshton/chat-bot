import MessageList from '../MessageList';
import s from './index.module.css';
import Form from '../Form';

const ChatContainer = () => {
  return (
    <div className={s.container}>
      <MessageList />
      <Form />
    </div>
  );
};

export default ChatContainer;
