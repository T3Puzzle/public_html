
const WALLPAPER = { };
(()=>{with(paper){
  const src_scope = new PaperScope();
  const dst_scope = new PaperScope();
  WALLPAPER.dst_scope = dst_scope;
  WALLPAPER.full = false;
  WALLPAPER.canvas = false;
  WALLPAPER.origin = [0.5,0.5];
  WALLPAPER.width = 300;
  WALLPAPER.height = 400;
  WALLPAPER.qsdefault = '&displayMode=iframe&backgroundColor=1,1,1,1&generatorBoundaryColor=0,0,0';
  WALLPAPER.transform = '&scale=5,1,10&translateX=1&translateY=-0.5';
  if (/full/.test(document.location.search)) {
    WALLPAPER.full = true;
  }
  if (/canvas/.test(document.location.search)) {
    WALLPAPER.canvas = true;
  }
  window.addEventListener('DOMContentLoaded',()=>{bodyMovePrevent();});

  window.addEventListener('load',()=>{load(draw);});
  document.querySelector('iframe').width = '80%';
  document.querySelector('iframe').height = '550';
  document.querySelector('iframe').src = `./?OrbitSeed[]=0,0,1,1${WALLPAPER.qsdefault}${WALLPAPER.transform}`;
  init(draw);
  return;

  function bodyMovePrevent() {
    document.addEventListener('touchmove', e => e.preventDefault(), {
      passive: false
    });
    document.addEventListener('mousewheel', e => e.preventDefault(), {
      passive: false
    });
  }
function draw(type) {
  if (type==='bbox') {
    drawBBox();
    return;
  }
  src_scope.activate();
  let booled = null;
  let _pval_x = 1;

  let len = 3.1;
  new src_scope.Path.Rectangle({
    from: [-len,-len],
    to: [len,len],
    fillColor: 'white',
    opacity: 0.95,
  });
  Object.values(WALLPAPER.wp)[0].map(kv=>{

    let key = Object.keys(kv)[0];
    let value = Object.values(kv)[0];
    let color = WALLPAPER.color[key];
    let color_a = 'black';
    let color_b = 'purple';
   
    if (key==='HalfPlane[]') {
      let inst = WALLPAPER.defs[key].place();
      let [pointX, pointY, normalAngle] = value;
      let [x1,y1]= [pointX, pointY];
      inst.rotate(normalAngle,[0,0]);
      inst.translate(x1,y1);
      let tmp = inst.definition.item.children[1].copyTo(src_scope.project);
      tmp.rotate(normalAngle,[0,0]);
      tmp.translate(x1,y1);
      tmp.strokeColor = color_a;
      tmp.strokeWidth = 0.012;
      if (!booled) {
        booled = tmp;
      } else {
        booled = booled.intersect(tmp, {insert: false});
      }
      tmp.remove();
    } else if ((key==='ParallelTranslation[]')
      || (key==='GlideReflection[]')) {
      let inst = WALLPAPER.defs[key].place();
      let [pointX, pointY, normalAngle, planeDistance] = value;
      _pval_x = planeDistance;

      let [x1,y1]= [pointX, pointY];
      inst.rotate(normalAngle,[0,0]);
      inst.translate(x1,y1);

      let theta = normalAngle*Math.PI/180;
      let [x2,y2] = [
        x1+planeDistance*Math.cos(theta),
        y1+planeDistance*Math.sin(theta)
      ];
      let rot2 = normalAngle + 180;
      let inst2 = WALLPAPER.defs[key].place();
      inst2.rotate(rot2,[0,0]);
      inst2.translate(x2,y2);

      let tmp = inst.definition.item.children[1].copyTo(src_scope.project);
      tmp.rotate(normalAngle,[0,0]);
      tmp.translate(x1,y1);
      tmp.strokeColor = color_a;
      tmp.strokeWidth = 0.01;

      let tmp2 = inst2.definition.item.children[1].copyTo(src_scope.project);
      tmp2.rotate(rot2,[0,0]);
      tmp2.translate(x2,y2);
      tmp2.strokeColor = color_a;
      tmp2.strokeWidth = 0.01;

      let tmp3 = tmp.intersect(tmp2,{insert:false});
      if (!booled) {
        booled = tmp3;
      } else {
        booled = booled.intersect(tmp3, {insert: false});
      }
      tmp.remove();
      tmp2.remove();

      let line = new src_scope.Path.Line({
        from: [0,0],
        to: [planeDistance,0],
        strokeColor: color,
        strokeWidth: 0.015
      });
      line.rotate(normalAngle,[0,0]);
      line.translate([x1,y1]);
      let tip = 0.12;
      let arrow = new src_scope.Path({
        segments: [[0,0],[tip*3/7,0],[0,tip]],
        fillColor: color,
      });
      let arrow2;
      if (key==='ParallelTranslation[]') {
        arrow2 = arrow.clone();
      } else {
        arrow2 = new src_scope.Path({
          segments: [[0,0],[-tip*3/7,0],[0,tip]],
          fillColor: color,
        });
      }
      arrow.rotate(normalAngle-90,[0,0]);
      arrow.translate([x1,y1]);

      arrow2.translate(0,-tip);
      arrow2.rotate(normalAngle-90,[0,0]);
      arrow2.translate([x2,y2]);

      if (key==='GlideReflection[]') {
        new src_scope.Shape.Circle({
          center: [x1,y1],
          radius: 0.03,
          fillColor: color
        });
      }

    } else if (key==='Rotation[]') {
      let inst = WALLPAPER.defs[key].place();
      let  [pointX, pointY, boundaryAngle, degrees] = value;
      let [x1,y1]= [pointX, pointY];
      inst.rotate(boundaryAngle+90,[0,0]);
      inst.translate(x1,y1);

      let rot2 = boundaryAngle + degrees;
      let inst2 = WALLPAPER.defs[key].place();
      inst2.rotate(rot2+90+180,[0,0]);
      inst2.translate(x1,y1);

      let tmp = inst.definition.item.children[1].copyTo(src_scope.project);
      tmp.rotate(boundaryAngle+90,[0,0]);
      tmp.translate(x1,y1);
      tmp.strokeColor = color_a;
      tmp.strokeWidth = 0.01;

      let tmp2 = inst2.definition.item.children[1].copyTo(src_scope.project);
      tmp2.rotate(rot2+90+180,[0,0]);
      tmp2.translate(x1,y1);
      tmp2.strokeColor = color_a;
      tmp2.strokeWidth = 0.01;

      let tmp3 = tmp.intersect(tmp2,{insert:false});
      if (!booled) {
        booled = tmp3;
      } else {
        booled = booled.intersect(tmp3, {insert: false});
      }
      tmp.remove();
      tmp2.remove();

      let size = 1.2;
      let theta = boundaryAngle*Math.PI/180;
      let theta2 = (boundaryAngle+degrees/2)*Math.PI/180;
      let theta3 = (boundaryAngle+degrees)*Math.PI/180;
      let [fx,fy] = [size*Math.cos(theta),size*Math.sin(theta)];
      let [hx,hy] = [size*Math.cos(theta2),size*Math.sin(theta2)];
      let [tx,ty] = [size*Math.cos(theta3),size*Math.sin(theta3)];
      let arc = new Path.Arc({
        from: [fx,fy],
        through: [hx,hy],
        to: [tx,ty],
        strokeColor: color,   
        strokeWidth: 0.012,
      });
      arc.translate(x1,y1);

      let tip = 0.1;
      let arrow = new src_scope.Path({
        segments: [[-tip*2/7,0],[tip*2/7,0],[0,tip]],
        fillColor: color,
      });
      let arrow2 = arrow.clone();
      arrow.rotate(boundaryAngle,[0,0]);
      arrow.translate(x1+fx,y1+fy);

      arrow2.translate(0,-tip);
      arrow2.rotate(rot2,[0,0]);
      arrow2.translate(x1+tx,y1+ty);

      new src_scope.Shape.Circle({
        center: [x1,y1],
        radius: 0.03,
        fillColor: color
      });
    }
  });
  if (false) {
    new src_scope.Shape.Circle({
      center: [0,0],
      radius: 0.03,
      fillColor: "black"
    });
  }
  src_scope.view.draw();

  if (booled) {
    if (/:bbox:/.test(Object.keys(WALLPAPER.wp)[0])) {
      saveBBox([0,0,_pval_x,1]);
    } else { 
      booled.addTo(src_scope.project.activeLayer);
      saveBBox(calcBBox(booled));
    }
  } else {
    if (Object.values(WALLPAPER.wp)[0].length===0) {
      saveBBox([0,0,_pval_x,1]);
    }
  }
  WALLPAPER.svgbase.querySelector('svg > g').innerHTML = (src_scope.project.exportSVG().innerHTML);
  return;

  function calcBBox () {
    let minX=1000;
    let maxX=-1000;
    let minY=1000;
    let maxY=-1000;
    booled.segments.map(s=>{
      if ( s.point.x < minX ) { minX = s.point.x.toFixed(4); }
      if ( s.point.x > maxX ) { maxX = s.point.x.toFixed(4); }
      if ( s.point.y < minY ) { minY = s.point.y.toFixed(4); }
      if ( s.point.y > maxY ) { maxY = s.point.y.toFixed(4); }
    });
    return [minX,minY,maxX,maxY];
  }
  function saveBBox (val) {
    let [minX,minY,maxX,maxY] = val;
    WALLPAPER.svgbase.setAttribute('x-bbox',[minX,minY,maxX-minX,maxY-minY].join(','));
    let path = new src_scope.Path.Rectangle({
      from: [minX,minY],
      to: [maxX,maxY],
      strokeWidth: 0.01,
      strokeColor: 'black',
      dashArray: [0.03,0.03],
    });
    drawBBox();
  }
  function drawBBox () {
    let bbox = WALLPAPER.svgbase.getAttribute('x-bbox');
    if (!bbox || bbox.length===0) {
      return;
    }
    let [minX,minY,rwidth,rheight]=bbox.split(',').map(v=>parseFloat(v));
    let dst = document.querySelector('canvas#dst');
    let dwidth = rwidth * src_scope.view.zoom;
    let dheight = rheight * src_scope.view.zoom;
    if (dwidth!== dst.width || dheight !== dst.height) {
      dst_scope.project.getItems({class: Path}).map(i=>{
        i.scale(dwidth/dst.width,dheight/dst.height,0,0);
        i.strokeWidth = 15*Math.sqrt(dwidth/100);
      });
      dst.width = dwidth;
      dst.height = dheight;
    }
    if (WALLPAPER.canvas) {
      let data = dst.toDataURL();
      document.querySelector('iframe').contentWindow.changeCanvasSeedTextureURL(data);
    }
  }
}
function load(callback) {
  src_scope.setup(document.getElementById('src'));
  dst_scope.setup(document.getElementById('dst'));
  src_scope.view.center = WALLPAPER.origin;
  src_scope.view.zoom = 100;
  WALLPAPER.defs = {};
  Object.keys(WALLPAPER.color).map(key=>{
    WALLPAPER.defs[key] = plane(WALLPAPER.color[key]);
  });
  callback();
  return;

  function plane (color) {
    const PLANE_SIZE = 10;
    let halfp =  new src_scope.Path.Rectangle( new src_scope.Rectangle({
      point: [-PLANE_SIZE,-PLANE_SIZE],
      size: [PLANE_SIZE,PLANE_SIZE*2],
    }));
    halfp.fillColor= color;
    halfp.opacity= 0.2;
    let dummy =  new src_scope.Path.Rectangle( new src_scope.Rectangle({
      point: [0,-PLANE_SIZE],
      size: [PLANE_SIZE,PLANE_SIZE*2],
    }));
    return new src_scope.SymbolDefinition(new src_scope.Group([halfp,dummy]));
  }
}
function init(callback) {

  let tool = new dst_scope.Tool();
  let path = null;
  tool.onMouseDown = (e) => {
    path = new dst_scope.Path();
    path.strokeColor = '#00ffff';
    let pval_x = parseFloat(document.querySelector('input[name="x"]').value);
    path.strokeWidth = 15*Math.sqrt(pval_x);
    path.add(e.point);
  };
  tool.onMouseDrag = (e) => {
    path.add(e.point);
  };
  tool.onMouseUp = (e) => {
    callback('bbox');
  };

  const WIDTH = WALLPAPER.width;
  const HEIGHT = WALLPAPER.height;
  let pkey = ['x'];
  if (WALLPAPER.full) {
    pkey = pkey.concat(['a','b','c']);
  }
  let top = 150;
  if (document.querySelector('form input').style.display !== 'none') {
    top = 175;
  }
  WALLPAPER.svgbase = document.querySelector('div#svgbase');
  WALLPAPER.svgbase.insertAdjacentHTML('beforeend',`
  <canvas style="xdisplay:none;" id="src" width="${WIDTH}" height="${HEIGHT}"></canvas>
  <canvas style="xdisplay:none;position:absolute;top:${top}px;left:100px;" id="dst" resize="false"></canvas>
  <svg style="display:none;" width="${WIDTH}" height="${HEIGHT}"><g transform="translate(${WIDTH/2},${HEIGHT/2})scale(1,-1)translate(${-WIDTH/2},${-HEIGHT/2})">
  </g></svg>
`);
  if (WALLPAPER.full) {
    WALLPAPER.svgbase.insertAdjacentHTML('afterend',`
<p>
<div style="display:flex;">
  <div>
    <select name="detail" style="width:150px;height:100px;" multiple="multiple">
    </select>
  </div>
  <div id="detail_label" style="width:80px;margin-left:10px;">
  </div>
  <div id="detail_input" style="margin-left:10px;">
  </div>
</div>
`);
  }

  WALLPAPER.svgbase.insertAdjacentHTML('afterend',`<button style="margin-left:10px;color:white;font-size:12pt;border-radius: 5px; padding: 10px; text-decoration: none;background-color: black;border-width: 0px;"
  onclick="
  try {
    document.querySelector('iframe').contentWindow.executeCommandTweet();
    this.disabled = 'disabled';
    window.setTimeout(()=>this.disabled='',3000);
    
  } catch (e) {
    alert('CORS limitation: '+e);
  }
  " >ツイート</button>`);

  WALLPAPER.svgbase.insertAdjacentHTML('afterend',`<button style="margin-left:10px;color:white;font-size:12pt;border-radius: 5px; padding: 10px; text-decoration: none;background-color: black;border-width: 0px;"
  onclick="
  window.setTimeout(()=>this.textContent='3秒...',1000);
  window.setTimeout(()=>this.textContent='2秒...',2000);
  window.setTimeout(()=>this.textContent='1秒...',3000);
  window.setTimeout(
    ()=>{
      try {
         document.querySelector('iframe').contentWindow.executeCommandSaveImage()
      } catch (e) {
        alert('CORS limitation: '+e);
      }
      this.textContent = '撮影';
    },
    4000);
  " >撮影</button>`);

  WALLPAPER.svgbase.insertAdjacentHTML('afterend',`<button style="margin-left:10px;color:white;font-size:12pt;border-radius: 5px; padding: 10px; text-decoration: none;background-color: black;border-width: 0px;"
  onclick="
  WALLPAPER.dst_scope.project.clear();
  [document.querySelector('canvas#dst')].map(c=>{
    if(c){c.getContext('2d').clearRect(0,0,c.width,c.height)}
  });
  try {
    document.querySelector('iframe').contentWindow.executeCommandResetScene();
  } catch (e) {
    document.querySelector('iframe').src = document.querySelector('iframe').src;
  }
  " >やり直し</button>`);

  WALLPAPER.svgbase.insertAdjacentHTML('afterend','<br/>');
  ['renderGenerator','videoOrbit'].map(name=>{
    let label = document.createElement('input');
    label.disabled = 'disabled';
    label.size = 15;
    label.value = name;
    WALLPAPER.svgbase.insertAdjacentElement('afterend',label);
    let input = document.createElement('input');
    input.name = name;
    input.type = 'checkbox';
    if (name==='renderGenerator') {
      input.checked = true;
    }
    input.addEventListener('change',(ev)=>{
      redraw(ev);_view();
    });
    WALLPAPER.svgbase.insertAdjacentElement('afterend',input);
  });
  WALLPAPER.svgbase.insertAdjacentHTML('afterend','<br/>');

  WALLPAPER.input = {}; 
  pkey.reverse().map(p=>{
    let input = document.createElement('input');
    input.name = p;
    WALLPAPER.input[p] = input; 
    input.type = 'range';
    input.setAttribute('min','0.5');
    input.setAttribute('max','2');
    input.setAttribute('step','0.1');
    input.value = 1;
    input.addEventListener('change',(ev)=>{
      redraw(ev);_view();
    });
    WALLPAPER.svgbase.insertAdjacentElement('afterend',input);
    if (false) {
      WALLPAPER.svgbase.insertAdjacentHTML('afterend',`<br/><input size="5" disabled="disabled" value="${p}">`);
    } else {
      WALLPAPER.svgbase.insertAdjacentHTML('afterend',`<br/> `);
    }
  });

  [document.querySelector('select[name="detail"]')].map(s=>{
    if (s) {
    document.querySelector('select[name="detail"]').addEventListener('change',_detail);
    }
  });
  WALLPAPER.color = {
    'HalfPlane[]': 'red',
    'ParallelTranslation[]': 'blue',
    'Rotation[]': 'green',
    'GlideReflection[]': 'orange',
  };
  redraw();
  return;

  function redraw (ev) {
    let pval = {};
    pkey.map(p=>{
      pval[p] = parseFloat(WALLPAPER.input[p].value);
    });
    const _wps = getWps(pval);
    let source='init';
    if (ev) {
      let target = ev.target;
      if (target.tagName.toLowerCase()==='a') {
        source='anchor';
      } else {
        source='input';
      }
    }
    let wpi = 0;
    if (source==='anchor') {
      let xid = ev.target.getAttribute('x-id');
      if (xid && xid.length>0) {
        wpi = parseInt(xid,10);
      }
    } else if (source==='input') {
      wpi = getWpi();
    }
    WALLPAPER.wp = _wps[wpi];
    if (!(source==='init')) {
      src_scope.project.clear()
      callback(ev);
    }
    setWpi(wpi);
    [document.querySelector('select')].map(s=>{
      if(s) { s.innerHTML = _opt(); }
    });
    if (!(source==='anchor')) {
      _menu(_wps,pval);
    }
  }
  function _opt() {
    return Object.values(WALLPAPER.wp)[0].map(g=>{
     let key = Object.keys(g)[0];
     let value = Object.values(g)[0];
     return `<option value="${key}:${value}">${key}</option>`;
    }).join('');
  }  
  function _detail (e) {
    kv = e.target.value;
    let [key,valstr]=kv.split(':');
    let values = valstr.split(',');
    if (key==='HalfPlane[]') {
      _input(['pointX', 'pointY', 'normalAngle'], values);
    } else if (key==='GlideReflection[]') {
      _input(['pointX', 'pointY', 'normalAngle', 'planeDistance'], values);
    } else if (key==='ParallelTranslation[]') {
     _input(['pointX', 'pointY', 'normalAngle', 'planeDistance'], values);
    } else if (key==='Rotation[]') {
      _input(['pointX', 'pointY', 'boundaryAngle', 'degrees'], values);
    }
    return;

    function _input (labels,values) {
      let ret = [];
      document.querySelector('div#detail_label').innerHTML
    = labels.map(label=>{
       return `<input size="12" disabled="disabled" value="${label}"><br/>`
      }).join('');
      values.forEach((value,i)=>{
        ret.push(`<input size="15" name="${labels[i]}" value="${value}"><br/>`);
      });
      document.querySelector('div#detail_input').innerHTML = ret.join('');
    }
  }
  function qs (wp) {
    return Object.values(wp)[0].map(g=>{ 
      return Object.keys(g)[0]+'='+Object.values(g)[0].join(',')
    }).join('&')
  }
  function setWpi (wpi) {
    WALLPAPER.svgbase.setAttribute('x-id',wpi);
  }
  function getWpi () {
    let xid = WALLPAPER.svgbase.getAttribute('x-id');
    if (xid && xid.length>0) {
      wpi = parseInt(xid,10);
    }
    return wpi;
  }
  function _view() {
    let wpi = getWpi();
    document.querySelector(`a[x-id="${wpi}"]`).click();
  }
  function _menu (_wps,pval) {
    let menu = document.querySelector('div#menu');
    menu.innerHTML = '';
    menu.style['line-height'] = '50px';
    let xid=0;
    _wps.map(g=>{
      let a = document.createElement('a');
      let color = /:(red|blue|green|orange):/.exec(Object.keys(g)[0])[1];
      if (!color) {
        color = 'gray';
      }
      let title = /(^IH\d+|^[0-9]+\.[^\s]+|^[A-Z][a-zA-Z0-9]+$)/.exec(Object.keys(g)[0])[1];
      a.innerText = title;
      if ('2.回転'===(title)) {
        title += "&maxIterations=40";
      }
      let getHref = ()=>{
        let base_href = localStorage.getItem('base_href');
        if (!base_href || base_href.length==0) {
          base_href = './';
        }
        return base_href + encodeURI(`?title=${title}${WALLPAPER.qsdefault}${WALLPAPER.transform}${getChecked("renderGenerator",title,pval)}${getChecked("videoOrbit",title,pval)}&${qs(g)}`)
      };
      a.href = getHref();
      a.setAttribute('x-id',xid); 
      a.target = '_blank';
      a.addEventListener('click',(ev)=>{
        redraw(ev);
        a.href = getHref();
        document.querySelector('iframe').src = ev.target.href;
        ev.preventDefault();
      });
      menu.insertAdjacentHTML('beforeend',' ');
      menu.insertAdjacentElement('beforeend',a);
      a.style['background-color'] = color;
      a.style['color'] = 'white';
      a.style['border-radius'] = '5px';
      a.style['padding'] = '15px 15px';
      a.style['text-decoration'] = 'none';
      xid++;
    });
  }
function getChecked (name,title,pval) {
  let checked = document.querySelector(`input[name="${name}"]`).checked;
  if (name === 'videoOrbit') {
    let type = 'OrbitSeed[]';
    if (WALLPAPER.canvas) {
      type = 'CanvasSeed[]'; 
    }
    if (checked) {
      type = `VideoOrbit[]`;
    }
      return `&${type}=${getBBox()}`;
  } else if (name==='renderGenerator') {
    if (!checked) {
      return '&renderGenerator=false';
    } else {
      return '';
    }
  }
function getBBox () {
  let bbox = WALLPAPER.svgbase.getAttribute('x-bbox');
  if (bbox) {
    return bbox;
  } else {
    return '-0.5,-0.5,1,1';
  }
}
}
function conv(array) {
  let ret = array.map(o=>{
    let ret2 = {};
    let k = Object.keys(o)[0];
    let v= Object.values(o)[0].map(p=>{
      let key = Object.keys(p)[0];
      let vals = Object.values(p)[0];
      let len = vals.length;
      let ret3={};
      if (key==='HalfPlane[]') {
        if (len===4) {
          let rot = Math.atan2(vals[3],vals[2])*180/Math.PI;
          ret3[key] = [vals[0],vals[1],rot];
        } else {
          return p;
        }
      } else {
        if (len===5) {
          let rot = Math.atan2(vals[3],vals[2])*180/Math.PI;
          ret3[key] = [vals[0],vals[1],rot,vals[4]];
        } else {
          return p;
        }
      }
      return ret3;
    });
    ret2[k] = v;
    return ret2;
  });
  return ret;
}
function getWps (pval) {
let reg = new RegExp('');
if (!WALLPAPER.full) {
  reg = new RegExp('(:rect:|^[0-9]+\.[^\s]+|^[A-Z][a-zA-Z0-9]+$)');
}
return conv([
{ "0.はじめ :bbox: :red:" : [
  ]
},
{ "1.鏡 :bbox: :red:" : [
     {"HalfPlane[]":[0,0,0]},]
},
{ "2.鏡 :bbox: :red:": [ 
     {"HalfPlane[]":[0,0, 1, 0]},
     {"HalfPlane[]":[pval.x,0,-1, 0]},
]},
{ "4.鏡 IH48: pmm = halfp x4 :rect: :red:": [ 
     {"HalfPlane[]":[0,0, 1, 0]},
     {"HalfPlane[]":[pval.x,0,-1, 0]},
     {"HalfPlane[]":[0,0, 0, 1]},
     {"HalfPlane[]":[0,1, 0,-1]},
]},
{ "1.直進 :bbox: :blue:": [
     {"ParallelTranslation[]":[0,0.5,0,pval.x]},]
},
{ "2.直進 IH41: p1 = para x2 :rect: :blue:": [
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
     {"ParallelTranslation[]":[pval.x/2,0, 0, 1, 1]},
]},
{ "1.直進2.鏡 IH42:(64) pm = para   +halfp x2 :rect: :blue:": [
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
     {"HalfPlane[]":[0,0, 0, 1]},
     {"HalfPlane[]":[1,1, 0,-1]},
]},
{ "1.回転 :bbox: :green:" : [
     {"Rotation[]":[0,0.5,270,180]},]
},
{ "2.回転 IH55: p4 = rot x2 :rect: :green:": [
     {"Rotation[]":[0,0, 1, 0, 90]},
     {"Rotation[]":[1,1, -1,0, 90]},
]},
{ "4.回転 IH46: p2 = rot x4 :rect: :green:": [
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"Rotation[]":[pval.x/2,1,-1, 0, 180]},
     {"Rotation[]":[0,0.5, 0,-1, 180]},
     {"Rotation[]":[pval.x,0.5, 0, 1, 180]},
]},
{ "1.回転2.鏡 IH56: p4g = rot +halfp x2 :rect: :green:": [
     {"Rotation[]":[0,0, 1, 0, 90]},
     {"HalfPlane[]":[1,0, -1, 0]},
     {"HalfPlane[]":[0,1, 0, -1]},
]},
{ "2.回転2.鏡 IH49: pmg = rot x2 +halfp x2 :rect: :green:": [
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"Rotation[]":[pval.x/2,1,-1, 0, 180]},
     {"HalfPlane[]":[0,0, 1, 0]},
     {"HalfPlane[]":[pval.x, 0, -1,0]},
]},
{ "2.回転1直進 IH47: p2 = para +rot x2 :rect: :green:": [
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"Rotation[]":[pval.x/2,1,-1, 0, 180]},
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
]},
{ "1.回転1.鏡1.直進 IH50:(66) pmg = rot +para +halfp :rect: :green:": [ 
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"HalfPlane[]":[0,1, 0, -1]},
     {"ParallelTranslation[]":[0, 0.5, 1, 0, pval.x]},
]},
{ "1.滑鏡 :bbox: :orange:" : [
     {"GlideReflection[]":[0,0.5,0,pval.x]},]
},
{ "2.滑鏡 IH52: pgg = glide x2 :rect: :orange:": [
     {"GlideReflection[]":[  0, 0.5, 1, 0, pval.x]},
     {"GlideReflection[]":[pval.x/2,   0, 0, 1, 1]},
]},
{ "IH1(IH41): p1 = para x3(x2) [xa]": (()=>{
     let [xc,yc]=[pval.x/2,1/2];
     let [x1,y1]=[0,1];
     let [dxc1,dyc1]=[x1-xc,y1-yc];
     let rad = Math.sqrt(dxc1*dxc1+dyc1*dyc1);
     let [x2,y2]=[xc+rad*Math.cos(pval.a*Math.PI/2),
                  yc+rad*Math.sin(pval.a*Math.PI/2)];
     let [x3,y3]=[pval.x,1];
     let [dx21,dy21]=[x1-x2,y1-y2];
     let [dx23,dy23]=[x3-x2,y3-y2];
     let [mx21,my21]=[(x1+x2)/2,(y1+y2)/2];
     let [dxca,dyca]=[mx21-xc,my21-yc];
     let distca = Math.sqrt(dxca*dxca+dyca*dyca);
     let [mx23,my23]=[(x3+x2)/2,(y3+y2)/2];
     let [dxcb,dycb]=[mx23-xc,my23-yc];
     let distcb = Math.sqrt(dxcb*dxcb+dycb*dycb);
     let ang = Math.atan(dy21,dx21);
     if (ang<0) {
       return [
         {"ParallelTranslation[]":[mx21,my21,-dy21,dx21,distca*2]},
         {"ParallelTranslation[]":[mx23,my23,dy23,-dx23,distcb*2]},
         {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
       ];
     } else {
       return [
         {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
         {"ParallelTranslation[]":[pval.x/2,0, 0, 1, 1]},
       ];
     }
 })()
},
{ "IH2: p2 = para +rot x4 ": [
     {"ParallelTranslation[]":[0,0.5/Math.sqrt(3), 1, 0,1]},
     {"Rotation[]":[1/4,-1/4/Math.sqrt(3),Math.sqrt(3),-1, 180]},
     {"Rotation[]":[1/4,5/4/Math.sqrt(3), -Math.sqrt(3),-1, 180]},
     {"Rotation[]":[3/4,5/4/Math.sqrt(3),-Math.sqrt(3),1, 180]},
     {"Rotation[]":[3/4,-1/4/Math.sqrt(3), Math.sqrt(3),1, 180]},
]},
{ "IH8=23: p2 = para  +rot x3 ": [
     {"ParallelTranslation[]":[0,1/4/Math.sqrt(3), 1, 0,1]},
     {"Rotation[]":[0.5,0.5/Math.sqrt(3), -1, 0,180]},
     {"Rotation[]":[1/4,-1/4/Math.sqrt(3),Math.sqrt(3),-1, 180]},
     {"Rotation[]":[3/4,-1/4/Math.sqrt(3), Math.sqrt(3),1, 180]},
]}, 
{ "IH57: p2 = para x2   +rot ": [
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
     {"ParallelTranslation[]":[pval.x/2,1, 0, -1, 2]}, 
]},
{ "IH84: p2 = rot x3 ": [
     {"Rotation[]":[pval.x,0, 1, 0, 180]},
     {"Rotation[]":[0,1, 0,-1, 180]},
     {"Rotation[]":[pval.x,1,-pval.x, 1, 180]},
]},
{ "IH64: pm = para x2   +halfp ": [
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x]},
     {"HalfPlane[]":[0,0, 0, 1]},
     {"ParallelTranslation[]":[pval.x/2,-1, 0, 1, 2]},
]},
{ "1.滑鏡2.鏡 IH45: cm = halfp x2 +glide :rect: :orange:": [
     {"HalfPlane[]":[0,0, 0, 1]},
     {"HalfPlane[]":[1,1, 0,-1]}, 
     {"GlideReflection[]":[0,0.5, 1, 0, pval.x]},
]},
{ "1.滑鏡1.直進 IH43: pg = para +glide :rect: :orange:": [
     {"GlideReflection[]":[0,0.5, 1, 0, pval.x]},
     {"ParallelTranslation[]":[pval.x/2,0, 0, 1, 1]},
]},
{ "IH68: cm = para x2 + halfp ": [
     {"ParallelTranslation[]":[0+1.5/2/Math.sqrt(2),0.5-1.5/2/Math.sqrt(2), 1, 1, 1.5]},
     {"ParallelTranslation[]":[0+1.5/2/Math.sqrt(2),0.5+1.5/2/Math.sqrt(2), 1, -1,1.5]},
     {"HalfPlane[]":[1.5/Math.sqrt(2),0, -1, 0]},
]},
{ "IH65: pmm = para +halfp x3 ": [
     {"HalfPlane[]":[0,1, 0,-1]},
     {"HalfPlane[]":[0,0, 0,1]},
     {"HalfPlane[]":[pval.x,0, -1,0]},
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x*2]},
]},
{ "IH72: pmm = para x2 +halfp x2 ": [
     {"HalfPlane[]":[0,1, 0,-1]},
     {"HalfPlane[]":[pval.x,0, -1,0]},
     {"ParallelTranslation[]":[pval.x/2, 0, 0, 1, 2]},
     {"ParallelTranslation[]":[0,0.5, 1, 0, pval.x*2]},
]},
{ "IH13: pmg = para +halfp +rot x2 ": [
     {"ParallelTranslation[]":[0,3/4/Math.sqrt(3), 1, 0,1]},
     {"HalfPlane[]":[0.5,0.5/Math.sqrt(3), 0, 1]},
     {"Rotation[]":[1/4,5/4/Math.sqrt(3), -Math.sqrt(3),-1, 180]},
     {"Rotation[]":[3/4,5/4/Math.sqrt(3),-Math.sqrt(3),1, 180]},
]},
{ "IH58: pmg = rot +halfp +para ": [
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"HalfPlane[]":[0,0, 1, 0]},
     {"HalfPlane[]":[pval.x,0, -1, 0]},
     {"ParallelTranslation[]":[pval.x/2,-1, 0, 1, 2]},
]},
{ "IH85=69: pmg rot x2 + halfp ": [ 
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"Rotation[]":[0,1/2, 0, -1, 180]},
     {"HalfPlane[]":[pval.x,0,-1, -pval.x]},
]},
{ "1.滑鏡2.回転 IH51: pgg = glide +rotate x2 :rect: :orange:": [
     {"GlideReflection[]":[0, 0.5, 1, 0, pval.x]},
     {"Rotation[]":[pval.x/2,0, 1, 0, 180]},
     {"Rotation[]":[pval.x/2,1, -1, 0, 180]},
]},
{ "IH78=74: cmm = rot +halfplane x2 [x] ": [
     {"HalfPlane[]":[0,0, 1,-1]},
     {"HalfPlane[]":[0,0, 1,1]},
     {"Rotation[]":[(pval.x+1/pval.x)/2,(pval.x-1/pval.x)/2, 
      (-1/pval.x+pval.x), 
      (1/pval.x+pval.x),
      180]},
]},
{ "IH79: p4 = rot x2 ": [
     {"Rotation[]":[0,0, 1,-1, 90]},
     {"Rotation[]":[1,0, 0,1, 180]},
]},
{ "IH80=82: p4m = halfp x3": [
     {"HalfPlane[]":[0,0, 1,-1]},
     {"HalfPlane[]":[0,0, 1,1]},
     {"HalfPlane[]":[1,0,-1,0]},
]},
{ "IH71: p4g = halfp + glide ": [
     {"GlideReflection[]":[0+1.5/2/Math.sqrt(2),-1.5/2/Math.sqrt(2), 1, 1, 1.5]},
     {"GlideReflection[]":[0+1.5/2/Math.sqrt(2),1.5/2/Math.sqrt(2), 1, -1,1.5]},
     {"HalfPlane[]":[1.5/Math.sqrt(2),0, -1, 0]},
]},
{ "IH81: p4g = rot +halfp ": [
     {"Rotation[]":[0,0, 1,-1, 90]},
     {"HalfPlane[]":[1,0, -1, 0]},
]},
{ "IH33: p3 = rot x2 ": [
     {"Rotation[]":[0,0, 1, -Math.sqrt(3), 120]},
     {"Rotation[]":[3/2,0, -1, Math.sqrt(3), 120]},
]},
{ "IH87=19: p3m1 = halfp x3 ": [
     {"HalfPlane[]":[3/2,0,-1, 0]},
     {"HalfPlane[]":[0,0, 1, Math.sqrt(3)]},
     {"HalfPlane[]":[0,0, 1, -Math.sqrt(3)]},
]},
{ "IH30: p31m = rot +halfp x2 [x]": [
     {"HalfPlane[]":[2,0,-1, 0]},
     {"HalfPlane[]":[0,0, 1, Math.sqrt(3)]},
     {"Rotation[]":[4/3,0, Math.cos(pval.x*Math.PI/3+Math.PI), Math.sin(pval.x*Math.PI/3+Math.PI), 120]},
     //{"Rotation[]":[4/3,0, 1, -3, 120]},
]},
{ "IH38=36=89: p31m = halfp x1 +rot ": [
     {"HalfPlane[]":[2,0,-1, 0]},
     {"Rotation[]":[4/3,0, 1, -Math.sqrt(3), 120]},
]},
{ "IH31: p6 = rot x2 ": [
     {"Rotation[]":[0,0, Math.sqrt(3),-1, 60]},
     {"Rotation[]":[3/2,0, -1,Math.sqrt(3), 120]},
]},
{ "IH39: p6 = rot x2 ": [
     {"Rotation[]":[3/2,0, 1,Math.sqrt(3), 120]},
     {"Rotation[]":[9/8, Math.sqrt(3)*3/8, -Math.sqrt(3), -1, 180]},
]},
{ "IH88: p6 = rot x2 ": [
     {"Rotation[]":[0,0, 1,0, 60]},
     {"Rotation[]":[9/8,Math.sqrt(3)*3/8, -1, Math.sqrt(3), 180]},
]},
{ "IH77=93: p6m = halfp x3 ": [
     {"HalfPlane[]":[0,0, 0, 1]},
     {"HalfPlane[]":[3/2,0,-1, 0]},
     {"HalfPlane[]":[0,0,1,-Math.sqrt(3)]},
]},
{ "IH92: p6m = rot +halfp x2 ": [
     {"Rotation[]":[0,0, Math.sqrt(3),-1, 60]},
     {"HalfPlane[]":[0,0, 0, 1]},
     {"HalfPlane[]":[3/2,0, -1, 0]},
]},
    ].filter(o=> reg.test(Object.keys(o)[0]))
);
}
} // init
}})();
