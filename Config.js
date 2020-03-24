const theme = require('./themes/main.json')

module.exports = {
  title: 'Social Assemble',
  subTitle: 'Assemble for Socially Distant Learning.',
  theme,
  routes: {
    landing: '/',
    addToCal: 'https://docs.google.com/forms/d/1fohXFO7aP3m8yyXPpm3a231_q_l2LZy07WFDOX44AWs',
    calendar: '/calendar',
    instructor: '/instructor',
    student: '/student',
    faq: '/faq'
  },
}
