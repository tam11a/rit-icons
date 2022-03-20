import * as React from 'react'

const SvgNote = ({ title, titleId, ...props }) => (
  <svg
    id='notes-18_svg__Layer_1'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    width='1em'
    height='1em'
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>
        {
          '.notes-18_svg__cls-1{fill:#fefefe}.notes-18_svg__cls-3{fill:#304653}.notes-18_svg__cls-4{fill:#c9d3e3}.notes-18_svg__cls-5{fill:#acb4cb}.notes-18_svg__cls-8{fill:#4d5a68}'
        }
      </style>
    </defs>
    <path
      className='notes-18_svg__cls-1'
      d='M499.09 174a.92.92 0 0 1-.81.19h-.13a1.4 1.4 0 0 1-.29-.16c-2.29-5.8-3.58-12-7.2-17.29-3.72-5.47-8.58-9.51-14-13a15.47 15.47 0 0 1-4.08-3.16 1.4 1.4 0 0 1-.09-.17 1.42 1.42 0 0 1-.15-.56 1.82 1.82 0 0 1 0-.33 1.87 1.87 0 0 1 0-.25c7.44-13.07 15.34-25.88 22.37-39.2 2.07-3.91 2.56-8.29 4.37-12.24-.58 8.25-4.2 15.33-8.41 22.24-4.84 8-9.18 16.2-14 24.18-1.13 1.88-2.08 3.93-4 5.17l-.21.06a.3.3 0 0 1-.05.24c6.45 3.91 12.89 7.8 17.52 14.05a43.06 43.06 0 0 1 8.36 20.22 1.49 1.49 0 0 1 .8.01Z'
    />
    <path
      d='M499.09 174v11.38c-.28 0-.56 0-.84.07a10.15 10.15 0 0 1-.1-11.3 1.34 1.34 0 0 1 .13-.23 1.49 1.49 0 0 1 .81.08Z'
      style={{
        fill: '#a2acb2'
      }}
    />
    <path
      className='notes-18_svg__cls-3'
      d='M499.09 75.43v12.33c-.58 8.25-4.2 15.33-8.41 22.24-4.84 8-9.18 16.2-14 24.18-1.13 1.88-2.08 3.93-4 5.17l-.21.06a.43.43 0 0 1-.14 0c-1.7.44-3.16-.39-4.54-1.19-10.2-5.9-20.35-11.87-30.6-17.68a4.16 4.16 0 0 1-2.21-2.34v-.12a1.61 1.61 0 0 1 0-.31c.05-3.35 2.34-5.8 3.89-8.47 11.47-19.88 23-39.71 34.45-59.61 1.15-2 1.81-4.88 5.09-4.72 11.07 6.52 17.65 16.15 19.89 28.78a6.26 6.26 0 0 0 .79 1.68Z'
    />
    <path
      className='notes-18_svg__cls-4'
      d='M100.46 84.33c-.32 13.29-13.16 20.28-24.13 13.39a14.69 14.69 0 0 1-7-12.73c-.3-13.07-.15-26.14-.07-39.21a6 6 0 0 1 1.38-4.4c0-3.15.26-6.33 0-9.45-.84-8.81 2.27-15.3 10.48-19.06h7.58c8.66 2.82 11.67 6.94 11.76 16.22q.06 6.15 0 12.29v.86c.2 14.03.34 28.07 0 42.09ZM158.27 84.36C158 97.65 145 104.65 134.1 97.68c-4.95-3.15-7-8.06-7-13.72-.09-13.91-.17-27.81 0-41.72V29.13c.09-9.3 3.11-13.45 11.77-16.26h7.58c8.65 2.81 11.67 6.94 11.76 16.21v13.16c.26 14.04.4 28.09.06 42.12Z'
    />
    <path
      className='notes-18_svg__cls-5'
      d='M273 84.36c-.31 13.29-13.24 20.29-24.17 13.32-4.94-3.15-6.95-8.06-7-13.72-.08-13.91-.17-27.82 0-41.73V29.13c.08-9.3 3.1-13.45 11.76-16.26h7.58c8.66 2.81 11.67 6.94 11.76 16.21 0 4.08.05 8.18 0 12.27v.87c.22 14.05.36 28.1.07 42.14ZM329.75 85.42c-.61 12.76-14.12 19.17-24.55 12-4.63-3.2-6.52-8-6.55-13.47-.06-13.91-.16-27.8.05-41.7V29.17c.09-9.31 3.11-13.46 11.77-16.27h7.58c8.51 3.81 11.31 10.63 10.47 19.51-.28 3 0 6 0 9a6.09 6.09 0 0 1 1.39 4.4c.03 13.19.46 26.4-.16 39.61ZM215.21 83.63c0 6.41-2.1 11.75-8 14.94-2.22 1.19-7.3 2.82-9.92 1.85a3.93 3.93 0 0 1-.4-.28 1.6 1.6 0 0 1-.24-.22 2.73 2.73 0 0 1-.26-.31 2.58 2.58 0 0 1-.32-.53c-.77-2-4.69-4.82-4.7-6.86 0-24.07 2.14-48.14 2.17-72.22 0-2.48 1.47-5 3.3-7.13h6.58c8.1 2 11.47 6.13 11.73 14.62.14 4.61.07 9.24 0 13.86V42.22c.17 13.78.07 27.61.06 41.41Z'
    />
    <path
      className='notes-18_svg__cls-4'
      d='M199.61 98.93a3.84 3.84 0 0 1-.3.28c-1.86 1.64-3.91.82-5.79 0-6.41-2.87-9.5-8-9.54-15-.08-14-.16-28 0-42v-.86c0-4.58-.09-9.16 0-13.73.23-8.33 3.76-12.71 11.74-14.78h3.79Z'
    />
    <path
      className='notes-18_svg__cls-1'
      d='M128.46 32.87c.27 2.81 0 5.67 0 8.51a5.26 5.26 0 0 1-1.34.86 6.91 6.91 0 0 1-2.56.5q-10.77.24-21.55 0a6.85 6.85 0 0 1-2.55-.5 5.14 5.14 0 0 1-1.35-.86c0-3.15-.26-6.33 0-9.45.84-8.81-2.27-15.3-10.48-19.06 8.66 2.82 11.67 6.94 11.76 16.22q.06 6.15 0 12.29h26.67V29.13c.09-9.3 3.11-13.45 11.77-16.26-8.68 3.91-11.26 10.99-10.37 20ZM243.14 32.38c.28 3 0 6 0 9a5.22 5.22 0 0 1-1.35.88 6.85 6.85 0 0 1-2.55.5q-10.78.26-21.58 0a6.58 6.58 0 0 1-2.54-.51 4.93 4.93 0 0 1-1.35-.87c0-3.59-.24-7.19 0-10.76.67-8.44-2.43-14.5-10.47-17.72 8.1 2 11.47 6.13 11.73 14.62.14 4.61.07 9.24 0 13.86h26.68V29.16c.08-9.3 3.1-13.45 11.76-16.26-8.37 3.78-11.17 10.6-10.33 19.48ZM300 32.38c.28 3 0 6 0 9a5 5 0 0 1-1.34.87 7.86 7.86 0 0 1-3 .55q-9.84.16-19.69 0a7.78 7.78 0 0 1-3-.55 4.55 4.55 0 0 1-1.36-.87c0-3.15-.26-6.32.05-9.44.86-8.81-2.28-15.28-10.48-19 8.66 2.81 11.67 6.94 11.76 16.21 0 4.08.05 8.18 0 12.27h25.76V29.21c.09-9.31 3.11-13.46 11.77-16.27C302 16.68 299.17 23.5 300 32.38ZM185.32 31.1c.3 3.4 0 6.85 0 10.28a4.75 4.75 0 0 1-1.35.86 5.44 5.44 0 0 1-2.08.46q-10.77.33-21.54 0a5.49 5.49 0 0 1-2.09-.46 4.93 4.93 0 0 1-1.34-.86c0-3.15-.27-6.33 0-9.45.85-8.81-2.26-15.3-10.47-19.06 8.65 2.81 11.67 6.94 11.76 16.21v12.3H184c0-4.58-.09-9.16 0-13.73.23-8.33 3.76-12.71 11.74-14.78-7.95 3.49-11.18 9.63-10.42 18.23Z'
    />
    <path
      d='M385.2 329.54c-2.25-.36-2.87 1.63-3.93 2.84-12.8 14.62-26.41 28.35-42.27 39.67l-.58.42-.2.14a84.81 84.81 0 0 1-9.46 7.09c-14.33 9.2-28.5 18.65-42.67 28.09a22.69 22.69 0 0 0-7.09 7.41c-3.46 5.84-6.62 11.85-10.35 17.51-4.28 6.51-10.68 8.1-17.63 4.55-.14-.06-.27-.14-.41-.21s-.24-.2-.35-.31c-6.26-5.46-7.26-10.74-3.37-18.06a137.14 137.14 0 0 1 7.54-13.12 29.07 29.07 0 0 0 5-15.52c.24-6.15.81-12.27 1.11-18.4.67-13.85 1.29-27.69 2.82-41.48v-1.48c.11-2.19.65-4.31.94-6.48 4.89-37.53 18.31-71.62 41.13-101.91 16.9-22.41 34.58-44.21 51.84-66.35 5.62-7.21 11.29-14.39 16.84-21.66 1.06-1.38 2.88-3 1.77-4.54a4.5 4.5 0 0 0-1.85-1.3 24.66 24.66 0 0 0-5.63-.37c-45.22 0-133.81.87-160.85 1.23-2.17-1.3-12.15-1.3-14.26-1.3q-86.53-.06-173.07 0c-2.18 0-4.47-.21-6.25 1.52-.05 1.1-.15 2.21-.15 3.31v322.2a45.49 45.49 0 0 0 1.38 11.71c5.6 21 21.88 33.37 43.7 33.4h282.65c21.62 0 39-14.45 43-35.71a25.79 25.79 0 0 0 .68-4.67q.06-64.08-.03-128.22ZM85.86 212.88h55.89c8.67 0 15.12 6 15.18 14.09 0 8.31-6.39 14.32-15.41 14.34H86.11c-9.15 0-15.47-6-15.42-14.33.05-8.06 6.5-14.09 15.17-14.1Zm.23 85.31h83.85c9 0 15.47 6 15.42 14.32-.05 8.06-6.49 14.1-15.17 14.1H85.88c-8.69 0-15.13-6-15.19-14.08-.06-8.31 6.38-14.33 15.4-14.34Zm-.69 113.75c-6.12 0-10.7-2.65-13.34-8.08-2.57-5.26-1.86-10.5 1.76-15.09 3-3.84 7.16-5.32 12.06-5.31q54.24.09 108.5 0c1.73 0 3.44.1 5.17.06 8.5.25 14.21 5.87 14.21 14.16s-5.53 13.83-14 14.08l-.06.08-.13.18q-57.08-.02-114.17-.08Z'
      style={{
        fill: '#fff'
      }}
    />
    <path
      d='M472.46 140.35a6.42 6.42 0 0 1-1.26 3.26c-4.37 7-7.27 14.6-10.16 22.25l-.04.14-.27.67c-6.65 16.65-13.48 33.23-19.89 50-.42 1.05-.82 2.1-1.21 3.15s-.72 1.87-1.07 2.81c-8.78 20.77-16.77 41.86-25.69 62.57-2.27 5.26-4.19 10.78-8 15.27-2.65 1.54-3.14 4.57-4.7 6.85-5 7.38-10 14.83-15 22.25-12.82 15.2-26.55 29.45-42.63 41.26-1.14.84-2.36 1.55-3.55 2.32a4 4 0 0 1-.6-.65c-1.11-1.51-.78-3.4-.72-5.11.57-16.93-5.81-30.38-19.82-40.08a5.9 5.9 0 0 1-1.9-2.07 3.43 3.43 0 0 1-.09-.44 2 2 0 0 1 0-.24c-.29-2.46 1.25-4.36 2.38-6.3 27.49-47.16 54.55-94.56 82-141.76q15.33-26.4 30.45-52.91a27 27 0 0 1 3.63-5.52l.08-.05a.87.87 0 0 1 .19-.1.94.94 0 0 1 1 .18c12.11 7.3 24.24 14.55 36.76 21.13a.34.34 0 0 1 .1.21.3.3 0 0 1-.05.24 4.11 4.11 0 0 1 .06.67Z'
      style={{
        fill: '#b02e65'
      }}
    />
    <path
      className='notes-18_svg__cls-8'
      d='M206.11 127.57H14c0-16.07-1.26-32.21.57-48.21 2.51-22 20.23-37.52 42.41-38 4.57-.1 9.14 0 13.72.05v41.67c0 9.65 5.73 16.07 14.21 16.07s14.18-6.45 14.2-16.1V41.38h29.35v41.67c0 9.65 5.73 16.07 14.21 16.07s14.18-6.42 14.21-16.07V41.38h28.4v42.85c.06 8.67 5.29 14.15 13.66 14.67h.56l6.95-.83c.12.11.51.35.61.47.65.73-.56 2-.52 3 .34 7.4.34 13.48 0 20.88.05 1.12-.43 5.15-.43 5.15Z'
    />
    <path
      className='notes-18_svg__cls-3'
      d='M498.28 173.93v11.53c-1.26 10.31-6.22 18.69-13.49 25.87-14.2 14-27 29.12-36.38 46.9a157.52 157.52 0 0 0-17.6 62.77c-.64 8.82-7.05 14.66-15.18 14.15s-13.64-7.12-13.16-16c.24-4.41.81-8.79 1.33-13.18.22-1.87.7-3.71 1.06-5.56 1.44-5.67 4.84-10.48 7-15.84q11.33-28.17 22.84-56.27c.82-2 1.91-4 2.87-5.91a44 44 0 0 1 3.25-5.78c3.27-5 7.37-9.41 11.41-13.78 4.39-4.73 8.61-9.6 13.06-14.27 5.55-5.81 5.09-13.21-.9-18.71-1.2-1.09-2.81-1.8-3.68-3.2a3.91 3.91 0 0 1-.48-1.14 93.87 93.87 0 0 1 12.08-25.75l.09-.12c6.45 3.91 12.89 7.8 17.52 14.05a43.06 43.06 0 0 1 8.36 20.24Z'
    />
    <path
      d='M434.62 118.14c-3.08 7.8-8 14.6-12.08 21.82-12.35 21.77-25 43.38-37.51 65-12.29 21.25-24.66 42.46-36.92 63.73-10.7 18.55-21.29 37.15-31.93 55.73a1.27 1.27 0 0 1-1.26.6c-5.67-1.75-11-4.35-17.11-4.94a45.71 45.71 0 0 0-29.59 7.08c-1.8 1.13-3.41 2.94-5.93 2.19a226.77 226.77 0 0 1 16.35-65.13c10.26-24.78 26.21-45.81 42.71-66.56 17.74-22.3 35.25-44.78 52.84-67.19a26.81 26.81 0 0 0 1.75-2.8 31.89 31.89 0 0 1 9.54-12.22c5.75-5.13 8.6-12.28 12.85-18.45 1.73-.69 3 .41 4.33 1.17 9.51 5.43 18.93 11 28.49 16.38 1.49.88 3.13 1.61 3.47 3.59Z'
      style={{
        fill: '#e8336d'
      }}
    />
    <path
      className='notes-18_svg__cls-3'
      d='M385.54 115.09a75.63 75.63 0 0 1-9.54 12.22c-17.32 0-34.65-.13-52-.14-39.58 0-124.44.41-124.44.41l.06-28.65c9.68-1.05 14.25-6.12 14.25-15.85V40.95h29.37v42.17c0 9.24 5.87 15.6 14.2 15.6s14.17-6.36 14.21-15.6V40.95h28.45v42.17c0 9.24 5.87 15.6 14.21 15.6s14.17-6.36 14.2-15.6c.05-14.06 0-28.11 0-42.17 8.95.2 18-.94 26.75 1.92a43.92 43.92 0 0 1 30.09 40.5c.2 10.57.15 21.15.19 31.72Z'
    />
    <path
      className='notes-18_svg__cls-8'
      d='M434.62 118.14Q416.47 107.6 398.33 97c7.48-13.48 14.55-27.24 23.34-39.9C434.92 38.05 458 33.41 478.39 45c-5.34 5.11-7.79 12.09-11.46 18.24-10.57 17.68-20.73 35.6-31 53.44a5.05 5.05 0 0 0-.3 1.38Z'
    />
    <path
      className='notes-18_svg__cls-5'
      d='M315.31 324.6a4.94 4.94 0 0 0 .87-.14c12.17 7.67 20.07 18.35 22.24 32.7.79 5.23.44 10.63.6 16-5 5.15-11.27 8.5-17.13 12.44q-17.83 12-35.89 23.66a17.88 17.88 0 0 0-6 6.45c-3.54 6.31-7.37 12.46-11 18.73-3.05 5.27-13 8.36-18.24 4-1.27-1.87 0-3.31.86-4.76 20.59-35.5 41-71.11 61.61-106.57a5.3 5.3 0 0 1 2.08-2.51Z'
    />
    <path
      className='notes-18_svg__cls-4'
      d='M315.31 324.6c-3.25 8.58-8.67 16-13.15 23.89-12.29 21.74-24.92 43.29-37.43 64.91-4 6.93-8 13.87-12.07 20.78-.8 1.36-1.77 2.6-1.9 4.25-7.47-4.36-9.72-11.74-5.67-19.33 2.67-5 5.39-10 8.54-14.73a28.19 28.19 0 0 0 4.56-14.62q1.46-26 3-51.93c.18-2.82.71-5.62 1.08-8.43 8.25-5.3 16.67-10 26.84-10.68 9.42-.64 18.12 1.05 26.2 5.89Z'
    />
    <path
      className='notes-18_svg__cls-1'
      d='m461 166-.75-.47c-5.47 11.24-9.59 23-14.23 34.6-2.95 7.37-6.62 14.47-8.43 22.28.67-.88 1.35-1.76 2-2.63a340 340 0 0 1 27-30.66 12.61 12.61 0 0 0 3.31-6.63c1.33-6.81-1.09-11.4-8.9-16.49Zm4.31 22.58c-4.45 4.67-8.67 9.54-13.06 14.27-4 4.37-8.14 8.77-11.41 13.78 6.41-16.73 13.24-33.31 19.89-50 .87 1.4 2.48 2.11 3.68 3.2 5.97 5.55 6.43 12.95.88 18.76Z'
    />
  </svg>
)

export default SvgNote
