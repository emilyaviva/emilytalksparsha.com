import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerFontFamily: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Noticia Text', 'Times New Roman', 'serif'],
  googleFonts: [
    { name: 'Lato', styles: ['700'] },
    { name: 'Noticia Text', styles: ['400', '400i', '700', '700i'] }
  ],
  headerGray: 20,
  bodyGray: 20,
  headerWeight: 700,
  bodyWeight: 400,
  rhythm: 1.05
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
