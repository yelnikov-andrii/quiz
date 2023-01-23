import React from 'react';

interface Props {
  className: string;
}

export const Logo: React.FC <Props> = ({className}) => {
  return (
         <img 
           src="https://involve-me.imgix.net/uploads/assets/93744c2c-4e46-439c-bf51-17ac52607418.png?q=55&dpr=1.25&w=600&fit=max" 
           alt="Flowers" 
           className={className}
          />
  )
}
