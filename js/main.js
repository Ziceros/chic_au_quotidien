const WHATSAPP_NUMBER = "22896689668";
const DEFAULT_MESSAGE = "Bonjour Chic Au Quotidien, j'aimerais avoir plus d'informations.";

const series = [
  {
    prefix: "chaussures-homme",
    names: [
      "Richelieu noir prestige",
      "Soulier cérémonie brillant",
      "Derby cuir ébène",
      "Chaussure habillée signature",
      "Soulier gentleman",
      "Richelieu croco noir",
      "Derby soirée premium",
      "Soulier classe affaires",
      "Chaussure ville élégante",
      "Derby noir intemporel",
      "Soulier mariage homme",
      "Richelieu finition luxe"
    ],
    folder: "img/chaussures/hommes/chaussures_habillées",
    filePrefix: "chaussures-habillees",
    count: 43,
    category: "chaussures",
    badge: "Chaussures",
    needs: ["chaussures", "accessoires", "cérémonie", "homme"],
    descriptions: [
      "Un soulier habillé qui apporte une finition nette aux tenues de cérémonie.",
      "Une paire élégante pour le bureau, les sorties et les rendez-vous importants.",
      "Une chaussure noire premium pensée pour compléter une allure masculine soignée.",
      "Une finition brillante et structurée pour donner plus de présence à la tenue."
    ]
  },
  {
    prefix: "couple",
    names: [
      "Duo coordonné prestige",
      "Ensemble couple solaire",
      "Look couple cérémonie",
      "Duo chic contemporain",
      "Tenue couple wax moderne",
      "Ensemble complicité élégante"
    ],
    folder: "img/vetements/prêt-à-porter/couple",
    filePrefix: "couple",
    count: 12,
    category: "couple",
    badge: "Couple",
    needs: ["couple", "famille", "cérémonie", "quotidien"],
    descriptions: [
      "Un look coordonné pour sortie, shooting, cérémonie ou moment spécial.",
      "Une sélection couple qui met l'harmonie et la présence au premier plan.",
      "Deux silhouettes complémentaires pour créer une allure forte sans surcharger."
    ]
  },
  {
    prefix: "famille",
    names: [
      "Collection famille royale",
      "Ensemble famille assorti",
      "Look familial cérémonie",
      "Tenues famille prestige",
      "Coordonné parents et enfants"
    ],
    folder: "img/vetements/prêt-à-porter/famille",
    filePrefix: "famille",
    count: 10,
    category: "famille",
    badge: "Famille",
    needs: ["famille", "cérémonie", "enfant"],
    descriptions: [
      "Des tenues assorties pour parents et enfants, pensées pour les grands moments.",
      "Une composition familiale élégante pour cérémonie, photo ou célébration.",
      "Un ensemble coordonné qui donne une présence harmonieuse à toute la famille."
    ]
  },
  {
    prefix: "femme-pret",
    names: [
      "Robe signature femme",
      "Kimono imprimé premium",
      "Boubou graphique chic",
      "Silhouette femme élégante",
      "Pièce forte contemporaine",
      "Tenue femme raffinée"
    ],
    folder: "img/vetements/prêt-à-porter/pourfemme",
    filePrefix: "pourfemme",
    count: 11,
    category: "femme",
    badge: "Femme",
    needs: ["vêtements", "femme", "quotidien", "cérémonie"],
    descriptions: [
      "Une silhouette féminine avec une présence chic, moderne et affirmée.",
      "Une pièce expressive qui valorise la coupe, le motif et l'assurance.",
      "Une tenue idéale pour affirmer son style avec élégance et caractère."
    ]
  },
  {
    prefix: "fille",
    names: [
      "Robe fille imprimée",
      "Tenue enfant colorée",
      "Robe petite élégante",
      "Look fille cérémonie",
      "Tenue enfant joyeuse"
    ],
    folder: "img/vetements/prêt-à-porter/pourenfant/pourfille",
    filePrefix: "pourfille",
    count: 18,
    category: "enfant",
    badge: "Enfant",
    needs: ["enfant", "famille", "quotidien", "cérémonie"],
    descriptions: [
      "Une tenue enfant avec motifs soignés et belle présence.",
      "Une robe charmante pour cérémonie, sortie ou moment en famille.",
      "Un look enfant coloré, confortable et facile à remarquer."
    ]
  },
  {
    prefix: "enfant-habille",
    names: [
      "Tenue enfant habillée",
      "Look enfant cérémonie",
      "Ensemble enfant chic",
      "Silhouette enfant élégante"
    ],
    folder: "img/vetements/tenues_habillées/enfants",
    filePrefix: "enfants",
    count: 6,
    category: "enfant",
    badge: "Enfant",
    needs: ["enfant", "famille", "cérémonie"],
    descriptions: [
      "Un look enfant chic pour événement, célébration et cérémonie.",
      "Une tenue soignée pour les moments où les petits doivent aussi briller."
    ]
  },
  {
    prefix: "femme-habillee",
    names: [
      "Tenue femme habillée",
      "Ensemble femme lumineux",
      "Look femme sortie"
    ],
    folder: "img/vetements/tenues_habillées/femmes",
    filePrefix: "femmes",
    count: 3,
    category: "femme",
    badge: "Femme",
    needs: ["femme", "vêtements", "cérémonie"],
    descriptions: [
      "Une tenue féminine habillée, idéale pour une sortie ou un rendez-vous.",
      "Un look moderne et coloré pour composer une allure pleine d'assurance."
    ]
  },
  {
    prefix: "homme-habille",
    names: [
      "Ensemble homme moderne",
      "Look homme urbain",
      "Tenue casual premium",
      "Silhouette homme nette",
      "Ensemble street chic",
      "Look homme quotidien"
    ],
    folder: "img/vetements/tenues_habillées/hommes",
    filePrefix: "hommes",
    count: 24,
    category: "homme",
    badge: "Homme",
    needs: ["homme", "vêtements", "quotidien"],
    descriptions: [
      "Un look homme moderne, net et facile à porter.",
      "Une silhouette casual premium pour le quotidien et les sorties.",
      "Une tenue masculine simple, forte et directement efficace."
    ]
  }
];

