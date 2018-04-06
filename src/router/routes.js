import Home from '@/components/routes/Home'
import Skills from '@/components/routes/Skills'
import Portfolio from '@/components/routes/Portfolio'
import Cases from '@/components/routes/Cases'
import Blog from '@/components/routes/blog/index'
import Contact from '@/components/routes/Contact'

const Routes = [
  { path: '/', component: Home },
  { path: '/about', name: 'About', redirect: '/' },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/cases', name: 'Cases', component: Cases },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contact', name: 'Contact', component: Contact }
]

export default Routes
