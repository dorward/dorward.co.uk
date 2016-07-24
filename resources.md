# Background Textures

* https://philiprogers.com/svgpatterns/#carbonfiber
* https://developer.mozilla.org/en-US/docs/Web/API/Body/json

## Carbon

    <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15'>
        <rect width='50' height='50' fill='#282828' />
        <circle cx='3' cy='4.3' r='1.8' fill='#393939' />
        <circle cx='3' cy='3' r='1.8' fill='black' />
        <circle cx='10.5' cy='12.5' r='1.8' fill='#393939' />
        <circle cx='10.5' cy='11.3' r='1.8' fill='black' />
    </svg>

## Cream paper

    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='500' height='500'>
        <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='10' stitchTiles='stitch'/>
        </filter>
        <rect width='500' height='500' fill='#FCFBE3'/>
        <rect width='500' height='500' filter="url(#n)" opacity='0.4'/>
    </svg>
    