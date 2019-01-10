class DOMNodeCollection {
  constructor(html_elements) {
    this.HTMLElements = html_elements;
  }

  html (str) {
    if (str === undefined) {
      return this[0].innerHTML;
    } else {
      this[0].innerHTML = str;
    }
  }

  empty() {
    for (let i = 0; i < this.length; i++) {
      this[i].innerHTML = "";
    }
  }

  append(arg) {
    let newHTML = "";
    if (arg instanceof DOMNodeCollection) {
      for (let i = 0; i < arg.HTMLElements.length; i++) {
        newHTML += arg.HTMLElements[i].outerHTML;
      } 
    } else if (arg instanceof HTMLElement) {
      newHTML = arg.outerHTML;
    } else if (typeof arg === "string") {
      newHTML = arg;
    } else {
      return "invalid parameters";
    }

    for (let i = 0; i < this.HTMLElements.length; i++) {
      this.HTMLElements[i].innerHTML += newHTML;
    }
  }

  attr(attributeName, value) {
    if (value === null) {
      for (let i = 0; i < this.HTMLElements.length; i++) {
        this.HTMLElements[i].removeAttribute(attributeName);
      }
    } else if (typeof value === "string" || typeof value === "number") {
      for (let i = 0; i < this.HTMLElements.length; i++) {
        this.HTMLElements[i].setAttribute(attributeName, value);
      }   
    } else {
      return this.HTMLElements[0].getAttribute(attributeName);
    }
  }

  addClass(newClass) {
    if (typeof newClass === "string") {
      let currentClass;
      for (let i = 0; i < this.HTMLElements.length; i++) {
        currentClass = this.HTMLElements[i].getAttribute("class");
        if (currentClass !== null) {
          newClass = currentClass + " " + newClass;
        }
        this.HTMLElements[i].setAttribute("class", newClass);
      }
    }
  } 
  

  removeClass(killClass) {
    if (typeof killClass === "string") {
      let currentClass;
      let newClass;
      for (let i = 0; i < this.HTMLElements.length; i++) {
        currentClass = this.HTMLElements[i].getAttribute("class").split(" ");
        delete currentClass[currentClass.indexOf(killClass)];
        newClass = currentClass.join(" ");
        this.HTMLElements[i].setAttribute("class", newClass);
      }
    }
  }

   children() {
     let kids = new DOMNodeCollection();
     for (let i = 0; i < this.HTMLElements.length; i++) {
       kids.HTMLElements.concat(this[i].HTMLElements.children);
     }
     return kids;
  }

}


module.exports = DOMNodeCollection;