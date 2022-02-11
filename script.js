class Variable {
  constructor(defElement) {
    this.name = defElement.getAttribute("varname");
    this.value = defElement.getAttribute("value");
  }
  displayValues() {
    const vars = document.querySelectorAll(this.name);
    vars.forEach((variable) => {
      const txt = variable.parentElement.innerHTML.replace(
        `<${this.name}>`,
        this.value
      );
      variable.parentElement.innerHTML = txt;
    });
  }
}

const varDefs = document.querySelectorAll("defvar");
let variables = [];
varDefs.forEach((varDef) => {
  variables.push(new Variable(varDef));
});
variables.forEach((variable) => variable.displayValues());
