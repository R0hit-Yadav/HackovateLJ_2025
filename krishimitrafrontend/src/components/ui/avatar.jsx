import React from 'react';

// Avatar component from Shadcn UI (if using custom styles, replace this with necessary classes)
const p = ({ src, alt, size = 'md' }) => {
  const avatarSize = size === 'lg' ? 'w-24 h-24' : 'w-16 h-16'; // Large or Medium size
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${avatarSize} object-cover`}
    />
  );
};

export default p;
