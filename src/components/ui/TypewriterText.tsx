'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenStrings?: number;
  loop?: boolean;
  className?: string;
}

const TypewriterText = ({
  strings,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenStrings = 2000,
  loop = true,
  className = ""
}: TypewriterTextProps) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => 
            loop ? (prev + 1) % strings.length : Math.min(prev + 1, strings.length - 1)
          );
        }
      } else {
        setCurrentText(currentString.substring(0, currentText.length + 1));
        
        if (currentText === currentString) {
          setTimeout(() => setIsDeleting(true), delayBetweenStrings);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, delayBetweenStrings, loop]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent font-bold">
        {currentText}
      </span>
      <span className={`text-purple-500 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
};

export default TypewriterText;
