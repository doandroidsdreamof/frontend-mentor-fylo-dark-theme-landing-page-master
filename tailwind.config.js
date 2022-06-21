module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/app.js",


],
  theme: {
      extend: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        backgroundImage: {
          'curly-mobile': "url('/images/bg-curvy-mobile.svg')",
          'curly-desktop': "url('/images/bg-curvy-desktop.svg')",
          'productive': "url('/images/illustration-stay-productive.png')",

        },
   
        colors: {
          'intro-email-signup-bg': 'hsl(217, 28%, 15%)',
          'main-bg': ' hsl(218, 28%, 13%)',
          'footer-bg': 'hsl(216, 53%, 9%)',
          'testimonials-bg': 'hsl(219, 30%, 18%)',
          'Cyan': 'hsl(176, 68%, 64%)',
          'blue': 'hsl(198, 60%, 50%)',
          'red-error': 'hsl(0, 100%, 63%)',
          'white-dead': 'hsl(0,0%,80%)',
    
        },
        fontFamily: {
          Opensans: '"Open Sans", sans-serif',
          Raleway: "'Raleway', sans-serif",
         
        },
        fontWeight:{
          regular: 400,
          bold: 700,
        },
        fontSize: {
          base: '14px',
        
        },
        minWidth: {
          'fifty': '50%',
          'thirtythree': ': 33.333333%',
        },
         maxWidth: {
          '1/2': '50%',
             'thirtythree': ': 33.333333%',
        },
      
      }
    }
  }