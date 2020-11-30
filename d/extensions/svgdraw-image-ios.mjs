import {__checkif_iOS} from  '../utilities.mjs';

// commment 'export if no module supported
export
function setup(app,tag,output,base){
  let IMAGE_IOS = {
    shared: {
      debug: app.debug,
      root: app.root,
      svg: app.svg,
    },
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
    let buttons = IMAGE_IOS.shared.root.querySelectorAll('button.image');
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
  function processDraw(menu,e) {
    if (__checkif_iOS()) {
      showDrawButton(false);
      IMAGE_IOS.image.style.display = 'none';
      IMAGE_IOS.shared.svg.style.display = 'block';
    }
  }
  function processSave (image,param) {
    if (!__checkif_iOS()) {
       return false;
    }
    let saveimage= IMAGE_IOS.image;
    if (!saveimage) {
      saveimage = new Image();
      IMAGE_IOS.image = saveimage;
      saveimage.style.display = 'none';
      IMAGE_IOS.output.appendChild(saveimage);
    }
    image.src = param.dataurl;
    image.style.display = 'block';
    IMAGE_IOS.shared.svg.style.display = 'none';
    showDrawButton(true);
    return true;
  }
}