const placeholders = [
  {
    id: "sacs-coming",
    name: "Sélection sacs",
    category: "sacs",
    needs: ["sacs", "accessoires"],
    badge: "À compléter",
    image: "",
    description: "Espace prévu pour les sacs à main, sacs à dos et pochettes."
  },
  {
    id: "montres-coming",
    name: "Sélection montres",
    category: "montres",
    needs: ["montres", "accessoires"],
    badge: "À compléter",
    image: "",
    description: "Espace prévu pour les montres homme, femme et enfant."
  },
  {
    id: "ceintures-coming",
    name: "Sélection ceintures",
    category: "ceintures",
    needs: ["ceintures", "accessoires"],
    badge: "À compléter",
    image: "",
    description: "Espace prévu pour les ceintures et finitions de tenue."
  }
];

const products = [
  ...series.flatMap((item) => Array.from({ length: item.count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      id: `${item.prefix}-${number}`,
      name: item.names[index % item.names.length],
      category: item.category,
      needs: item.needs,
      badge: item.badge,
      image: `${item.folder}/${item.filePrefix}-${number}.jpeg`,
      description: item.descriptions[index % item.descriptions.length],
      rank: index
    };
  })),
  ...placeholders
];

const homeSelectionIds = [
  "couple-10",
  "femme-pret-01",
  "famille-10",
  "chaussures-homme-33",
  "fille-01",
  "homme-habille-03",
  "couple-06",
  "femme-pret-09",
  "enfant-habille-01",
  "chaussures-homme-06",
  "sacs-coming",
  "montres-coming"
];

let currentVisibleCount = 24;
let favoriteIds = readStoredIds("caqFavorites");
let selectionIds = readStoredIds("caqSelection");
let currentTheme = localStorage.getItem("caqTheme") || "light";

const categoryPriority = ["couple", "femme", "famille", "chaussures", "enfant", "homme", "sacs", "montres", "ceintures"];

