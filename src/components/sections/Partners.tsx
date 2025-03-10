import React from 'react';

const Partners = () => {
  // Componentes de logos incorporados diretamente
  const logoComponents = [
    {
      name: 'Amazon',
      Component: () => (
        <svg
          width="120"
          height="36"
          viewBox="0 0 120 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <path
            d="M68.6 19.4C62.6 23.7 54 25.9 46.4 25.9C35.8 25.9 26.3 22 19.2 15.3C18.8 14.9 19.1 14.4 19.6 14.7C27.3 19.2 37 21.9 47 21.9C53.8 21.9 61.3 20.5 68.2 17.6C69.3 17.1 70.2 18.4 68.6 19.4Z"
            fill="currentColor"
          />
          <path
            d="M71.6 16C70.9 15.1 66.6 15.6 64.8 15.8C64.2 15.9 64.1 15.4 64.7 15.1C68.2 12.7 73.8 13.3 74.4 14C75 14.8 74.2 20.1 71 22.8C70.5 23.2 70 23 70.2 22.4C71 20.7 72.3 16.9 71.6 16Z"
            fill="currentColor"
          />
          <path
            d="M64.1 10.2V8.2C64.1 7.9 64.3 7.7 64.6 7.7H75.5C75.8 7.7 76 7.9 76 8.2V9.9C76 10.2 75.8 10.5 75.4 11C72.1 16 67 24.5 65.3 27.2C65.1 27.6 64.7 27.9 64.4 27.9H61.8C61.5 27.9 61.2 27.6 61.5 27.2C63.3 24.3 68.8 15.3 71.7 11C71.9 10.6 71.9 10.4 71.6 10.2H64.6C64.3 10.2 64.1 10 64.1 9.7V10.2Z"
            fill="currentColor"
          />
          <path
            d="M24.2 20.7H20.6C20.3 20.7 20.1 20.5 20.1 20.3V8.2C20.1 7.9 20.3 7.7 20.6 7.7H23.9C24.2 7.7 24.4 7.9 24.4 8.1V9.7H24.5C25.2 8.1 26.5 7.3 28.1 7.3C29.8 7.3 30.9 8.1 31.7 9.7C32.4 8.1 34 7.3 35.5 7.3C36.6 7.3 37.8 7.7 38.5 8.7C39.4 9.8 39.2 11.4 39.2 12.8V20.2C39.2 20.5 39 20.7 38.7 20.7H35.1C34.8 20.7 34.6 20.5 34.6 20.2V14.3C34.6 13.7 34.7 12.2 34.5 11.7C34.3 10.9 33.8 10.7 33.1 10.7C32.5 10.7 31.9 11.1 31.7 11.7C31.4 12.4 31.5 13.5 31.5 14.3V20.2C31.5 20.5 31.3 20.7 31 20.7H27.5C27.2 20.7 27 20.5 27 20.2V14.3C27 12.8 27.3 10.6 25.5 10.6C23.7 10.6 23.8 12.7 23.8 14.3V20.2C23.8 20.5 23.6 20.7 23.3 20.7H24.2Z"
            fill="currentColor"
          />
          <path
            d="M87.6 7.3C92.5 7.3 95 11.4 95 16.8C95 22 92.2 26 87.6 26C82.8 26 80.4 21.8 80.4 16.5C80.4 11.2 82.9 7.3 87.6 7.3ZM87.7 10.5C85.8 10.5 85.6 13 85.6 14.7C85.6 16.5 85.5 22.7 87.6 22.7C89.6 22.7 89.8 17.8 89.8 15.9C89.8 14.6 89.7 13.1 89.3 11.9C89 10.9 88.5 10.5 87.7 10.5Z"
            fill="currentColor"
          />
          <path
            d="M100.2 20.7H96.7C96.4 20.7 96.2 20.5 96.2 20.2V8.1C96.2 7.8 96.4 7.6 96.7 7.6H100C100.3 7.6 100.5 7.8 100.5 8.1V9.9H100.6C101.4 8.1 102.5 7.3 104.4 7.3C105.6 7.3 106.8 7.7 107.5 8.9C108.2 9.9 108.2 11.7 108.2 12.9V20.3C108.1 20.6 107.9 20.8 107.6 20.8H104.1C103.8 20.8 103.6 20.6 103.6 20.3V14.1C103.6 12.7 103.8 10.5 102 10.5C101.4 10.5 100.8 10.9 100.5 11.6C100.1 12.4 100.1 13.3 100.1 14.1V20.3C100.1 20.6 99.9 20.8 99.6 20.8H100.2V20.7Z"
            fill="currentColor"
          />
          <path
            d="M51.2 15.3C51.2 16.5 51.2 17.5 50.6 18.5C50.1 19.4 49.3 19.9 48.4 19.9C47.2 19.9 46.5 19 46.5 17.7C46.5 15.2 48.8 14.7 51.2 14.7V15.3ZM54.8 20.7C54.6 20.9 54.4 21 54.1 21C53.8 21 53.6 20.9 53.3 20.6C52.6 19.9 52.5 19.4 52.2 18.6C51 20.3 50.2 20.9 48.5 20.9C46.5 20.9 45 19.7 45 17.3C45 15.5 45.9 14.1 47.2 13.4C48.4 12.7 50 12.5 51.2 12.3V12C51.2 11.3 51.2 10.6 50.8 10C50.5 9.5 49.9 9.3 49.3 9.3C48.2 9.3 47.3 9.9 47.1 11C47 11.3 46.8 11.5 46.5 11.5L43.1 11.2C42.8 11.1 42.6 11 42.6 10.7C43.1 8 45.5 7.2 47.7 7.2C48.9 7.2 50.4 7.5 51.3 8.3C52.5 9.3 52.4 10.6 52.4 12.1V16.2C52.4 17.3 52.9 17.8 53.3 18.4C53.5 18.7 53.6 19 53.3 19.2C52.7 19.7 51.8 20.4 51.2 21L54.8 20.7Z"
            fill="currentColor"
          />
          <path
            d="M10.4 15.3C10.4 16.5 10.4 17.5 9.8 18.5C9.3 19.4 8.5 19.9 7.6 19.9C6.4 19.9 5.7 19 5.7 17.7C5.7 15.2 8 14.7 10.4 14.7V15.3ZM14 20.7C13.8 20.9 13.6 21 13.4 21C13.1 21 12.9 20.9 12.6 20.6C11.9 19.9 11.7 19.4 11.5 18.6C10.3 20.3 9.4 20.9 7.7 20.9C5.7 20.9 4.2 19.7 4.2 17.3C4.2 15.5 5.1 14.1 6.4 13.4C7.6 12.7 9.2 12.5 10.4 12.3V12C10.4 11.3 10.4 10.6 10 10C9.7 9.5 9.1 9.3 8.5 9.3C7.4 9.3 6.5 9.9 6.3 11C6.2 11.3 6 11.5 5.7 11.5L2.3 11.2C2 11.1 1.8 11 1.8 10.7C2.3 8 4.7 7.2 6.9 7.2C8.1 7.2 9.6 7.5 10.5 8.3C11.7 9.3 11.6 10.6 11.6 12.1V16.2C11.6 17.3 12.1 17.8 12.5 18.4C12.7 18.7 12.8 19 12.5 19.2C11.9 19.7 11 20.4 10.4 21L14 20.7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      Component: () => (
        <svg
          width="120"
          height="36"
          viewBox="0 0 120 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <path
            d="M60 18C60 22.9706 55.9706 27 51 27C46.0294 27 42 22.9706 42 18C42 13.0294 46.0294 9 51 9C55.9706 9 60 13.0294 60 18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M58 18C58 18 55 14 51 14C47 14 44 18 44 18"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M58 18C58 18 55 22 51 22C47 22 44 18 44 18"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M51 9C51 9 47 13 47 18C47 23 51 27 51 27"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M51 9C51 9 55 13 55 18C55 23 51 27 51 27"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M65 18H78" stroke="currentColor" strokeWidth="2" />
          <path d="M65 14H78" stroke="currentColor" strokeWidth="2" />
          <path d="M65 22H78" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'HubSpot',
      Component: () => (
        <svg
          width="120"
          height="36"
          viewBox="0 0 120 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <path
            d="M45 18C45 15.7909 46.7909 14 49 14H51C53.2091 14 55 15.7909 55 18V22C55 24.2091 53.2091 26 51 26H49C46.7909 26 45 24.2091 45 22V18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M55 18H60" stroke="currentColor" strokeWidth="2" />
          <path d="M40 18H45" stroke="currentColor" strokeWidth="2" />
          <path d="M50 14V10" stroke="currentColor" strokeWidth="2" />
          <path d="M50 26V30" stroke="currentColor" strokeWidth="2" />
          <path
            d="M60 18C60 15.7909 61.7909 14 64 14H66C68.2091 14 70 15.7909 70 18V22C70 24.2091 68.2091 26 66 26H64C61.7909 26 60 24.2091 60 22V18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M70 18H75" stroke="currentColor" strokeWidth="2" />
          <path
            d="M75 18C75 15.7909 76.7909 14 79 14H81C83.2091 14 85 15.7909 85 18V22C85 24.2091 83.2091 26 81 26H79C76.7909 26 75 24.2091 75 22V18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      name: 'Notion',
      Component: () => (
        <svg
          width="120"
          height="36"
          viewBox="0 0 120 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <path
            d="M41 11.5L48 10.5V24.5L55 25.5V28L41 25.5V11.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M57 9L64 8V22L71 23V25.5L57 23V9Z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M73 7.5L80 6.5V20.5L77 22.5L73 20.5V7.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      name: 'Netflix',
      Component: () => (
        <svg
          width="120"
          height="36"
          viewBox="0 0 120 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <path
            d="M43 9H47V27C47 27 51 26.5 53 26L54 30C50 31 43 32 43 32V9Z"
            fill="currentColor"
          />
          <path d="M56 9H60V23L65 17H70L64 24L70 32H65L60 24V32H56V9Z" fill="currentColor" />
          <path d="M73 9H77V32L73 31.5V9Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Zoom',
      Component: () => (
        <svg
          width="120"
          height="36"
          viewBox="0 0 120 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <path
            d="M45 13H50L60 23V13H65V27H60L50 17V27H45V13Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M68 13H73C73 13 76 13 76 17C76 21 73 21 73 21H70V27H68V13Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M73 17C73 17 74 17 74 19C74 21 73 21 73 21H70"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M78 13H80C80 13 86 13 86 20C86 27 80 27 80 27H78V13Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M80 15C80 15 84 15 84 20C84 25 80 25 80 25"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full pb-16 pt-8 px-6 md:px-16 lg:px-20 bg-white">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 lg:gap-10">
        {logoComponents.map(({ name, Component }) => (
          <div
            key={name}
            className="w-28 md:w-auto flex items-center justify-center text-[#191A23]"
          >
            <Component />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
