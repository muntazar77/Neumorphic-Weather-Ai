import React from 'react';
import type { IconName } from '../types';

interface WeatherIconProps {
  iconName: IconName;
  className?: string;
}

// Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const Icons: Record<IconName, React.ReactElement> = {
  sunny: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  ),
  cloudy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  ),
  'partly-cloudy': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      <path d="M22 10a4.5 4.5 0 0 0-8.28 2.05A5 5 0 0 0 9 20h9"></path>
    </svg>
  ),
  rain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16" y1="13" x2="16" y2="21"></line>
      <line x1="8" y1="13" x2="8" y2="21"></line>
      <line x1="12" y1="15" x2="12" y2="23"></line>
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
    </svg>
  ),
  drizzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 19v2"></path><path d="M8 13v2"></path><path d="M16 19v2"></path><path d="M16 13v2"></path><path d="M12 21v2"></path><path d="M12 15v2"></path>
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
    </svg>
  ),
  storm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
      <polyline points="8 14 12 20 16 14"></polyline>
    </svg>
  ),
  snow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
      <line x1="8" y1="16" x2="8.01" y2="16"></line>
      <line x1="8" y1="20" x2="8.01" y2="20"></line>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
      <line x1="12" y1="22" x2="12.01" y2="22"></line>
      <line x1="16" y1="16" x2="16.01" y2="16"></line>
      <line x1="16" y1="20" x2="16.01" y2="20"></line>
    </svg>
  ),
  windy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2"></path>
      <path d="M12.59 11.59A2 2 0 1 0 14 16H2"></path>
      <path d="M15.59 18.59A2 2 0 1 1 17 22H2"></path>
    </svg>
  ),
  fog: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12H4"></path><path d="M18 8H6"></path><path d="M22 16H2"></path>
    </svg>
  ),
  default: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  )
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconName, className }) => {
  const IconComponent = Icons[iconName] || Icons.default;
  return <div className={className}>{IconComponent}</div>;
};

export default WeatherIcon;