function readStoredIds(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeStoredIds(key, ids) {
  localStorage.setItem(key, JSON.stringify(ids));
}

function buildWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productMessage(product) {
  return `Bonjour Chic Au Quotidien, je suis intéressé(e) par cet article : ${product.name}. Est-il disponible ?`;
}

function selectionMessage() {
  const selectedProducts = selectionIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);
  const list = selectedProducts.map((product, index) => `${index + 1}. ${product.name} (${product.category})`).join("\n");
  return `Bonjour Chic Au Quotidien, je suis intéressé(e) par cette sélection :\n${list}\nPouvez-vous me confirmer les disponibilités ?`;
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matchesFilter(product, filter) {
  if (!filter || filter === "all") return true;
  if (filter === "group") return product.category === "couple" || product.category === "famille";
  const cleanFilter = normalizeText(filter);
  return normalizeText(product.category) === cleanFilter || (product.needs || []).some((need) => normalizeText(need) === cleanFilter);
}

function interleaveByCategory(items) {
  const buckets = categoryPriority.map((category) => ({
    category,
    items: items.filter((product) => product.category === category)
  }));
  const extra = items.filter((product) => !categoryPriority.includes(product.category));
  const ordered = [];
  let index = 0;
  let hasMore = true;

  while (hasMore) {
    hasMore = false;
    buckets.forEach((bucket) => {
      if (bucket.items[index]) {
        ordered.push(bucket.items[index]);
        hasMore = true;
      }
    });
    index += 1;
  }

  return [...ordered, ...extra];
}

function productCard(product) {
  const visual = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<div class="placeholder-visual"><span>${product.name}</span></div>`;
  const previewAttr = product.image ? `data-preview="${product.id}"` : "";

  return `
    <article class="product-card ${product.image ? "" : "coming-soon"}">
      <span class="spotlight"></span>
      <div class="card-tools">
        <button class="icon-action ${favoriteIds.includes(product.id) ? "active" : ""}" type="button" data-favorite="${product.id}" aria-label="Ajouter aux favoris">♥</button>
        <button class="icon-action ${selectionIds.includes(product.id) ? "active" : ""}" type="button" data-select-product="${product.id}" aria-label="Ajouter à ma sélection">+</button>
      </div>
      <button class="image-button" type="button" ${previewAttr} aria-label="Voir ${product.name}">
        ${visual}
      </button>
      <div class="product-info">
        <div class="product-meta">
          <span>${product.badge}</span>
          <span>${product.category}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-actions">
          <a class="btn small primary" href="${buildWhatsAppLink(productMessage(product))}" target="_blank" rel="noopener">Commander</a>
          <button class="btn small outline" type="button" data-share="${product.id}">Partager</button>
        </div>
      </div>
    </article>
  `;
}

function getSimilarProducts(product) {
  return products
    .filter((item) => item.id !== product.id && item.image && (item.category === product.category || (item.needs || []).some((need) => (product.needs || []).includes(need))))
    .slice(0, 3);
}

function getFilteredProducts() {
  const pageFilter = document.body.dataset.filter || "all";
  const searchInput = document.querySelector("[data-search]");
  const query = searchInput ? normalizeText(searchInput.value.trim()) : "";
  const activeFilter = document.querySelector("[data-filter-btn].active")?.dataset.filterBtn || pageFilter;
  const sort = document.querySelector("[data-sort]")?.value || "featured";

  let visible = products.filter((product) => matchesFilter(product, activeFilter));
  if (query) {
    visible = visible.filter((product) => {
      const text = normalizeText(`${product.name} ${product.category} ${(product.needs || []).join(" ")} ${product.description} ${product.badge}`);
      return text.includes(query);
    });
  }

  if (sort === "name") visible.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  if (sort === "category") visible.sort((a, b) => a.category.localeCompare(b.category, "fr"));
  if (sort === "available") visible.sort((a, b) => Number(!b.image) - Number(!a.image));
  if (sort === "featured") visible = interleaveByCategory(visible);
  return visible;
}

function renderProducts() {
  const grids = document.querySelectorAll("[data-product-grid]");
  if (!grids.length) return;

  const allVisible = getFilteredProducts();
  const countLabel = document.querySelector("[data-result-count]");
  if (countLabel) countLabel.textContent = `${allVisible.length} article${allVisible.length > 1 ? "s" : ""}`;

  grids.forEach((grid) => {
    const limit = Number(grid.dataset.limit || 0);
    const mode = grid.dataset.mode;
    if (mode === "curated") {
      const curated = homeSelectionIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean);
      grid.innerHTML = curated.map(productCard).join("");
      return;
    }
    if (mode === "favorites") {
      const favorites = favoriteIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean);
      grid.innerHTML = favorites.map(productCard).join("") || `<p class="empty-state">Vous n'avez pas encore ajouté d'article aux favoris.</p>`;
      return;
    }
    if (mode === "recent") {
      const recentIds = readStoredIds("caqRecent");
      const recent = recentIds
        .map((id) => products.find((product) => product.id === id))
        .filter(Boolean);
      grid.innerHTML = recent.map(productCard).join("") || `<p class="empty-state">Aucun article consulté récemment.</p>`;
      return;
    }
    const displayLimit = limit || currentVisibleCount;
    const visible = allVisible.slice(0, displayLimit);
    grid.innerHTML = visible.map(productCard).join("") || `<p class="empty-state">Aucun article ne correspond à votre recherche.</p>`;
  });

  const loadMore = document.querySelector("[data-load-more]");
  if (loadMore) {
    loadMore.hidden = currentVisibleCount >= allVisible.length;
  }
  updateSelectionBar();
  setupRevealAnimations();
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const customMessage = link.dataset.whatsapp && link.dataset.whatsapp !== "" ? link.dataset.whatsapp : DEFAULT_MESSAGE;
    link.setAttribute("href", buildWhatsAppLink(customMessage));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
}

function setupFilters() {
  const params = new URLSearchParams(window.location.search);
  const requestedFilter = params.get("filter");
  const requestedQuery = params.get("q");

  if (requestedQuery) {
    const search = document.querySelector("[data-search]");
    if (search) search.value = requestedQuery;
  }

  if (requestedFilter) {
    const button = document.querySelector(`[data-filter-btn="${requestedFilter}"]`);
    if (button) {
      document.querySelectorAll("[data-filter-btn]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    }
  }

  document.querySelectorAll("[data-filter-btn]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter-btn]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      currentVisibleCount = 24;
      renderProducts();
    });
  });

  const search = document.querySelector("[data-search]");
  if (search) search.addEventListener("input", () => {
    currentVisibleCount = 24;
    renderProducts();
  });

  const sort = document.querySelector("[data-sort]");
  if (sort) sort.addEventListener("change", renderProducts);

  const loadMore = document.querySelector("[data-load-more]");
  if (loadMore) {
    loadMore.addEventListener("click", () => {
      currentVisibleCount += 24;
      renderProducts();
    });
  }
}

async function shareProduct(product) {
  const url = `${window.location.origin}${window.location.pathname}#${product.id}`;
  const text = `${product.name} - Chic Au Quotidien`;

  if (navigator.share) {
    await navigator.share({ title: product.name, text, url });
    return;
  }

  await navigator.clipboard.writeText(url);
  alert("Lien de l'article copié.");
}

function toggleId(list, id) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

function openPreview(product) {
  if (!product.image) return;
  rememberRecent(product.id);
  const similar = getSimilarProducts(product);
  const modal = document.createElement("div");
  modal.className = "preview-modal";
  modal.innerHTML = `
    <div class="preview-dialog" role="dialog" aria-modal="true" aria-label="${product.name}">
      <button class="preview-close" type="button" aria-label="Fermer">Fermer</button>
      <img src="${product.image}" alt="${product.name}">
      <div>
        <p class="eyebrow">${product.badge}</p>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="preview-actions">
          <a class="btn primary" href="${buildWhatsAppLink(productMessage(product))}" target="_blank" rel="noopener">Commander sur WhatsApp</a>
          <button class="btn outline" type="button" data-select-product="${product.id}">Ajouter à ma sélection</button>
          <button class="btn outline" type="button" data-share="${product.id}">Partager</button>
        </div>
        ${similar.length ? `
          <div class="similar-products">
            <h3>À associer</h3>
            <div>
              ${similar.map((item) => `<button type="button" data-preview="${item.id}"><img src="${item.image}" alt="${item.name}"><span>${item.name}</span></button>`).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector(".preview-close").focus();
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest(".preview-close")) modal.remove();
  });
}

