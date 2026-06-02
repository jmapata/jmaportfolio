/* projects.js — données de projets et rendu dynamique + modale gallery
   Remplis pour chaque projet le champ `images` avec les chemins
   vers tes photos: assets/projects/<slug>/1.jpg, 2.jpg, ...
*/

const projects = [
  {
    slug: 'analyse-dataviz-stat',
    title: 'Analyse Dataviz & Modélisation Statistique Inférentielle',
    shortDescription: 'Analyse RH des écarts de performance avec tests Khi-deux, ANOVA, Kruskal-Wallis et visualisations avancées.',
    longDescription: `
      <h4>Contexte métier</h4>
      <p>Étude des liens entre variables RH qualitatives et quantitatives pour détecter les écarts de performance entre départements.</p>
      <h4>Objectif</h4>
      <p>Valider statistiquement les différences observées, maîtriser les tests d'association et comparer les moyennes tout en produisant des visualisations stratégiques.</p>
      <h4>Approche</h4>
      <ul>
        <li>Exploration des relations quali-quali, quali-quanti et quanti-quanti.</li>
        <li>Validation de la normalité (Shapiro-Wilk) et homogénéité des variances (Levene).</li>
        <li>Application de tests paramétriques et non paramétriques selon la distribution des données.</li>
        <li>Création de boxplots, heatmaps et scatter plots pour communiquer les insights métier.</li>
      </ul>
      <h4>Tests statistiques clés</h4>
      <ul>
        <li>Khi-deux, V de Cramer, T de Tschuprow et Fisher Exact pour les relations quali-quali.</li>
        <li>ANOVA et Kruskal-Wallis pour comparer les moyennes par département.</li>
        <li>Test t de Student et Wilcoxon Rank-Sum pour comparaisons entre deux groupes.</li>
        <li>Levene et Bartlett pour l'homogénéité des variances.</li>
        <li>Shapiro-Wilk, Kolmogorov-Smirnov et Jarque-Bera pour la normalité.</li>
        <li>Pearson, Spearman et Kendall Tau pour les corrélations quantitatives.</li>
      </ul>
      <h4>Résultats</h4>
      <p>Interprétation des tests et recommandations métier basées sur les écarts significatifs entre départements, la force des associations et les tendances de performance.</p>
      <p>Base de données : Employee Performance Evaluation Dataset.</p>
    `,
    images: [], // ajoute tes images ici: assets/projects/analyse-dataviz-stat/1.jpg, 2.jpg, ...
    tags: ['Python', 'Pandas', 'SciPy', 'R', 'Statistiques', 'Dataviz']
  },
  {
    slug: 'credit-risk-classification',
    title: 'Machine Learning : Classification des Risques de Crédit',
    shortDescription: 'Prévision des défauts de paiement avec régression logistique et évaluation ROC/F1.',
    longDescription: `
      <h4>Problématique métier</h4>
      <p>Une entreprise souhaite prédire si un client fera défaut sur son paiement en fonction de ses caractéristiques financières et comportementales.</p>
      <h4>Objectif</h4>
      <p>Construire un modèle de classification binaire permettant d’identifier les clients à risque avant l’octroi du crédit.</p>
      <h4>Approche</h4>
      <ul>
        <li>Nettoyage des données, traitement des valeurs manquantes et normalisation des variables.</li>
        <li>Encodage des variables catégorielles financières.</li>
        <li>Entraînement d’une régression logistique pour capturer les probabilités de défaut de paiement.</li>
        <li>Évaluation du modèle avec matrice de confusion, courbe ROC (AUC) et F1-score.</li>
        <li>Interprétation des probabilités pour soutenir les décisions crédit.</li>
      </ul>
      <h4>Compétences développées</h4>
      <ul>
        <li>Classification binaire avec régression logistique.</li>
        <li>Évaluation de performances : AUC, F1-score, matrice de confusion.</li>
        <li>Interprétation des résultats pour l’aide à la décision financière.</li>
      </ul>
    `,
    images: [], // ajoute tes images ici: assets/projects/credit-risk-classification/1.jpg, 2.jpg, ...
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Classification']
  },
  {
    slug: 'data-warehouse-dashboard',
    title: 'Entrepôt de Données & Dashboard Décisionnel',
    shortDescription: 'Architecture BI avec PostgreSQL, schéma en étoile, DAX et Power BI.',
    longDescription: `
      <h4>Problématique métier</h4>
      <p>Ce projet vise à répondre aux besoins d'une entreprise multi-régionale qui souhaite centraliser ses données transactionnelles fragmentées afin de suivre ses performances commerciales et d'identifier précisément les zones géographiques ou les catégories de produits nécessitant des actions correctives.</p>
      <h4>Objectif</h4>
      <p>L'objectif principal est de concevoir et de déployer un écosystème décisionnel complet en créant un entrepôt de données structuré et un tableau de bord interactif permettant aux managers d'analyser en temps réel les indicateurs clés de performance tels que le chiffre d'affaires, les volumes de ventes et les marges bénéficiaires.</p>
      <h4>Approche</h4>
      <p>L'approche technique a débuté par l'extraction, le nettoyage et l'organisation des données brutes à l'aide de requêtes SQL complexes. J'ai ensuite modélisé un entrepôt de données selon un schéma en étoile afin d'isoler efficacement les tables de faits et de dimensions pour optimiser les temps de traitement. Pour automatiser l'ensemble du flux, j'ai développé des requêtes et de nombreuses vues SQL sous PostgreSQL garantissant une alimentation en temps réel. Enfin, j'ai connecté cette architecture à Power BI pour concevoir des rapports dynamiques, enrichis par l'écriture de formules DAX avancées et de fonctions d'intelligence temporelle (Time Intelligence, YoY, YTD) associées à des filtres interactifs pour faciliter le pilotage managérial.</p>
      <h4>Compétences développées</h4>
      <p>Ce projet m'a permis de consolider de solides compétences en ingénierie de données et en Business Intelligence, notamment dans la modélisation dimensionnelle de Data Warehouses et l'optimisation de requêtes SQL d'automatisation. J'ai également développé une expertise approfondie dans la création de rapports analytiques visuels et interactifs sur Power BI en exploitant le langage DAX. Ce travail a renforcé ma capacité à traduire des besoins fonctionnels en solutions techniques et à formuler des recommandations analytiques stratégiques pour l'aide à la décision.</p>
      <h4>Base de données</h4>
      <p>Les analyses ont été réalisées à partir des jeux de données d'entreprise <strong>Superstore Dataset / AdventureWorks Database</strong>. Ces bases simulent des volumes massifs de transactions de ventes multi-régionales, de fiches produits et de profils clients, offrant ainsi un environnement technique réaliste et hautement évolutif pour éprouver l'ensemble de l'architecture décisionnelle.</p>
    `,
    images: [], // ajoute tes images ici: assets/projects/data-warehouse-dashboard/1.jpg, 2.jpg, ...
    tags: ['Power BI', 'DAX', 'SQL', 'PostgreSQL', 'Data Warehouse', 'BI']
  },
  {
    slug: 'powerbi-commande-annulee',
    title: 'Optimisation Décisionnelle & Analyse de Performance Commerciale',
    shortDescription: 'Entrepôt de données et dashboard Power BI pour suivre les annulations, les revenus et la sécurité des données.',
    longDescription: `
    <h4>Problématique métier</h4>
    <p>Ce projet répond au besoin critique d'une entreprise commerciale de centraliser, nettoyer et modéliser ses données de ventes brutes afin de piloter ses indicateurs de performance (KPIs) en temps réel. Face à un flux de données non structuré, l'enjeu était de concevoir une architecture décisionnelle robuste capable de suivre la rentabilité globale tout en isolant et en analysant spécifiquement les pertes financières liées aux commandes annulées.</p>
    
    <h4>Objectif</h4>
    <p>L'objectif principal était de concevoir un entrepôt de données optimisé et de déployer un tableau de bord multi-onglets hautement interactif sous Power BI. L'application devait permettre au top management d'analyser l'évolution du chiffre d'affaires, de mesurer précisément l'impact et les tendances trimestrielles des annulations par produit ou région, et d'offrir une navigation fluide et sécurisée adaptée tant sur ordinateur que sur support mobile.</p>
    
    <h4>Approche</h4>
    <p>L'approche technique a débuté dans Power Query par une phase rigoureuse de profilage et de nettoyage de la qualité des données (analyse de distribution, typage et renommage explicite). J'ai ensuite procédé à la normalisation de la table brute en appliquant le principe de modélisation en schéma en étoile, isolant les tables de dimensions (Clients, Produits, Régions) de la table de faits (Ventes). Une fois les relations cardinales établies, j'ai structuré une table dédiée aux mesures DAX avancées (Time Intelligence, calculs itératifs via CALCULATE et optimisation des divisions avec DIVIDE) pour générer des indicateurs dynamiques et des visuels avancés (Donut, Treemap, graphiques en Ruban). Pour parfaire l'expérience utilisateur (UX), j'ai intégré une charte graphique personnalisée via un thème JSON, conçu un menu de navigation par icônes, configuré des info-bulles dynamiques imbriquées (Tooltips) et créé des signets (Bookmarks) interactifs pour filtrer instantanément les types de produits ou réinitialiser le tableau de bord.</p>
    
    <h4>Compétences développées</h4>
    <p>Ce projet avancé a consolidé ma maîtrise du cycle complet d'un projet décisionnel (Business Intelligence). J'ai renforcé mes compétences en ingénierie de données (ETL et normalisation dimensionnelle), en programmation analytique avec le langage DAX, ainsi qu'en design d'interfaces décisionnelles complexes et interactives. De plus, j'ai mis en pratique des fonctionnalités de gouvernance et de sécurité des données à l'aide de la sécurité au niveau des lignes (Row-Level Security - RLS) en configurant des rôles d'accès restreints par société et région, avant de finaliser le projet par le design d'une vue responsive mobile et sa publication sur Power BI Service.</p>
    
    <h4>Base de données</h4>
    <p>Le projet a été entièrement développé et validé à partir du fichier transactionnel <strong>sales_2.csv</strong>. Ce jeu de données comprend des informations complètes sur les flux de ventes, incluant les identifiants uniques de commandes, les segmentations clients (CompanyName), les nomenclatures produits (Category), la sectorisation géographique (RegionName), ainsi que les métriques financières et les statuts opérationnels des transactions (OrderStatus) indispensables pour simuler un environnement de production.</p>
    `,
    images: ['assets/img/cadre6/power1.png','assets/img/cadre6/power1.png', 'assets/img/cadre6/power2.png', 'assets/img/cadre6/powerquery.png', 'assets/img/cadre6/power3.png'], // ajoute tes images ici: assets/projects/powerbi-commande-annulee/1.jpg, 2.jpg, ...
    tags: ['Power BI', 'Power Query', 'DAX', 'ETL', 'RLS', 'Dashboard', 'Data Warehouse']
  },
  {
    slug: 'green-it-platform',
    title: 'Solution Green IT - Scalian Rennes',
    shortDescription: 'Plateforme de calcul d’empreinte carbone avec Fast API, Angular 20 et Python.',
    longDescription: `
      <h4>Problématique métier</h4>
      <p>Dans le cadre de l'évaluation de l'impact environnemental des infrastructures logicielles, les organisations font face à la complexité de mesurer précisément leur empreinte carbone. Ce projet répond au besoin de centraliser et d'exploiter les données environnementales officielles afin de fournir un outil d'aide à la décision fiable pour les équipes de développement et les architectes informatiques.</p>
      <h4>Objectif</h4>
      <p>L'objectif principal est de concevoir et de déployer une plateforme web complète et automatisée (Green IT) capable de calculer l'empreinte carbone d'un projet informatique en s'appuyant sur des indicateurs scientifiques standardisés.</p>
      <h4>Approche</h4>
      <p>L'approche technique a reposé sur la création d'un pipeline d'ingestion de données robuste en Python et Pandas, permettant d'automatiser la collecte, le filtrage et la normalisation des flux de données volumineux. Pour exposer ces données de manière fluide et performante, j'ai développé une API back-end avec Fast API, connectée à une interface utilisateur dynamique conçue sous Angular 20. Enfin, afin de garantir la portabilité de l'application, la facilité de déploiement et une isolation parfaite de chaque composant, j'ai réalisé l'orchestration complète de tout l'écosystème technique à l'aide de Docker-Compose.</p>
      <h4>Compétences développées</h4>
      <p>Ce projet académique et professionnel m'a permis de développer une expertise pointue dans la mise en place d'architectures applicatives modernes et conteneurisées avec Docker. J'ai renforcé mes compétences en ingénierie de données (ETL) avec Python et Pandas, tout en maîtrisant le développement d'API asynchrones rapides avec Fast API et l'intégration de frameworks front-end avancés. De plus, cela m'a sensibilisé aux enjeux actuels du Green IT et de l'éco-conception logicielle.</p>
      <h4>Base de données</h4>
      <p>Les calculs et les analyses de ce projet s'appuient directement sur la <strong>Base Empreinte de l'ADEME</strong> (Agence de la transition écologique). Ces référentiels publics ont été ingérés, nettoyés et stockés dans une base PostgreSQL afin de garantir la cohérence des données et la scalabilité des requêtes d'analyse.</p>
    `,
    images: [], // ajoute tes images ici: assets/projects/green-it-platform/1.jpg, 2.jpg, ...
    tags: ['Fast API', 'Angular', 'Python', 'Pandas', 'PostgreSQL', 'Docker-Compose', 'Green IT']
  },
  {
    slug: 'virtual-tryon-ecommerce',
    title: 'Plateforme E-commerce avec Essayage Virtuel IA',
    shortDescription: 'Plateforme mode IA avec Virtual Try-On, Next.js, Node.js, MongoDB et Replicate.',
    longDescription: `
      <p>Ce projet, né d'une initiative académique personnelle, vise à révolutionner l'expérience d'achat en ligne dans le secteur de l'habillement en intégrant des technologies d'intelligence artificielle générative.</p>
      <h4>Objectif</h4>
      <p>L'objectif était de lever l'un des principaux freins du e-commerce — l'incertitude du client quant au rendu d'un vêtement sur sa propre morphologie — en développant un module d'essayage virtuel interactif (Virtual Try-On).</p>
      <h4>Approche</h4>
      <p>Pour concevoir cette plateforme fullstack, j'ai architecturé le front-end avec Next.js et le back-end avec Node.js, en m'appuyant sur une base de données MongoDB pour la gestion fluide du catalogue et des utilisateurs. Le cœur de l'innovation repose sur l'intégration du modèle de deep learning IDM-VTON via l'API Replicate, permettant l'incrustation dynamique et réaliste de vêtements sur les photographies importées par les utilisateurs.</p>
      <p>Face aux contraintes de performance de l'IA, j'ai mis en place un système robuste de traitement et d'optimisation des flux d'images lourds encodés en Base64, tout en sécurisant rigoureusement les échanges de données entre le client et le serveur.</p>
      <h4>Compétences développées</h4>
      <p>Cette réalisation m'a permis de maîtriser l'intégration d'architectures d'IA de pointe dans des applications web modernes, tout en renforçant mes compétences en gestion des performances et en sécurité applicative.</p>
    `,
    images: ['assets/img/cadre5/accueil.png','assets/img/cadre5/inscription.png', 'assets/img/cadre5/connexion.png','assets/img/cadre5/accueil2.png','assets/img/cadre5/profil.png','assets/img/cadre5/univers.png'
      ,'assets/img/cadre5/propos.png','assets/img/cadre5/contact.png','assets/img/cadre5/fac.png','assets/img/cadre5/profil.png','assets/img/cadre5/collection.png','assets/img/cadre5/details.png','assets/img/cadre5/panier.png','assets/img/cadre5/essayage.png'
      ,'assets/img/cadre5/essayage1.png','assets/img/cadre5/essayage2.png'], // ajoute tes images ici: assets/projects/virtual-tryon-ecommerce/1.jpg, 2.jpg, ...
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Replicate', 'IA', 'Virtual Try-On']
  },
  {
    slug: 'excel-dashboard-ventes',
    title: 'Tableau de bord Excel des performances de ventes',
    shortDescription: 'Dashboard Excel interactif pour analyser les ventes, marges et performances régionales.',
    longDescription: `
      <h4>Problématique métier</h4>
      <p>Une entreprise souhaite suivre les performances des ventes par région et catégorie pour identifier les zones à améliorer.</p>
      <h4>Objectif</h4>
      <p>Créer un tableau de bord interactif pour analyser les KPI clés tels que les ventes, les marges, et les performances régionales.</p>
      <h4>Compétences développées</h4>
      <ul>
        <li>Nettoyage et organisation des données.</li>
        <li>Formules Excel essentielles : SOMME, SOMME.SI, MOYENNE, RECHERCHEV, INDEX, EQUIV.</li>
        <li>Création de tableaux croisés dynamiques avec des segments pour une navigation facile.</li>
        <li>Création de graphiques dynamiques et tableaux de bord interactifs.</li>
      </ul>
      <h4>Base de données</h4>
      <p>Superstore Dataset. Ce projet vise à répondre aux besoins opérationnels d'une entreprise souhaitant centraliser et piloter ses indicateurs commerciaux clés par région et par catégorie de produits afin d'identifier rapidement les zones géographiques en sous-performance.</p>
      <p>L'objectif principal était de concevoir un tableau de bord interactif et automatisé permettant de suivre en temps réel le chiffre d'affaires, les volumes de ventes et les marges bénéficiaires. Pour réaliser cet outil d'aide à la décision, la première étape a consisté à nettoyer, filtrer et structurer l'ensemble des données brutes. J'ai ensuite exploité des formules de calcul et de recherche avancées (telles que SOMME.SI, RECHERCHEV, ainsi que la combinaison INDEX et EQUIV) pour dynamiser les indicateurs. Afin d'offrir une navigation fluide et une analyse multidimensionnelle aux utilisateurs, j'ai mis en place des Tableaux Croisés Dynamiques (TCD) connectés à des segments de filtrage interactifs. Enfin, j'ai développé une interface visuelle épurée intégrant des graphiques dynamiques pour faciliter l'interprétation des tendances et la prise de décision managériale.</p>
    `,
    images: [],
    tags: ['Excel', 'Tableaux Croisés Dynamiques', 'RECHERCHEV', 'DASHBOARD', 'Analyse de données']
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
