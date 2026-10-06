/* ------------------------------------------------------------------
   Configuration et liste des sujets.
   C'est le seul fichier à modifier pour ajouter ou corriger un sujet.
   ------------------------------------------------------------------ */

const CONFIG = {
  mention: "Mention ICE",
  titre: "Projets de mention",
  annee: "2026–2027",
  responsable: "Sheng Yang",
  contact: "sheng.yang@centralesupelec.fr",

  // URL de l'application web Google Apps Script (voir README.md).
  // Tant qu'elle est vide, la page affiche les sujets mais les vœux sont fermés.
  scriptUrl: "https://script.google.com/macros/s/AKfycbxwkw7-qfNeIKA0TFI7N8FXgjRwxSN-QICSfN8rqatTgZgZgDLnefHBAOmVmiLPi0AS8g/exec"
};

/* Chaque sujet :
   id        identifiant court, stable (ne plus le changer une fois les vœux ouverts)
   titre     titre du sujet
   encadrant nom de l'encadrant·e
   email     adresse de contact (facultatif)
   mots      mots-clés (facultatif)
   resume    une ou deux phrases affichées sur la carte
   texte     paragraphes du descriptif (affichés en dépliant la carte)
   pdf       chemin du sujet complet (facultatif)                         */

const PROJETS = [
  {
    id: "bandits-synchro",
    titre: "Apprentissage distribué et algorithmes de synchronisation",
    encadrant: "Richard Combes",
    email: "richard.combes@centralesupelec.fr",
    mots: ["Apprentissage par renforcement", "Bandits multi-joueurs", "Codage interactif", "Théorie de l'information"],
    resume: "Coordonner plusieurs apprenants sans échange d'information, en traitant la coordination comme un problème de communication et de codage.",
    texte: [
      "Ce projet porte sur l'apprentissage par renforcement distribué, où plusieurs apprenants (robots, véhicules, agents…) choisissent de manière séquentielle des actions afin de maximiser la somme des récompenses obtenues. Le problème est bien plus complexe que sa version centralisée, car les apprenants doivent se coordonner de manière implicite, sans échanger d'informations.",
      "Un exemple qui illustre la nécessité de coordination est le bandit à plusieurs joueurs : quand plusieurs apprenants choisissent le même bras, une collision survient et la récompense de tous est nulle. Sans coordination, les collisions sont inévitables et il est impossible de développer des algorithmes optimaux. On retrouve ce phénomène en théorie des jeux, dans tous les jeux dont les équilibres de Nash ne sont pas symétriques.",
      "Une approche nouvelle consiste à voir la coordination comme un problème de communication au sens de la théorie de l'information et à utiliser des stratégies de codage interactif. Cette connexion ouvre des perspectives pour combiner codage correcteur d'erreurs, théorie de l'information et théorie de l'apprentissage.",
      "Le but du projet est d'explorer cette approche sur les plans théorique et algorithmique : implémenter ces stratégies de coordination fondées sur le codage distribué, évaluer leurs performances, puis proposer de nouveaux algorithmes d'apprentissage par renforcement distribué qui exploitent cette capacité de coordination.",
      "Évaluation : soutenance orale et rapport écrit, qui contiendra l'ensemble des codes Python utilisés pour générer les résultats."
    ],
    pdf: "sujets/01-bandits-synchro.pdf"
  },
  {
    id: "libs",
    titre: "IA guidée par la physique pour l'estimation de concentrations chimiques en spectroscopie LIBS",
    encadrant: "José Picheral",
    email: "jose.picheral@centralesupelec.fr",
    mots: ["Problème inverse", "Parcimonie", "Apprentissage profond", "IA guidée par la physique", "Traitement du signal"],
    resume: "Inverser un modèle physique non linéaire pour estimer des concentrations à partir de spectres LIBS, en partenariat avec la startup Iumtek.",
    texte: [
      "Le projet se déroule au pôle Signaux & Statistiques du L2S, dans une équipe qui travaille avec la startup Iumtek, spécialisée dans l'instrumentation pour la mesure LIBS (Laser-Induced Breakdown Spectroscopy). Un doctorant travaille sur un sujet connexe. Des visites chez Iumtek permettront de découvrir l'instrumentation et de réaliser des campagnes de mesures en seconde partie du projet.",
      "La LIBS consiste à focaliser une impulsion laser très intense sur un matériau pour générer un micro-plasma. En se refroidissant, ce plasma émet une lumière dont le spectre révèle les raies d'émission atomiques des éléments présents. La méthode permet des analyses quantitatives rapides, in situ, sans contact et sans préparation d'échantillon, avec en premier lieu une application au recyclage des déchets d'équipements électriques et électroniques (métaux critiques, terres rares, métaux précieux).",
      "Estimer les concentrations et les paramètres du plasma à partir du spectre mesuré est un problème inverse non linéaire et mal conditionné, d'autant plus difficile que la liste des éléments présents n'est pas connue a priori (parcimonie, chevauchement des raies). Les approches purement fondées sur les données souffrent de la rareté des spectres annotés ; l'optimisation classique du modèle direct est lente et sensible aux minima locaux. L'IA guidée par la physique combine modèle direct et réseaux de neurones.",
      "Le modèle direct est fourni sous forme d'un simulateur Python. Plusieurs approches seront évaluées : unrolling (déployer un optimiseur sous forme de réseau), Plug-and-Play / diffusion 1D (débruiteur couplé à l'attache aux données), Deep Parameter Prior (optimisation sans données d'entraînement) et PINNs.",
      "Déroulement : revue bibliographique et prise en main du simulateur ; validation et comparaison des approches sur spectres simulés ; confrontation aux spectres mesurés avec les instruments d'Iumtek, avec possibilité de participer à l'acquisition sur banc d'essai."
    ],
    pdf: "sujets/02-libs.pdf"
  },
  {
    id: "ctw-finance",
    titre: "Application de la théorie de l'information à la finance quantitative : de la compression universelle à la prédiction du marché financier",
    encadrant: "Sheng Yang",
    email: "sheng.yang@l2s.centralesupelec.fr",
    mots: ["Compression universelle", "Context tree weighting", "Prédiction", "Séries temporelles financières"],
    resume: "Appliquer l'algorithme CTW à la prédiction des marchés et combiner plusieurs signaux auxiliaires à faible complexité.",
    texte: [
      "La compression universelle consiste à réduire la taille d'un ensemble de données sans connaissance préalable de leur distribution. Ce problème est étroitement lié à celui de la prédiction : une prédiction plus précise conduit à une compression plus efficace, et inversement.",
      "Pour une série temporelle …, Xₙ₋₁, Xₙ, la théorie de l'information montre qu'on peut estimer la loi conditionnelle de Xₙ₊₁ de façon asymptotiquement optimale, avec un algorithme de faible complexité. Le « context tree weighting » (CTW), conçu pour la compression universelle, en est un exemple ; il s'applique à la prédiction des marchés en prenant pour X un indice comme le CAC 40 ou le S&P 500.",
      "On dispose souvent d'informations supplémentaires : une série …, Yₙ₋₁, Yₙ appelée « signal », par exemple des données du marché des changes. Ajouter un signal pertinent réduit la variance et améliore la prédiction.",
      "L'objectif est d'appliquer CTW à la prédiction des marchés financiers, puis de développer un algorithme capable de combiner efficacement plusieurs signaux tout en conservant une faible complexité, et de l'évaluer sur des données réelles.",
      "Livrables : état de l'art sur les algorithmes de prédiction en finance ; rapport intermédiaire sur la modélisation et la stratégie de recherche ; algorithmes et résultats de simulation ; rapport final. Compétences : probabilités, statistique, optimisation, programmation en Python ou Matlab. Le code de l'algorithme CTW de base est fourni."
    ],
    pdf: "sujets/03-ctw-finance.pdf"
  },
  {
    id: "llm-telecom",
    titre: "Large Language Models for Telecom",
    encadrant: "Alexis Aravanis",
    email: "alexis.aravanis@centralesupelec.fr",
    mots: ["Generative AI", "LLM", "6G", "Energy efficiency", "Time-series forecasting"],
    resume: "Use existing large language models to let simulated wireless networks adjust their energy consumption and resource utilization.",
    texte: [
      "The project focuses on generative artificial intelligence, and large language models in particular, for building sustainable 6G networks, in response to the evolution of traffic and of energy availability, including the surplus created by renewable sources.",
      "Large language models are expected to open a new era of autonomous wireless networks, in which a multimodal large model trained over various telecom data can be fine-tuned for network control.",
      "Objective: explore how to employ existing models (e.g. Amazon Chronos T5, Chronos Bolt, ST-LLM, GATGPT) for autonomous wireless networks able to adjust their energy consumption and their use of resources such as base stations and data centers.",
      "Work plan: study the literature on LLMs for telecom; become familiar with existing well-known LLMs; employ them to adjust the energy consumption and resource utilization of simulated wireless networks.",
      "Expected outcomes: an initial report on the state of the art, an intermediate report on the examined LLMs, and a final report with results and well-documented source code."
    ],
    pdf: "sujets/04-llm-telecom.pdf"
  },
  {
    id: "fl-wireless",
    titre: "Distributed and Semi-distributed Machine Learning schemes over wireless environments",
    encadrant: "Mohamad Assaad",
    email: "mohamad.assaad@centralesupelec.fr",
    mots: ["Federated learning", "Wireless channels", "Communication-efficient training", "LLM fine-tuning"],
    resume: "Design communication-efficient distributed training methods and analyze how wireless channels affect learning performance.",
    texte: [
      "Distributed and semi-distributed machine learning lets multiple edge devices collaboratively train a model without revealing their raw data. Federated learning is a well-known example: a central server coordinates with N edge devices to jointly solve an optimization problem, and communication is limited to the optimization parameters.",
      "Learning over wireless environments is attracting growing interest, driven by the number of devices connected through cellular networks and the amount of data they generate. Several challenges impede implementation when devices and server communicate over wireless channels: communication and computation bottlenecks, errors, attenuation and fading, which can degrade the accuracy and efficiency of training.",
      "In this project, we will investigate communication-efficient training methods that reduce computational complexity and lower the communication overhead among devices. We will then analyze how wireless channels affect the performance of learning methods. Applications to fine-tuning LLMs will be considered."
    ],
    pdf: "sujets/05-fl-wireless.pdf"
  },
  {
    id: "optim-bayes",
    titre: "Optimisation bayésienne multiobjectif avec un nombre limité d'évaluations",
    encadrant: "Emmanuel Vazquez",
    email: "emmanuel.vazquez@centralesupelec.fr",
    mots: ["Processus gaussiens", "Front de Pareto", "Stepwise Uncertainty Reduction", "Planification d'expériences"],
    resume: "Répartir un budget limité d'évaluations coûteuses pour approcher le front de Pareto, et établir des garanties sur cette approximation.",
    texte: [
      "Le projet associe mathématiques, statistique, machine learning et IA autour de l'optimisation multiobjectif : choisir les paramètres d'un système ou d'un algorithme pour améliorer plusieurs objectifs qui peuvent s'opposer, par exemple l'architecture d'un réseau pour maximiser la précision et minimiser le temps de calcul. Les solutions dont aucun objectif ne peut être amélioré sans en dégrader un autre forment le front de Pareto.",
      "Chaque évaluation peut nécessiter une simulation ou un entraînement coûteux. Des processus gaussiens décrivent, à partir des évaluations passées, comment les objectifs dépendent des variables ; un critère d'échantillonnage exploite leurs prédictions et leurs incertitudes pour choisir le prochain point à évaluer.",
      "Questions de recherche : comment répartir un budget limité d'évaluations pour approcher le front de Pareto ? Quelles garanties peut-on établir sur la qualité de cette approximation ? Le projet visera à concevoir de nouveaux algorithmes et critères d'échantillonnage et à étudier leurs performances théoriques et numériques (convergence, erreur d'approximation du front, coût de calcul).",
      "L'étude portera particulièrement sur les approches SUR (réduction séquentielle de l'incertitude). Les méthodes de comparaison comprendront l'amélioration espérée de l'hypervolume et les scalarisations aléatoires. Les expériences porteront sur des fonctions tests.",
      "Livrables : rapport scientifique et code Python, soutenance finale ; des contributions au package GPmp pourront être proposées. Compétences : probabilités, statistique, optimisation, algèbre linéaire, Python. Encadrement : réunion scientifique hebdomadaire et suivi régulier des développements logiciels."
    ],
    pdf: "sujets/06-optim-bayes.pdf"
  },
  {
    id: "invest-6g",
    titre: "Dynamic investment decisions in 6G infrastructure under carbon emission constraints: a real-options perspective",
    encadrant: "Salah El Ayoubi",
    email: "salaheddine.elayoubi@centralesupelec.fr",
    mots: ["6G", "Real options", "Dynamic programming", "Sustainability", "Techno-economics"],
    resume: "Model irreversible 6G investment decisions as real options under uncertain revenues, market dynamics and carbon regulation.",
    texte: [
      "The telecommunications industry follows a ten-year cycle. While 5G networks have not yet reached maturity in many countries, 6G standardization is ongoing in 3GPP, with new spectrum bands and new physical-layer techniques.",
      "This race raises sustainability concerns. Investing in new infrastructure under the principle “if you build it, they will come” is no longer economically sustainable, given the maturity of the retail market and the reluctance of vertical industries to deploy costly specialized 5G infrastructure. Environmental sustainability is also a new constraint, with net-zero commitments by 2040–2050 for most operators.",
      "Objective: develop a dynamic decision-making framework for 6G network investment that incorporates three levels of uncertainty: revenues (future data-intensive AI services), market dynamics (integration of mobile edge cloud infrastructure, subject to adoption by vertical industries), and regulation (voluntary net-zero commitments may become hard carbon emission targets).",
      "Investment decisions will be modeled as real options, since they are subject to large uncertainties and largely irreversible. An existing model may be extended to the new sources of uncertainty. A dynamic programming solution is to be proposed, either with an objective function that incorporates a sustainability metric, or under a hard carbon emission constraint."
    ],
    pdf: "sujets/07-invest-6g.pdf"
  },
  {
    id: "quantum-semantic",
    titre: "Quantum Semantic Communications",
    encadrant: "Zeno Toffano",
    email: "zeno.toffano@centralesupelec.fr",
    mots: ["Semantic communication", "Quantum information", "Quantum semantics", "Noisy quantum channels"],
    resume: "Investigate how quantum representations and correlations can carry semantic information, and build a small simulated demonstrator.",
    texte: [
      "Future communication systems are expected to transmit not only bits, but information that is useful and meaningful to the receiver. Semantic communication transmits a compact representation of the meaning or task-relevant content of a message rather than reproducing it bit by bit. Recent work combines this idea with quantum communication, leading to the emerging field of Quantum Semantic Communications (QSC).",
      "The objective is to investigate approaches in which quantum representations, quantum correlations, superposition, contextuality or quantum geometry contribute directly to the modelling and transmission of semantic information. The project builds on recent QSC proposals and connects them with quantum semantics and quantum-based models of textual meaning.",
      "Methodology: first establish a structured state of the art covering QSC, quantum semantics, semantic communication and quantum information theory. Then implement a small demonstrator, for example a quantum representation of words or concepts, or a graph-based semantic representation, followed by transmission through simulated depolarizing, dephasing and amplitude-damping channels."
    ],
    pdf: "sujets/08-quantum-semantic.pdf"
  },
  {
    id: "estimation-assistance",
    titre: "Limites fondamentales de l'estimation avec assistance",
    encadrant: "Michèle Wigger",
    email: "michele.wigger@centralesupelec.fr",
    mots: ["Estimation distribuée", "Théorie de l'information", "Méthode des types", "Exposants d'erreur"],
    resume: "Étudier le compromis optimal entre précision d'estimation et débit de communication dans un système distribué canonique. Projet théorique.",
    texte: [
      "L'inférence et l'estimation distribuées jouent un rôle important dans les systèmes fondés sur les données : elles permettent d'exploiter plusieurs sources tout en limitant la latence et les échanges. L'enjeu central est d'obtenir la meilleure précision possible avec des ressources de communication limitées.",
      "Nous étudierons la performance asymptotique optimale de l'estimation dans un système distribué simple. Un assistant idéalisé observe seulement une information Θ̃ sur le paramètre continu Θ et peut en envoyer une description à débit limité à un estimateur. Celui-ci observe en parallèle une séquence aléatoire dont la distribution dépend de Θ et cherche à estimer ce paramètre avec la meilleure précision possible.",
      "Deux scénarios seront considérés. Dans le premier, Θ̃ est lié à Θ par une contrainte déterministe, par exemple |Θ − Θ̃| ≤ r pour un rayon constant r. Dans le second, Θ̃ est une version bruitée de Θ. Des variantes avec communication interactive et observations séquentielles seront aussi envisagées.",
      "Les résultats attendus sont théoriques, avec notamment des bornes sur les exposants optimaux. Les outils viennent de la théorie de l'information : méthode des types et phénomènes de concentration de variables aléatoires."
    ],
    pdf: "sujets/09-estimation-assistance.pdf"
  }
];