function rememberRecent(id) {
  const recent = readStoredIds("caqRecent").filter((item) => item !== id);
  recent.unshift(id);
  writeStoredIds("caqRecent", recent.slice(0, 8));
}

function setupProductActions() {
  document.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
      favoriteIds = toggleId(favoriteIds, favoriteButton.dataset.favorite);
      writeStoredIds("caqFavorites", favoriteIds);
      renderProducts();
      return;
    }

    const selectButton = event.target.closest("[data-select-product]");
    if (selectButton) {
      selectionIds = toggleId(selectionIds, selectButton.dataset.selectProduct);
      writeStoredIds("caqSelection", selectionIds);
      renderProducts();
      return;
    }

    const clearSelection = event.target.closest("[data-clear-selection]");
    if (clearSelection) {
      selectionIds = [];
      writeStoredIds("caqSelection", selectionIds);
      renderProducts();
      return;
    }

    const shareButton = event.target.closest("[data-share]");
    if (shareButton) {
      const product = products.find((item) => item.id === shareButton.dataset.share);
      if (product) shareProduct(product).catch(() => alert("Le partage n'a pas pu aboutir."));
    }

    const previewButton = event.target.closest("[data-preview]");
    if (previewButton) {
      const product = products.find((item) => item.id === previewButton.dataset.preview);
      if (product) openPreview(product);
    }
  });
}

