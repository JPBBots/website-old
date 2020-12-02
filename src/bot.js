window.bots = {
  weather: { 
    id: '523260365950287906',
    desc: 'A nice easy to use bot that will show you the weather anywhere, anytime!',
    name: 'Weather Bot'
  },
  monke: {
    id: '771124545544781824',
    desc: 'Monkebot the monkey bot aims to improve your VC experience through randomly joining and playing loud, annoying, and obnoxious sounds.',
    name: 'Monke Bot'
  },
  ti84: {
    id: '550823464198471691',
    desc: 'Every high schoolers best friend. The graphing calculator for discord.',
    name: 'TI-84'
  },
  fb: {
    id: '540387160772050954',
    desc: 'Look at famous birthdays that happened on this date!',
    name: 'Famous Birthdays'
  }
}
window.bot = bots[location.host.split('.')[0]]