function handleLoginFormSubmit(event) {
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Criar um objeto de login com os valores
  const userObject = {
    username: username,
    password: password,
  };

  // Enviar os dados de login para a rota de autenticação
  fetch(`http://localhost:3000/api/user/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  })
    .then((response) => response.json())
    .then((data) => {
      // Armazene o token de autenticação no localStorage
      localStorage.setItem('token', data.token);

      // Execute outras ações após a autenticação
      // ...
    })
    .catch((error) => {
      console.error("Erro ao autenticar usuário:", error);
    })
    .finally(() => {
      // Limpar os campos do formulário após o envio
      document.getElementById("login-form").reset();
    });
}


// Função para lidar com o envio do formulário de login
function handleLoginFormSubmit(event) {
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Criar um objeto de login com os valores
  const userObject = {
    username: username,
    password: password,
  };

  // Enviar os dados de login para a rota de autenticação
  fetch(`http://localhost:3000/api/user/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  })
    .then((response) => response.json())
    .then((data) => {
      // Armazene o token de autenticação no localStorage
      localStorage.setItem('token', data.token);

      window.location.href = 'buscar.html';
    })
    .catch((error) => {
      console.error("Erro ao autenticar usuário:", error);
    })
    .finally(() => {
      // Limpar os campos do formulário após o envio
      document.getElementById("login-form").reset();
    });
}

// Função para lidar com a busca de eventos
function handleSearchEvent() {
  const searchText = document.getElementById("searchText").value;
  const token = localStorage.getItem('token');

  // Fazer a chamada para a rota de busca
  fetch(
    `http://localhost:3000/api/event/search?q=${encodeURIComponent(searchText)}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
  )
    .then((response) => response.json())
    .then((events) => {
      console.log("Eventos encontrados:", events);
      // Aqui você pode realizar outras ações com os eventos encontrados
    })
    .catch((error) => {
      console.error("Erro ao buscar eventos:", error);
    });
}

// Função para lidar com o envio do formulário de evento
function handleEventFormSubmit(event) {
  event.preventDefault();
  console.log("handleEventFormSubmit called");
}

// Adicione event listeners para os formulários
document.getElementById("user-form").addEventListener("submit", handleUserFormSubmit);
document.getElementById("login-form").addEventListener("submit", handleLoginFormSubmit);
document.getElementById("event-form").addEventListener("submit", handleEventFormSubmit);
document.getElementById("search-form").addEventListener("submit", handleSearchEvent);
