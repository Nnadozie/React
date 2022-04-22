import { KeyboardEventHandler, MouseEventHandler, useState } from 'react';
import './button.css';

interface IButton {
  children: string;
  onClick: MouseEventHandler;
}

const gf = (e: Event): void => {};

const Button: React.VFC<IButton> = ({ children, onClick }) => {
  const [hasContext, setHasContext] = useState<boolean>(false);
  const [isTriggered, setIsTriggered] = useState<boolean>(false);

  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.code === 'Enter') {
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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
