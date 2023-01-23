import React from 'react';

interface Props {
  className: string;
}

export const Logo: React.FC <Props> = ({className}) => {
  return (
      <picture className={className}>
         <source 
           media="(max-width:375px)" 
           srcSet="https://involve-me.imgix.net/uploads/assets/8aee16fe-53ce-4f2d-9e6f-5fce12f00294.png?q=55&dpr=2&w=472&fit=max" 
        />
         <img 
           src="https://involve-me.imgix.net/uploads/assets/93744c2c-4e46-439c-bf51-17ac52607418.png?q=55&dpr=1.25&w=600&fit=max" 
           alt="Flowers" 
           className={className}
          />
      </picture>
  )
}
