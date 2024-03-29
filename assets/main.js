const API = "https://pokeapi.co/api/v2/pokemon";

const content = null || document.getElementById("content");

async function fecthData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const team = [
      "lucario",
      "empoleon",
      "giratina-origin",
      "greninja",
      "charizard",
      "ditto",
    ];
    const image = [];
    for (poke of team) {
      image.push(await fecthData(`${API}/${poke}`));
    }
    let view = image
      .map(
        (imge) => `<div class="group relative">
      <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
      >
        <img src="${imge.sprites.front_default}" alt="" class="w-full" />
      </div>
      <div class="mt-4 flex justify-between flex-col items-center">
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${imge.name}
        </h3>
      </div>
    </div>`
      )
      .join("");
    content.innerHTML = view;
  } catch (e) {
    console.log(e);
  }
})();
