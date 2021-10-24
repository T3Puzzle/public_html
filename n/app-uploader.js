import { domtoimage } from "https://www.t3puzzle.com/n/dom-to-image.module.min.js";
import { buffer } from "https://www.t3puzzle.com/n/buffer.module.js";
import { writeMetadata } from "https://www.t3puzzle.com/n/writeMetadata.module.js?m";

(() => {
  const SERVER_URL =
    "https://script.google.com/a/tessellation.jp/macros/s/AKfycbzNfVfpZuYhGT6XZ_0ElgV0ASYb2_Th1qOOjvBWUWssEPBGm3fM/exec";
  customElements.define(
    "app-uploader",
    class extends HTMLElement {
      constructor() {
        super();
        // common
        this.__modal = this.querySelector("dialog-modal");
        this.__modal.addEventListener("change", (e) => {
          if (e.detail.value === "close") {
            this.setAttribute("_close", "");
          }
        });  
       this.__grid = this.querySelector("grid-puzzle");
       if (!this.__grid) {
          let me = this;
          this.__modal.addEventListener("load",()=>{
            me.__grid = me.querySelector("grid-puzzle");
            me.__form = me.querySelector("form");
          });
        } else {
          this.__form = this.querySelector("form");
        }
          //
        this.__name = this.getAttribute("name");
        this.__storage = document.querySelector(
          "app-storage[name=" + this.__name + "]"
        );
      }
      static get observedAttributes() {
        return ["_save", "_open", "_close", "_age"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "_save") {
          save(
            (v) =>
              this.__storage.setAttribute(
                "_append",
                updateData(v, "_append_form", this.__form)
              ),
            this.__storage,
            this.__grid,
            this.__form
          );
        } else if (name === "_open") {
          open(
            () => this.__modal.setAttribute("_open", ""),
            this.__storage,
            this.__grid,
            this.__form
          );
        } else if (name === "_close") {
          close(this.__grid);
        } else if (name === "_age") {
          this.__storage.setAttribute("age", newValue);
        }
      }
    }
  );
  function open(callback, storage, grid, form) {
    switchSubmitButton(form, "open");
    // storage -> form
    // storage -> grid
    {
      [storage.getAttribute("_last_modified")]
        .filter((v) => v)
        .map(
          (v) =>
            (form.querySelector("input[name=data]").value = updateData(
              v,
              "_unwrap"
            ))
        )
        .map((v) =>
          grid.setAttribute("_load_data", updateData(v, "_force_normal"))
        );
    }
    // storage -> form
    {
      ["artist", "age"]
        .map((n) => ({ n, i: form.querySelector("input[name=" + n + "]") }))
        .filter((ni) => ni.i)
        .map((ni) => (ni.i.value = storage.getAttribute(ni.n)));
    }
    // callback
    callback();
  }
  function save(callback, storage, grid, form) {
    let data = form.querySelector("input[name=data]").value;
    if (false) {
      // local save only
      callback(data);
      switchSubmitButton(form, "close");
    } else {
      let {src,dst} = setupImage(grid, "_add");

      //
      let submit = form.querySelector("input[type=submit]");
      switchSubmitButton(form, "submitting");

      saveImage(
        src,
        data,
        (content) => {
          form.querySelector("input[name=content]").value = content;
          dst.src = "data:image/png;base64," + content;
          // image
          switchGridDisplay(src, dst, "dst");
          //
          try {
            fetch_upload(
              form,
              (serverjson) => {
                data = updateData(data, "_append_meta", serverjson.meta);
                callback(data);
                switchSubmitButton(form, "close");
              },
              (e) => {
                console.log(e);
                submit.value = "😨";
              }
            );
          } catch (e) {
            submit.value = "😨";
            console.log(e);
          }
        },
        () => {
          submit.value = "🤔";
        }
      );
    }
  }
  function close(gird) {
    setupImage(gird, "_remove");
  }
  function updateData(jsonStr, action, value) {
    if (!jsonStr) {
      return;
    }
    let json = JSON.parse(jsonStr);
    if (action === "_remove_meta") {
      // clense meta to embed into image
      delete json.meta;
    } else if (action === "_append_meta") {
      // append server meta
      json.meta = value;
    } else if (action === "_append_form") {
      // append local meta
      let form = value;
      if (!("meta" in json)) {
        json.meta = {};
      }
      ["title", "note"]
        .map((n) => ({ n, v: form.querySelector("[name=" + n + "]").value }))
        .map((nv) => (json.meta[nv.n] = nv.v));
    } else if (action === "_force_normal") {
      // remove transparency to prevent from safari bug
      json = forceNormal(json);
    } else if (action === "_unwrap") {
      // todo: fix grid-puzzle
      json = unwrap(json);
    }
    return JSON.stringify(json);

    function unwrap(json) {
      // 0: normal -> 0
      // 1: lock   -> 1
      // 2: wrap   -> 0
      json.tiles.map((t) => {
        if (t[6] > 1) {
          t[6] = 0;
        }
      });
      return json;
    }
    function forceNormal(json) {
      // 0: normal -> 0
      // 1: lock   -> 0
      // 2: wrap   -> 0
      json.tiles.map((t) => {
        t[6] = 0;
      });
      return json;
    }
  }
  function setupImage(grid, action) {
    let forName = grid.getAttribute("for");
    let src = grid.querySelector(forName);
    let dst = null;
    if (action === "_add") {
      dst = document.createElement("img");
      dst.classList.add("dst");
      dst.setAttribute("width", grid.getAttribute("width"));
      dst.setAttribute("height", grid.getAttribute("height"));
      src.insertAdjacentElement("afterend", dst);
    } else if (action === "_remove") {
      dst = grid.querySelector("img.dst");
      if (dst) {
        grid.removeChild(dst);
      }
    }
    switchGridDisplay(src, dst, "src");
    return { src, dst};
  }
  function switchGridDisplay(src, dst, action) {
    if (action === "src") {
      src.style.display = "block";
      if (dst) {
        dst.style.display = "none";
      }
    } else if (action === "dst") {
      src.style.display = "none";
      if (dst) {
        dst.style.display = "block";
      }
    }
  }
  function switchSubmitButton(form, action) {
    let submit = form.querySelector("input[type=submit]");
    if (action === "open") {
      if (submit.value === submit.getAttribute("x-value-end")) {
        // reset
        ["title", "note"].map(
          (n) => (form.querySelector("[name=" + n + "]").value = "")
        );
      }
      let x_onsubmit_start = form.getAttribute("x-onsubmit-start");
      if (!x_onsubmit_start) {
        form.setAttribute("x-onsubmit-start", form.getAttribute("onsubmit"));
        submit.setAttribute("x-value-start", submit.getAttribute("value"));
      } else {
        form.setAttribute("onsubmit", form.getAttribute("x-onsubmit-start"));
        submit.setAttribute("value", submit.getAttribute("x-value-start"));
        submit.removeAttribute("disabled");
      }
    } else if (action === "submitting") {
      submit.disabled = "disable";
      submit.value = submit.getAttribute("x-value-wait");
    } else if (action === "close") {
      submit.removeAttribute("disabled");
      submit.value = submit.getAttribute("x-value-end");
      form.setAttribute("onsubmit", form.getAttribute("x-onsubmit-end"));
    }
  }
  function fetch_upload(form, successCallback, errorCallback) {
    const body = new FormData(form);
    fetch(SERVER_URL, {
      method: "POST",
      body: body,
      mode: "cors",
      redirect: "follow"
    })
      .then((r) => r.json())
      .then((j) => successCallback(j))
      .catch((e) => errorCallback(e));
  }

  function saveImage(src, data, successCallback, errorCallback) {
    (async () => {
      try {
        domtoimage.toPng(src).then((dataurl) => {
          let txt = dataurl.split(",")[1];
          let buf = buffer.Buffer.from(txt, "base64");
          // confusing name but works!
          let metadata = {
            tEXt: {
              meta: updateData(data, "_remove_meta")
            }
          };
          let bufwithmeta = writeMetadata(buf, metadata);
          let b64 = bufwithmeta.toString("base64");
          successCallback(b64);
        });
      } catch (e) {
        console.log("e::" + e);
        errorCallback();
      }
    })();
  }
})();
