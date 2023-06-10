let map;
let marker;

let center = { lat: -6.577989, lng: -38.597960 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  marker = new google.maps.Marker({
    map: map,
    position: center,
    draggable: true
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', () => {
    map.setCenter(marker.position);
  }); if (document.getElementById('form')) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 14,
    });

    marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
    });

    map.addListener("click", (evt) => {
      addMarker(evt);
    });

  } if (document.getElementById('exibir')) {
    listar(google.maps)
  }
}

function addMarker(evt) {
  marker.setPosition(evt.latLng);
}

async function salvar() {

  const obj = {
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value,
    dataInicio: document.getElementById('dataInicio').value,
    dataFim: document.getElementById('dataFim').value,
    lat: marker.getPosition().lat(),
    lng: marker.getPosition().lng()
  };
  await fetch("http://localhost:3000/academicos/", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(response => {
    alert('Salvo com sucesso');
    window.location.assign('/');
  }).catch(error => alert('Falha ao salvar!'));

}
async function listar(maps) {

  fetch('http://localhost:3000/academicos')
    .then((response) => response.json()).then((dados) => {
      const marcar = dados;
      const ul = document.getElementById('exibir')
      let infoWindow = new maps.InfoWindow();
      marcar.forEach(marcar => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const buttonEdit = document.createElement('button');
        const buttonDelet= document. createElement('button')
        ul.appendChild(li);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(buttonEdit);
        li.appendChild(buttonDelet);
        h3.textContent = marcar.titulo;
        p.textContent = marcar.descricao;
        buttonEdit.textContent = "Editar";
        buttonEdit.setAttribute('onclick', `window.location.assign('editar.html?id=${marcar._id}')`);
        buttonDelet.textContent = "Deletar";

        const latLng = new maps.LatLng(
          marcar.lat,
          marcar.lng
        );

        let marker = new maps.Marker({
          position: latLng,
          map: map,
        });

        marker.addListener('click', () => {
          infoWindow.close();
          infoWindow.setContent(marcar.nome);
          infoWindow.open(marker.getMap(), marker);
        });

        map.addListener('click', () => {
          infoWindow.close();
        });
      });
    })
}

async function editar() {
  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  console.log(id)
}

window.initMap = initMap;