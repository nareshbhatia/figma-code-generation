import type * as React from 'react';

type PaddingX = 'default' | 'none';
type PaddingY = 'comfortable' | 'compact' | 'default' | 'none';

export interface BaseContainerProps {
  className?: string;
  children?: React.ReactNode;
  px?: PaddingX;
  py?: PaddingY;
}

const PxValues = {
  none: 'px-0',
  default: 'px-8',
};

const PyValues = {
  none: 'py-0',
  compact: 'py-4',
  default: 'py-8',
  comfortable: 'py-12',
};

export function BaseContainer({
  className = '',
  children,
  px = 'none',
  py = 'none',
}: BaseContainerProps) {
  return (
    <div className={`${className} ${PxValues[px]} ${PyValues[py]}`}>
      {children}
    </div>
  );
}
