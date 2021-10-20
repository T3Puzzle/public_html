export { importModules };
function importModules(moduleName, first, second, callback) {
      let ret = null;
      import(first)
        .then((module) => {
          ret = new module[moduleName]();
          callback(ret);
        })
        .catch((e) => {
          import(second)
            .then((module) => {
              ret = new module[moduleName]();
              callback(ret);
            })
            .catch((e) => {
              console.log("error");
            });
        });
    }
