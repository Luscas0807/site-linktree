const data = {
  nome: "meus links",
  descricao: " ",
  links: [
    { nome: "Instagram", url: "https://instagram.com" },
    { nome: "YouTube", url: "https://youtube.com" },
    { nome: "GitHub", url: "https://github.com" },
    { nome: "E-mail", url: "mailto:seuemail@gmail.com" }
  ]
};

function criarLinktree() {
  const app = document.getElementById("app");

  
  const container = document.createElement("div");
  container.classList.add("container");

  
  const perfil = document.createElement("div");
  perfil.classList.add("perfil");

  const img = document.createElement("img");
  img.src = data.foto;
  img.alt = "Foto de perfil";

  const nome = document.createElement("h1");
  nome.textContent = data.nome;

  const descricao = document.createElement("p");
  descricao.textContent = data.descricao;

  perfil.appendChild(img);
  perfil.appendChild(nome);
  perfil.appendChild(descricao);


  const linksDiv = document.createElement("div");
  linksDiv.classList.add("links");

  data.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.nome;
    a.target = "_blank";
    linksDiv.appendChild(a);
  });

  container.appendChild(perfil);
  container.appendChild(linksDiv);
  app.appendChild(container);
}

criarLinktree();
