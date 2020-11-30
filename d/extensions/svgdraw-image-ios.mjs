import {__checkif_iOS} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,tag,output,base){
  let IMAGE_IOS = {
    root: app.root,
    svg: app.svg,
    image: null,
    output: output,
    draw: {
      button: null,
    },
  };
  base.insertButton ('image/draw','🖍 ','image');
  base.bindHook('menu',output,'image/draw',processDraw,IMAGE_IOS.draw);
  showDrawButton(false);
  base.bindHook('image',output,'processSave',processSave);
  return build;
  
  function build (param) {
    return;
  }
  function showDrawButton(flag) {
    let buttons = IMAGE_IOS.root.querySelectorAll('button.image');
    for (let bi=0;bi<buttons.length;bi++) {
      let button = buttons[bi];
      let value = ''
      if (flag) {
        value = 'none';
      }
      button.style.display = value;
    }
    {
      let value = 'none'
      if (flag) {
        value = '';
      }
      IMAGE_IOS.draw.button.style.display = value;
    }
  }
  function processDraw(e) {
    if (__checkif_iOS()) {
      showDrawButton(false);
      IMAGE.image.style.display = 'none';
      IMAGE.svg.style.display = 'block';
    }
  }
  function processSave (param) {
    if (!__checkif_iOS()) {
       return false;
    }
    let image = IMAGE_IOS.image;
    if (!image) {
      image = new Image();
      IMAGE_IOS.image = image;
      image.style.display = 'none';
      IMAGE_IOS.output.appendChild(image);
    }
    image.src = param.dataurl;
    image.style.display = 'block';
    IMAGE_IOS.svg.style.display = 'none';
    showDrawButton(true);
    return true;
  }
}
