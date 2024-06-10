import { useRef, useEffect, useState } from 'react';
import s from './index.module.css';

const Form = () => {
  const textareaRef = useRef(null);
  const [value, setValue] = useState('');

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <form className={s.form}>
      <textarea
        id='textarea'
        ref={textareaRef}
        onInput={adjustHeight}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      <button
        className={s.button}
        style={{
          backgroundColor: value === '' ? '#D7D7D7' : '#242424',
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='none'
          viewBox='0 0 32 32'
        >
          <path
            fill='#fff'
            fillRule='evenodd'
            d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default Form;
