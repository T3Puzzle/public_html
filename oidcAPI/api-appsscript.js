import {gapi} from "./gapi.js";
(()=>{
 customElements.define("api-appsscript", class extends HTMLElement { 
   static get observedAttributes () {
     return ["_api","_args","_call"];
   }
   attributeChangedCallback (name, oldValue, newValue) {
     if (name==="_api") {
        this._API_NAME = newValue;
        this._API_ARGS = [];
     } else if (name==="_args") {
        let args = newValue;
        if (args) {
          this._API_ARGS = args.split(",");
        } else {
          this._API_ARGS = [];
        }
     } else if (name==="_call") {
       if (this._API_NAME===null) {
         return;
       }
       this._API_CALL = newValue;
       updateSigninStatus(
         this,
         this._API_CALL,
         this._API_NAME,
         this._API_ARGS,
         gapi.auth2.getAuthInstance().isSignedIn.get()
      );
      this._API_CALL = null;
      this._API_NAME = null;
      this._API_ARGS = null;
     }
   }
   constructor () {
     super();
     this._API_KEY = this.getAttribute("api-key");
     this._CLIENT_ID = this.getAttribute("client-id"); 
     this._SCRIPT_ID = this.getAttribute("script-id");
     this._SCOPES = this.getAttribute("scopes");
     this.attachShadow({mode:"open"});
     Array.from(this.childNodes).map(v=>
       this.shadowRoot.appendChild(v)
     );
     let apibutton = this.shadowRoot.querySelector('api-button');
     if (apibutton) {
       this._BUTTON = document.createElement("button");
       this._BUTTON_SIGNIN = apibutton.getAttribute("value") || "authorize";
       this._BUTTON_SIGNOUT= apibutton.getAttribute("value-signout") || "sign out";
       apibutton.append(this._BUTTON);
       setStatus(this,false);
     }
   }
   connectedCallback () { 
     gapi.load('client:auth2', ()=>initClient(this));
   }
 });
 
function signIn() {
  gapi.auth2.getAuthInstance().signIn();
}
function signOut() {
  gapi.auth2.getAuthInstance().signOut();
  // reset cookie
  [
   "__Secure-3PSIDCC","SIDCC",
   "__Secure-3PAPISID","SSID",
   "__Secure-1PAPISID","HSID",
   "__Secure-1PSID","SID",
   "__Secure-3PSID","SAPISID",
   "APISID","NID",
   "G_ENABLED_IDPS","G_AUTHUSER_H"
  ].map(v=>document.cookie = v+"=;");
}
function setStatus (me,flag) {
  if (!me._BUTTON) {
    if (flag) {
      dispatchEvent(me,"change","authorized");
    } else {
      dispatchEvent(me,"change","signed out");
    }
  } else {
    if (flag) {
      me._BUTTON.removeEventListener("click",signIn);
      me._BUTTON.addEventListener("click",signOut);
      me._BUTTON.textContent = me._BUTTON_SIGNOUT;
    } else {
      me._BUTTON.removeEventListener("click",signOut);
      me._BUTTON.addEventListener("click",signIn);
      me._BUTTON.textContent = me._BUTTON_SIGNIN;
    }
  }
}
function dispatchEvent (me,type,data) {
  me.value = data;
  let value = {
    detail: {
      value: data
    }
  }
  me.dispatchEvent(new CustomEvent(type,value));
}
function initClient(me) {
  gapi.client.init({
    apiKey: me._API_KEY,
    clientId: me._CLIENT_ID,
    scope: me._SCOPES,
    discoveryDocs: ["https://script.googleapis.com/$discovery/rest?version=v1"],
  }).then(function () {
    let auth = gapi.auth2.getAuthInstance();
    if (!auth) {
      dispatchEvent(me,"error","Not initialized. check parameters.");
    }
    auth.isSignedIn.listen((v)=>setStatus(me,v));
    updateSigninStatus(
      me,
      null,
      "load",[],
      auth.isSignedIn.get()
    );
  }, function(error) {
    dispatchEvent(me,"error",JSON.stringify(error, null, 2));
  });
}

function updateSigninStatus(me,api_call,api_name,api_args,isSignedIn) {
  let caller = document.querySelector("#"+api_call);
  if (!api_call) {
    caller = me;
  }
  if (isSignedIn) {
    setStatus(me,true);
    callAppsScript(
      me._SCRIPT_ID,
      api_name,
      api_args,
      function(resp) {
        if (resp.error) {
          if (resp.error.status) {
            dispatchEvent(caller,"error",
              'Error calling API: '+JSON.stringify(resp, null, 2));
          } else {
            var error = resp.error.details[0];
            dispatchEvent(caller,"error",
              'Script error! Message: ' + error.errorMessage);
          }
        } else {
          if (api_name === "load") {
            dispatchEvent(caller,"load",resp.response.result);
          } else {
            dispatchEvent(caller,"change",resp.response.result);
          }
        }
      }
    );
  } else {
    setStatus(me,false)
  }
}
function callAppsScript(scriptId, functionName, parameters, callbackFunc) {
  var request = { 'function': functionName, 'parameters': parameters };
  var op = gapi.client.request({
    'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + scriptId + ':run',
    'method': 'POST',
    'body': request
  });
  op.execute(callbackFunc);
}
})();
