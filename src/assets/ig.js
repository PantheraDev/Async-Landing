import { cDg } from "./cDg-min.js";
const API2 =
  "https://instagram130.p.rapidapi.com/account-medias?userid=1623774085&first=40";

const content2 = null || document.getElementById("profile");
const image = null || document.getElementById("image1");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1b57a82b4emsh9004d339ac3e81bp1debfbjsn230e170adeb0",
    "X-RapidAPI-Host": "instagram130.p.rapidapi.com",
  },
};

async function fecthData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const result = await fecthData(API2);
    image.setAttribute("src", `${result.edges[3].node.display_url}`);
    let newUri1 = new cDg("image1").view();
  } catch (e) {
    console.log(e);
  }
})();
