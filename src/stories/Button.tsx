import { KeyboardEventHandler, useState } from 'react';
import './button.css';

interface IButton {
  children: string;
}

const Button: React.VFC<IButton> = ({ children }) => {
  const [hasContext, setHasContext] = useState<boolean>(false);
  const [isTriggered, setIsTriggered] = useState<boolean>(false);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.code === '13') {
      setIsTriggered(true);
    }
  };

  return (
    <button
      onBlur={() => setHasContext(false)}
      onContextMenu={() => setHasContext(true)}
      className={
        hasContext ? `button context ${isTriggered ? 'triggered' : ''}` : `button ${isTriggered ? 'triggered' : ''}`
      }
      onKeyDown={(e) => handleKeyDown(e)}
      onKeyUp={() => setIsTriggered(false)}
    >
      {children}
    </button>
  );
};

export { Button };
