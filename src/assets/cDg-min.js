"use strict";
export class cDg {
  constructor(e) {
    this.id = e;
  }
  view() {
    const e = document.getElementById(this.id).src.split("/");
    var t = "";
    for (let c = 0; c < e.length; c++)
      2 == c
        ? (t +=
            e[c].replaceAll("-", "--").replaceAll(".", "-") +
            atob("LnRyYW5zbGF0ZS5nb29n") +
            "/")
        : c != e.length - 1
        ? (t += e[c] + "/")
        : (t += e[c]);
    return (document.getElementById(this.id).src = encodeURI(t)), encodeURI(t);
  }
}
