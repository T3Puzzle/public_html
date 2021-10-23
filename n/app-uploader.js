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
        this.__img = this.querySelector("img.img");
        // common
        this.__modal = this.querySelector("dialog-modal");
        this.__grid = this.querySelector("grid-puzzle");
        this.__form = this.querySelector("form");
        this.__src = this.querySelector("div.src");
        //
        this.__name = this.getAttribute("name");
        this.__storage = document.querySelector(
          "app-storage[name=" + this.__name + "]"
        );
      }
      static get observedAttributes() {
        return ["_upload", "_open","_age"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === "_upload") {
          upload(this.__storage, this.__form, this.__src, this.__img);
        } else if (name === "_open") {
          open(
            () => this.__modal.setAttribute("open", ""),
            this.__storage,
            this.__grid,
            this.__form,
            this.__src,
            this.__img
          );
        } else if (name === "_age") {
           this.__storage.setAttribute("age",newValue);
        }
      }
    }
  );
  function open(callback, storage, grid, form, src, img) {
    // form
    switchSubmitButton(form.querySelector("input[type=submit]"), "open");
    // src, img
    switchGridDisplay(src, img, "src");
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
          grid.setAttribute("loaddata", updateData(v, "_force_noral"))
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

  function upload(storage, form, src, img) {
    let data = form.querySelector("input[name=data]").value;
    // form(data) -> storage
    {
      storage.setAttribute("_append", updateData(data, "_append_input", form));
    }
    // form(data), src -> form, img
    // form -> server
    // server -> storage
    {
      //
      let submit = form.querySelector("input[type=submit]");
      switchSubmitButton(submit, "submitting");

      saveImage(
        src,
        data,
        (content) => {
          form.querySelector("input[name=content]").value = content;
          img.src = "data:image/png;base64," + content;
          // image
          switchGridDisplay(src, img, "img");
          //
          try {
            fetch_upload(
              form,
              (serverjson) => {
                switchSubmitButton(submit, "close");
                //
                storage.setAttribute("meta", JSON.stringify(serverjson.meta));
                //
                updateData(data, "_append_meta", serverjson.meta);
                storage.setAttribute("_last_modified", JSON.stringify(json));
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
  function updateData(jsonStr, action, value) {
    if (!jsonStr) {
      return;
    }
    let json = JSON.parse(jsonStr);
    if (action === "_remove_meta") {
      // clense meta
      delete json.meta;
    } else if (action === "_append_meta") {
      json.meta = value;
    } else if (action === "_append_input") {
      let form = value;
      if (!("meta" in json)) {
        json.meta = {};
      }
      ["title", "note"]
        .map((n) => ({ n, v: form.querySelector("[name=" + n + "]").value }))
        .map((nv) => (json.meta[nv.n] = nv.v));
    } else if (action === "_force_normal") {
      json = forceNormal(json);
    } else if (action === "_unwrap") {
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
  function switchGridDisplay(src, img, action) {
    if (action === "src") {
      src.style.display = "block";
      img.style.display = "none";
    } else if (action === "img") {
      src.style.display = "none";
      img.style.display = "block";
    }
  }
  function switchSubmitButton(submit, action) {
    let form = submit.form;
    if (action === "open") {
      if (submit.value === submit.getAttribute("x-close")) {
        // reset
        ["title", "note"].map(
          (n) => (form.querySelector("[name=" + n + "]").value = "")
        );
      }
      let x_onsubmit = form.getAttribute("x-onsubmit");
      if (!x_onsubmit) {
        form.setAttribute("x-onsubmit", form.getAttribute("onsubmit"));
        submit.setAttribute("x-value", submit.getAttribute("value"));
      } else {
        form.setAttribute("onsubmit", form.getAttribute("x-onsubmit"));
        submit.setAttribute("value", submit.getAttribute("x-value"));
        submit.removeAttribute("disabled");
      }
    } else if (action === "submitting") {
      submit.disabled = "disable";
      submit.value = submit.getAttribute("x-submitting");
    } else if (action === "close") {
      submit.removeAttribute("disabled");
      submit.value = submit.getAttribute("x-close");
      form.setAttribute("onsubmit", form.getAttribute("x-onclose"));
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
