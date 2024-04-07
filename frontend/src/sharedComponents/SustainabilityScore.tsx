import React from 'react';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

interface Props {
  sustainabilityScore: number;
}

const SustainabilityEmojis: React.FC<Props> = ({ sustainabilityScore }) => {
  const getColor = (index: number): string => {
    if (sustainabilityScore <= 2) {
      return index < sustainabilityScore ? 'red' : 'grey';
    } else if (sustainabilityScore == 3) {
      return index < sustainabilityScore ? 'orange' : 'grey';
    } else {
      return index < sustainabilityScore ? 'green' : 'grey';
    }
  };

  return (
    <>
      {new Array(5).fill(null).map((_, index) => (
        <EmojiNatureIcon key={index} style={{ color: getColor(index) }} />
      ))}
    </>
  );
};

export default SustainabilityEmojis;
