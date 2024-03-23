// components/CopyCA.tsx

import { useState } from 'react';
import copy from 'clipboard-copy';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CopyCAProps {
  text: string;
  display: string;
}

const CopyCA: React.FC<CopyCAProps> = ({ text ,display}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await copy(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div onClick={handleClick}>
      {display}
      &nbsp;<FontAwesomeIcon icon={faCopy} />{copied ? ' Copied!' : ''}      
    </div>
  );
};

    export default CopyCA;
