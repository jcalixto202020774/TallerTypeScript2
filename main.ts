
import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById("averageSeasons")!;
let details: HTMLElement = document.getElementById('colDetails')!;


renderSeriesInTable(data);
averageSeasonsElm.innerHTML = `${getAverageSeasons(data)}`

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td onclick="setSerieCard(this)">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    trElement.onclick = () => setSerieCard(serie);
    seriesTbody.appendChild(trElement);
  });
}

function setSerieCard(serie: Serie){
  if (details.firstChild != null){
    details.removeChild(details.firstChild);}
  let card = document.createElement("card");
  card.setAttribute("style","width: 18rem;")
  card.innerHTML = `<img src="${serie.image}" class="card-img-top" height="400px" width="150px>
                   <div class="card-body">
                   <h5 class="card-title">${serie.name}</h5>
                   <p class="card-text">${serie.description}</p>
                   <a href="_" >${serie.stream}</a>
                   </div>`;
  details.appendChild(card)
}

 
function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return totalSeasons/series.length;
}