function setupTheme() {
  document.body.dataset.theme = currentTheme;
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("caqTheme", currentTheme);
      document.body.dataset.theme = currentTheme;
    });
  });
}

function setupLoader() {
  const loader = document.querySelector(".page-loader");
  if (!loader) return;
  window.setTimeout(() => loader.classList.add("loaded"), 650);
}

function setupStyleAdvisor() {
  const form = document.querySelector("[data-style-advisor]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "Bonjour Chic Au Quotidien, j'aimerais un conseil style.",
      `Occasion : ${data.get("occasion") || "Non précisée"}`,
      `Pour : ${data.get("profile") || "Non précisé"}`,
      `Article recherché : ${data.get("type") || "Non précisé"}`,
      `Détail : ${data.get("detail") || "Je souhaite vos recommandations."}`
    ].join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener");
  });
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count-to]");
  if (!counters.length) return;
  const animate = (counter) => {
    const target = Number(counter.dataset.countTo || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 34));
    const tick = () => {
      current = Math.min(target, current + step);
      counter.textContent = String(current);
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  counters.forEach((counter) => observer.observe(counter));
}

function updateSelectionBar() {
  let bar = document.querySelector(".selection-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "selection-bar";
    document.body.appendChild(bar);
  }

  if (!selectionIds.length) {
    bar.hidden = true;
    document.body.classList.remove("has-selection");
    return;
  }

  const count = selectionIds.length;
  bar.hidden = false;
  document.body.classList.add("has-selection");
  bar.innerHTML = `
    <span>${count} article${count > 1 ? "s" : ""} dans votre sélection</span>
    <a class="btn primary small" href="${buildWhatsAppLink(selectionMessage())}" target="_blank" rel="noopener">Envoyer sur WhatsApp</a>
    <button class="btn outline small" type="button" data-clear-selection>Vider</button>
  `;
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".section, .product-card, .collection-card, .quick-needs a, .style-lab");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => {
    if (!item.classList.contains("reveal")) item.classList.add("reveal");
    observer.observe(item);
  });
}

function setupCardTilt() {
  document.addEventListener("pointermove", (event) => {
    const card = event.target.closest(".product-card");
    if (!card || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  });

  document.addEventListener("pointerout", (event) => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupLoader();
  setupNavigation();
  setupWhatsAppLinks();
  setupFilters();
  setupProductActions();
  setupCardTilt();
  setupStyleAdvisor();
  setupCounters();
  renderProducts();
});
