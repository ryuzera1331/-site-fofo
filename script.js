const btnAbrir = document.getElementById('abrirCartinha');
const mensagem = document.getElementById('mensagem');
const album = document.getElementById('album');
const proximo = document.getElementById('proximo');
const fotoTopo = document.getElementById('fotoTopo');

// Música
const musica = document.getElementById('musica');

// Abrir cartinha e iniciar música
btnAbrir.addEventListener('click', () => {
  mensagem.style.display = 'block';
  btnAbrir.style.display = 'none';
  musica.play().catch(() => {
    console.log("O navegador bloqueou a música, aguarde clique do usuário");
  });
});

// Próximo: mostrar álbum
proximo.addEventListener('click', () => {
  mensagem.style.display = 'none';
  fotoTopo.classList.add('fade-out');
  setTimeout(() => {
    fotoTopo.style.display = 'none';
    album.style.display = 'block';
  }, 500);
});

// Modal (foto ampliada)
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const fechar = document.querySelector('.fechar');
const fotos = document.querySelectorAll('.foto img');

fotos.forEach(foto => {
  foto.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = foto.src;
  });
});

fechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
