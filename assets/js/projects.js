/* projects.js — données de projets et rendu dynamique + modale gallery
   Remplis pour chaque projet le champ `images` avec les chemins
   vers tes photos: assets/projects/<slug>/1.jpg, 2.jpg, ...
*/

const projects = [
  {
    slug: 'project-bi',
    title: "Conception d'un Entrepôt de Données & Dashboard Décisionnel",
    shortDescription: "Rapport Power BI et modélisation en étoile pour le suivi des KPIs.",
    longDescription: `
      <h4>Contexte</h4>
      <p>Création d'un entrepôt de données et d'un tableau de bord décisionnel pour le suivi des indicateurs clés.</p>
      <h4>Détails techniques</h4>
      <ul>
        <li>Modélisation en étoile, transformation ETL, SQL.</li>
        <li>Rapports interactifs Power BI et calculs DAX.</li>
      </ul>
    `,
    images: [], // ajoute tes images ici
    tags: ['Power BI', 'DAX', 'SQL']
  },
  {
    slug: 'portfolio-professionnel',
    title: 'Portfolio professionnel',
    shortDescription: 'Site portfolio conçu pour mettre en valeur tes projets et compétences.',
    longDescription: `
      <h4>Objectif</h4>
      <p>Présenter de manière professionnelle mes réalisations techniques et mes compétences métiers.</p>
      <h4>Détails</h4>
      <p>Page statique responsive, optimisée pour la lecture et les partages aux recruteurs.</p>
    `,
    images: [],
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'landing-produit',
    title: 'Landing page produit',
    shortDescription: 'Page de présentation avec call-to-action et sections claires.',
    longDescription: `
      <h4>Résumé</h4>
      <p>Landing page optimisée pour la conversion, axée UX.</p>
    `,
    images: [],
    tags: ['Responsive', 'UX', 'Design']
  }
];

/* Utilities */
function createThumbnail(project) {
  const thumb = document.createElement('div');
  thumb.className = 'project-thumb';
  if (project.images && project.images.length > 0) {
    thumb.style.backgroundImage = `url('${project.images[0]}')`;
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'thumb-placeholder';
    const initials = project.title.split(' ').map(w => w[0]).slice(0,2).join('');
    placeholder.innerHTML = `<span>${initials}</span>`;
    thumb.appendChild(placeholder);
  }
  return thumb;
}

function renderProjects() {
  const container = document.getElementById('projectsGrid') || document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = '';
  projects.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = `project-card fade-in-up delay-${index + 1}`;

    const thumb = createThumbnail(project);

    const body = document.createElement('div');
    body.className = 'project-card-body';
    body.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-actions">
        <button class="btn btn-secondary btn-details" type="button">Voir les détails</button>
      </div>
    `;

    article.appendChild(thumb);
    article.appendChild(body);
    container.appendChild(article);

    const detailsBtn = body.querySelector('.btn-details');
    detailsBtn.addEventListener('click', () => openProjectModal(index));
  });
}

/* Modal behaviour - support multiple modal markup variants */
const modal = document.getElementById('projectModal') || document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modalBackdrop') || null;
const modalClose = document.getElementById('modalClose') || (modal ? modal.querySelector('.modal-close') : null) || document.querySelector('.modal .modal-close');
const modalTitle = document.getElementById('modalTitle') || document.getElementById('modal-title');
const modalLongDesc = document.getElementById('modalLongDesc') || document.getElementById('modal-description');
const modalGallery = document.getElementById('modalGallery') || document.getElementById('modal-gallery');
const modalPrev = document.getElementById('modalPrev') || null;
const modalNext = document.getElementById('modalNext') || null;

let currentProjectIdx = null;
let currentImageIdx = 0;

function openProjectModal(index) {
  currentProjectIdx = index;
  const project = projects[index];
  if (!project) return;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalLongDesc) modalLongDesc.innerHTML = project.longDescription || project.shortDescription;
  renderModalGallery(project);
  // two modal variants: new projectModal (class-based) or legacy modal (display:block)
  if (modal && modal.classList.contains('project-modal')) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  } else if (modal && modal.classList.contains('modal')) {
    modal.style.display = 'flex';
  }
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (modal && modal.classList.contains('project-modal')) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  } else if (modal && modal.classList.contains('modal')) {
    modal.style.display = 'none';
  }
  document.body.style.overflow = '';
}

function renderModalGallery(project) {
  if (!modalGallery) return;
  modalGallery.innerHTML = '';
  if (!project.images || project.images.length === 0) {
    const msg = document.createElement('div');
    msg.className = 'gallery-empty';
    msg.textContent = 'Aucune image pour ce projet — ajoute tes photos dans assets/projects/' + project.slug + '/';
    modalGallery.appendChild(msg);
    return;
  }

  const main = document.createElement('div');
  main.className = 'gallery-main';
  const img = document.createElement('img');
  img.src = project.images[0];
  img.alt = project.title;
  main.appendChild(img);
  modalGallery.appendChild(main);

  const thumbs = document.createElement('div');
  thumbs.className = 'gallery-thumbs';
  project.images.forEach((src, i) => {
    const t = document.createElement('button');
    t.className = 'thumb-btn';
    const timg = document.createElement('img');
    timg.src = src;
    timg.alt = project.title + ' ' + (i + 1);
    t.appendChild(timg);
    t.addEventListener('click', () => {
      currentImageIdx = i;
      const mainImg = main.querySelector('img');
      if (mainImg) mainImg.src = src;
    });
    thumbs.appendChild(t);
  });
  modalGallery.appendChild(thumbs);

  currentImageIdx = 0;
  if (modalPrev) modalPrev.onclick = () => cycleImage(project, -1);
  if (modalNext) modalNext.onclick = () => cycleImage(project, 1);
}

function cycleImage(project, delta) {
  if (!project.images || project.images.length === 0) return;
  currentImageIdx = (currentImageIdx + delta + project.images.length) % project.images.length;
  const mainImg = modalGallery.querySelector('.gallery-main img');
  if (mainImg) mainImg.src = project.images[currentImageIdx];
}

// safe event wiring
if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

// ensure DOM ready before rendering; add lightweight log for debugging
console.log('projects.js loaded — projets définis:', projects.length);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjects);
} else {
  renderProjects();
}

// export for debugging
window.__projects = projects;
