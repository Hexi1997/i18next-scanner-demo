const ns = ['common','pages']

const resources:any = {"en-US":{},"zh":{}};

ns.forEach(item=>{
  resources["en-US"][item] = require(`./en/${item}.json`);
  resources["zh"][item] = require(`./zh/${item}.json`)
})

export default resources;