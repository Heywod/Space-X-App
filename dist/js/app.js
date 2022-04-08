const future = document.getElementById('future');
const past = document.getElementById('past');

getFutureLaunchs();

async function getFutureLaunchs() {
  const resp = await fetch('https://api.spacexdata.com/v5/launches/upcoming');
  const respArr = await resp.json();
  let respObj = respArr
    .reverse()
    .slice(Math.max(respArr.length - 6))
    .reverse();
  respObj.forEach((data) => {
    respData = data;
    const coresUse = respData.cores[0].flight;
    const flight = respData.flight_number;
    const name = respData.name;
    const date = respData.date_local;
    let launchpadShort = respData.launchpad;
    let launchpadLong = respData.launchpad;
    let coreReuse = respData.cores[0].reused;
    let launchImg = '';
    let crew = 'No';
    let details = respData.details;
    let newDate = new Date(date);
    let localDate = newDate.toLocaleDateString();

    if (respData.links.patch.large === null) {
      launchImg = './img/stock-1.png';
    } else {
      launchImg = respData.links.patch.large;
    }

    if (respData.crew != '') {
      crew = 'Yes';
    }

    if (details === null) {
      details = 'No details, sorry.';
    }

    if (coreReuse === true) {
      coreReuse = 'Yes';
    } else if (coreReuse === false) {
      coreReuse = 'No. Farewell core!';
    } else {
      coreReuse = 'N/A';
    }

    if (launchpadShort === '5e9d0d95eda69973a809d1ec') {
      launchpadShort = 'Vandenberg, CA';
    } else if (launchpadShort === '5e9e4501f509094ba4566f84') {
      launchpadShort = 'Cape Canaveral, FL';
    } else if (launchpadShort === '5e9e4502f509094188566f88') {
      launchpadShort = 'Cape Canaveral, FL';
    } else if (launchpadShort === '5e9e4502f5090927f8566f85') {
      launchpadShort = 'Boca Chica, TX';
    } else {
      launchpadShort = '';
    }

    if (launchpadLong === '5e9d0d95eda69973a809d1ec') {
      launchpadLong = 'Vandenberg Space Force Base Space Launch Complex 4E';
    } else if (launchpadLong === '5e9e4501f509094ba4566f84') {
      launchpadLong = 'Cape Canaveral Space Force Station Space Launch Complex 40';
    } else if (launchpadLong === '5e9e4502f509094188566f88') {
      launchpadLong = 'Kennedy Space Center Historic Launch Complex 39A';
    } else if (launchpadLong === '5e9e4502f5090927f8566f85') {
      launchpadLong = 'SpaceX South Texas Launch Site';
    } else {
      launchpadLong = '';
    }

    const launchEl = document.createElement('div');

    launchEl.innerHTML = `
      <div class="card sticky-action col m12 l4 blue-grey darken-2 z-depth-3">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${launchImg}" referrerpolicy="no-referrer">
        </div>
        <div class="card-content grey-text text-lighten-1">
          <span class="card-title activator ">Flight ${flight}: ${name}<i class="material-icons right">more_vert</i></span>
          <span class="activator">${localDate} ${launchpadShort}</span>
        </div>
        <div class="card-reveal blue-grey darken-2 grey-text text-lighten-1">
          <span class="card-title activator">Flight ${flight}: ${name}</span>
          <div>${launchpadLong}</div>
          <br />
          <div>Manned Flight - ${crew}</div>
          <div>Core Total Flights - ${coresUse}</div>
          <div>Salvaging Core - ${coreReuse}</div>
          <br />
          <div>Details: ${details}</div>
        </div>
      </div>
    `;
    future.appendChild(launchEl);
  });
}

getPastLaunches();

async function getPastLaunches() {
  const resp = await fetch('https://api.spacexdata.com/v5/launches/past');
  const respArr = await resp.json();
  let respObj = respArr.slice(Math.max(respArr.length - 6, 0)).reverse();
  respObj.forEach((data) => {
    respData = data;
    const coresUse = respData.cores[0].flight;
    const flight = respData.flight_number;
    const name = respData.name;
    const date = respData.date_local;
    let launchpadShort = respData.launchpad;
    let launchpadLong = respData.launchpad;
    let coreReuse = respData.cores[0].reused;
    let launchImg = '';
    let crew = 'No';
    let details = respData.details;
    let newDate = new Date(date);
    let localDate = newDate.toLocaleDateString();

    if (respData.links.patch.large === null) {
      launchImg = './img/stock-1.png';
    } else {
      launchImg = respData.links.patch.large;
    }

    if (respData.crew != '') {
      crew = 'Yes';
    }

    if (details === null) {
      details = 'No details, sorry.';
    }

    if (coreReuse === true) {
      coreReuse = 'Yes';
    } else if (coreReuse === false) {
      coreReuse = 'No. Farewell core!';
    } else {
      coreReuse = 'N/A';
    }

    if (launchpadShort === '5e9d0d95eda69973a809d1ec') {
      launchpadShort = 'Vandenberg, CA';
    } else if (launchpadShort === '5e9e4501f509094ba4566f84') {
      launchpadShort = 'Cape Canaveral, FL';
    } else if (launchpadShort === '5e9e4502f509094188566f88') {
      launchpadShort = 'Cape Canaveral, FL';
    } else if (launchpadShort === '5e9e4502f5090927f8566f85') {
      launchpadShort = 'Boca Chica, TX';
    } else {
      launchpadShort = '';
    }

    if (launchpadLong === '5e9d0d95eda69973a809d1ec') {
      launchpadLong = 'Vandenberg Space Force Base Space Launch Complex 4E';
    } else if (launchpadLong === '5e9e4501f509094ba4566f84') {
      launchpadLong = 'Cape Canaveral Space Force Station Space Launch Complex 40';
    } else if (launchpadLong === '5e9e4502f509094188566f88') {
      launchpadLong = 'Kennedy Space Center Historic Launch Complex 39A';
    } else if (launchpadLong === '5e9e4502f5090927f8566f85') {
      launchpadLong = 'SpaceX South Texas Launch Site';
    } else {
      launchpadLong = '';
    }

    const launchEl = document.createElement('div');

    launchEl.innerHTML = `
      <div class="card sticky-action col m12 l4 blue-grey darken-2 z-depth-3">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${launchImg}" referrerpolicy="no-referrer">
        </div>
        <div class="card-content grey-text text-lighten-1">
          <span class="card-title activator ">Flight ${flight}: ${name}<i class="material-icons right">more_vert</i></span>
          <span class="activator">${localDate} ${launchpadShort}</span>
        </div>
        <div class="card-reveal blue-grey darken-2 grey-text text-lighten-1">
          <span class="card-title activator">Flight ${flight}: ${name}</span>
          <div>${launchpadLong}</div>
          <br />
          <div>Manned Flight - ${crew}</div>
          <div>Core Total Flights - ${coresUse}</div>
          <div>Salvaging Core - ${coreReuse}</div>
          <br />
          <div>Details: ${details}</div>
        </div>
      </div>
    `;
    past.appendChild(launchEl);
  });
}
