/* FR overlays — devices */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('fr', {
    deviceOsCompare: {
        windows: {
          title: "Compatibilité la plus large et écosystème d'IA local le plus mature",
          tagline: "Compatibilité la plus large et écosystème d'IA local le plus mature",
          chooseWhen: [
            "Vous jouez à des jeux AAA et souhaitez expérimenter l'IA sur la même machine",
            "Le travail ou l'école s'exécute sur des logiciels Office, CAO ou Windows industriels.",
            "Vous souhaitez créer un ordinateur de bureau et mettre à niveau la RAM et le GPU au fil du temps",
            "Vous jouez à des jeux AAA et souhaitez expérimenter l'IA sur la même machine",
            "Vous expédiez principalement des applications iOS/macOS (vous avez toujours besoin d'un Mac pour les versions finales)"
          ],
          avoidWhen: [
            "Vous expédiez principalement des applications iOS/macOS (vous avez toujours besoin d'un Mac pour les versions finales)",
            "Vous dépendez d'applications Apple uniquement comme Final Cut Pro ou Logic Pro",
            "Ollama, LM Studio et Stable Diffusion WebUI proposent le plus de didacticiels et les pilotes les plus fluides sous Windows. Les cartes RTX sont le choix idéal pour l’IA locale."
          ],
          aiNote: "Ollama, LM Studio et Stable Diffusion WebUI proposent le plus de didacticiels et les pilotes les plus fluides sous Windows. Les cartes RTX sont le choix idéal pour l’IA locale."
        },
        macos: {
          title: "macOS",
          tagline: "Expérience raffinée, écosystème Apple transparent, mémoire unifiée pour des modèles locaux plus légers",
          chooseWhen: [
            "Vous utilisez déjà un iPhone/iPad et souhaitez AirDrop, Handoff et iCloud en un seul flux",
            "Vous vous souciez de la batterie, du silence et du travail mobile et acceptez le premium",
            "Vous utilisez principalement l'IA cloud et des modèles locaux légers (par exemple Ollama 7B quant)",
            "Vous voulez un minimum de tracas pour le conducteur et une véritable configuration d'apprentissage prête à l'emploi",
            "Vous voulez un minimum de tracas pour le conducteur et une véritable configuration d'apprentissage prête à l'emploi"
          ],
          avoidWhen: [
            "Vous avez besoin de CUDA ou de nombreux outils d'IA uniquement NVIDIA",
            "Vous souhaitez des modèles 30B+ locaux ou une formation LoRA (le coût en mémoire est élevé)",
            "Vous dépendez d’un logiciel professionnel uniquement Windows",
            "Vous dépendez d’un logiciel professionnel uniquement Windows"
          ],
          aiNote: "La mémoire unifiée Apple Silicon fait office de VRAM : 36 Go sont confortables pour 13 Go, 64 Go pour 34 Go quantitatifs, 128 à 512 Go (Mac Studio/Pro) pour l'inférence locale de classe 70B et un travail créatif intensif. Pas de CUDA : préférez Ollama, MLX et LM Studio."
        }
      },
      deviceMemoryTiers: [
        {
          level: "Non recommandé",
          suitable: "Navigation Web et travail de bureau monotâche uniquement",
          aiUse: "Cloud AI est à peine utilisable ; Chrome + ChatGPT avec de nombreux onglets bégaieront",
          verdict: "Norme d'entrée"
        },
        {
          level: "Norme d'entrée",
          suitable: "Cloud AI comme voie principale, écriture bureautique, codage léger",
          aiUse: "Les applications Web et de bureau ChatGPT/Claude fonctionnent correctement ; Ollama 3B – 7B est possible mais lent",
          verdict: "Un bon début pour la plupart des apprenants : aucun GPU discret n'est nécessaire pour environ 90 % de ce site."
        },
        {
          level: "Fortement recommandé",
          suitable: "Codage assisté par IA, projets multiples, modèles locaux 7B-13B",
          aiUse: "Curseur + navigateur + un modèle local ensemble sans contrainte ; le 13B quantifié est viable",
          verdict: "Si vous êtes sérieux au sujet de l’IA et des projets réels, 32 Go est le choix « sans regret » le plus rentable."
        },
        {
          level: "Entrée professionnelle",
          platform: "MacBook Pro M3 Max · Poste de travail Windows",
          suitable: "Développement lourd, montage 4K, modèles locaux ~ 30 B, plusieurs VM",
          aiUse: "Inférence quantique 34B, ComfyUI + Cursor ensemble, de nombreux services Docker en parallèle",
          verdict: "Le point de départ professionnel. La mémoire unifiée Mac de 64 Go se comporte comme un ordinateur portable à grande VRAM ; Les postes de travail Windows peuvent ensuite s'étendre jusqu'à 128 Go."
        },
        {
          level: "Poste de travail phare",
          platform: "Mac Studio M2/M3 Ultra · Station de travail Windows haut de gamme",
          suitable: "Modèles locaux de classe 70B, long travail vidéo IA, nombreux projets parallèles, environnements de développement en petites équipes",
          aiUse: "Inférence quantique 70B, LLM multimodaux, génération d'images/vidéos par lots, 2 à 3 modèles de taille moyenne à la fois",
          verdict: "Le point idéal de mémoire unifiée de 128 Go d’Apple (Studio Ultra). Pour ceux qui considèrent l’IA comme une production et non comme un jouet."
        },
        {
          level: "Création de premier plan",
          platform: "Mac Studio / Mac Pro (BTO) · Poste de travail Threadripper",
          suitable: "Expériences contextuelles très longues, changement de modèle, séquences 8K + effets IA, clusters de bases de connaissances locales",
          aiUse: "Quant 70 B plus lourd + intégration de modèles + flux de travail SD/FLUX ensemble : une machine pour tout un studio",
          verdict: "Un budget content-factory/ingénieur. Le Mac 256 Go est généralement uniquement BTO ; confirmez que vous ne pouvez pas mettre à niveau plus tard avant de commander."
        },
        {
          level: "Spécification extrême",
          platform: "Configuration Mac Pro M2 Ultra max · poste de travail de classe serveur",
          suitable: "Laboratoires de recherche, post-film, équipes d'ingénierie IA, déploiement LLM privé sur site",
          aiUse: "Parallélisme multi-utilisateurs/multi-modèles, contexte énorme, expériences de mise au point légères, IA en temps réel sur d'énormes médiathèques",
          verdict: "Très peu de gens en ont besoin. La plupart des apprenants se débrouillent bien entre 32 et 64 Go ; 512 Go sont destinés aux scénarios « mon bureau est le centre de données »."
        }
      ],
      deviceGpuTiers: [
        {
          tier: "GPU intégré/pas de GPU discret",
          forWho: "ChatGPT, Claude, Kimi, Midjourney web, Notion AI",
          canDo: "Génération d'images SD locales fluides, inférence de modèle 13B+, formation CUDA",
          cannotDo: "Génération d'images SD locales fluides, inférence de modèle 13B+, formation CUDA",
          examples: "Graphiques intégrés Intel, AMD Radeon iGPU, MacBook Air M2/M3",
          verdict: "La plupart des cours ici ne nécessitent aucun GPU discret. Dépensez plutôt de l’argent pour 32 Go de RAM."
        },
        {
          tier: "GPU discret d'entrée de gamme",
          forWho: "Les apprenants testent l'IA locale et la génération d'images lumineuses",
          canDo: "SD 1,5 à basse résolution, Ollama 7B quant, inférence LoRA de base",
          cannotDo: "FLUX de pleine précision, modèles 70B, formation à grande échelle",
          examples: "Un ticket d’entrée à l’IA locale. Préférez les ordinateurs de bureau ; les températures thermiques des ordinateurs portables limitent la charge soutenue.",
          verdict: "Un ticket d’entrée à l’IA locale. Préférez les ordinateurs de bureau ; les températures thermiques des ordinateurs portables limitent la charge soutenue."
        },
        {
          tier: "GPU discret de milieu de gamme",
          forWho: "Concerts parallèles à l'IA, génération d'images quotidiennes, développement local et débogage",
          canDo: "SDXL, FLUX quantifié, modèles 13B, workflows ComfyUI, réglage fin de la lumière",
          cannotDo: "Entraînement multi-GPU pleine précision 70B",
          examples: "RTX 4060 Ti 16 Go, RTX 4070 12 Go, ordinateur portable RTX 4070",
          verdict: "Le point idéal de la valeur de l’IA locale. Le 4060 Ti 16 Go est particulièrement puissant pour les modèles image gen + ensemble."
        },
        {
          tier: "GPU discret haut de gamme",
          forWho: "Ingénieurs IA, créateurs lourds, formation à petite échelle",
          canDo: "Inférence quantique 34B–70B, tests de génération vidéo locale, formation LoRA, plusieurs modèles en parallèle",
          cannotDo: "Grande formation commerciale (nécessite encore des clusters cloud / A100)",
          examples: "RTX 4080 16 Go, RTX 4090 24 Go, RTX 5090",
          verdict: "Plafond IA local à un seul GPU. Seulement si le budget est solide et que vous êtes engagé dans la voie locale."
        },
        {
          tier: "Mémoire unifiée Apple",
          forWho: "Utilisateurs Mac, travail mobile, modèles locaux plus légers",
          canDo: "Ollama 7B – 13B (par RAM), framework MLX, cloud AI comme moteur principal",
          cannotDo: "Écosystème CUDA, outils optimisés uniquement par NVIDIA, grande VRAM rentable",
          examples: "M3 24 Go, M3 Pro 36 Go, M3 Max 64 Go, Studio Ultra 128-192 Go, Mac Pro 256-512 Go",
          verdict: "36 Go ≈ 13B confortable ; 64 Go ≈ 34 Go ; 128 Go+ peuvent toucher 70 B quant. La mémoire est de la VRAM : configurez-la avant d'acheter."
        }
      ],
      deviceStorageTiers: [
        {
          verdict: "Utilisateurs cloud uniquement ; Les applications OS + le remplissent rapidement, ce qui n'est pas recommandé."
        },
        {
          verdict: "Amende pour une utilisation d'entrée ; quelques applications d’IA laissent peu de marge – attendez-vous à un nettoyage fréquent."
        },
        {
          verdict: "Bibliothèques de modèles locales, médias 4K, plusieurs machines virtuelles : la valeur par défaut du créateur et de l'ingénieur."
        },
        {
          verdict: "Bibliothèques de modèles locales, médias 4K, plusieurs machines virtuelles : la valeur par défaut du créateur et de l'ingénieur."
        }
      ],
      deviceAiBoxes: {
        "dgx-spark": {
          title: "env. 3 150 à 4 570 $",
          budget: "env. 3 150 à 4 570 $",
          form: "Boîtier de supercalculateur IA de bureau (150×150×50 mm)",
          os: "Système d'exploitation NVIDIA DGX (Linux)",
          bestFor: "Ingénieurs, chercheurs et développeurs en IA qui veulent des agents locaux et de grands modèles sur leur bureau",
          tradeoff: "Architecture Arm et pile relativement fermée : certains outils x86/Windows nécessitent un portage ; la disponibilité et le support en dehors des principaux marchés varient ; après des hausses de prix, comparez la valeur par rapport à une version DIY RTX 5090.",
          vsDiy: "par rapport à une station de travail DIY de 128 Go : DGX Spark est plus petit, est livré avec une pile logicielle complète et exécute de grands modèles prêts à l'emploi ; une plate-forme double GPU Windows/Linux auto-construite propose plus de didacticiels CUDA et de GPU échangeables pour un bricolage à long terme.",
          specs: {
            chip: "GB10 : GPU Arm + Blackwell à 20 cœurs, cœurs Tensor de 5e génération",
            memory: "Mémoire unifiée LPDDR5x de 128 Go (CPU/GPU partagé)",
            storage: "4 To NVMe M.2 (auto-chiffrement)",
            aiCompute: "Jusqu'à ~1 PFLOP (FP4) ; ConnectX-7 200 Gbit/s",
            networking: "10GbE + Wi-Fi 7 ; La liaison à deux unités s'adapte aux modèles de classe ~ 405B"
          },
          capabilities: {
            inference: "Unité unique : jusqu'à ~200 B de paramètres",
            finetune: "Affinez jusqu'à ~ 70 B de paramètres",
            agents: "Pile d'agents NIM, TensorRT, NemoClaw/OpenShell préinstallés"
          },
          reasoning: [
            "Positionné comme « le plus petit supercalculateur IA au monde » : 1,2 kg sur votre bureau, ~ 240 W, bien plus silencieux qu'une tour complète",
            "La mémoire unifiée de 128 Go charge les poids complets du modèle sans le déchargement des GPU grand public",
            "La pile DGX OS + NVIDIA AI est prête au premier démarrage : ignorez la configuration de CUDA/pilote/conteneur",
            "Idéal pour le prototypage, le réglage fin et l'inférence avant de passer à DGX Cloud ou à un centre de données"
          ],
          oemVariants: []
        },
        "gb10-oem": {
          title: "Écosystème OEM GB10 (même puce)",
          budget: "env. 3 150 à 5 000 $",
          form: "Mini postes de travail IA de marque",
          os: "Système d'exploitation DGX ou Linux personnalisé par le fournisseur",
          bestFor: "Équipes qui souhaitent le calcul GB10 mais préfèrent les achats d'entreprise et le support de marque",
          tradeoff: "Les configurations et les prix diffèrent considérablement : confirmez la licence complète du logiciel NVIDIA AI avant l'achat ; pas nécessairement moins cher que le DGX Spark propriétaire.",
          vsDiy: "Choisissez ceci ou DGX Spark, pas besoin des deux. Si vous avez déjà des contrats avec des fournisseurs informatiques, demandez d'abord aux OEM ; les développeurs individuels trouvent généralement DGX Spark plus simple.",
          specs: {
            chip: "Même superpuce GB10 que DGX Spark",
            memory: "2 à 4 To NVMe (varie selon la marque)",
            storage: "2 à 4 To NVMe (varie selon la marque)",
            aiCompute: "Même classe que DGX Spark, ~1 PFLOP FP4",
            networking: "La plupart incluent Ethernet haut débit ; certains modèles offrent une extension plus riche"
          },
          capabilities: {
            inference: "Identique au DGX Spark, ~200 B de paramètres",
            finetune: "~70B réglage fin des paramètres",
            agents: "La prise en charge de NVIDIA AI Enterprise/NIM dépend du pack du fournisseur"
          },
          reasoning: [
            "ASUS Ascent GX10, HP ZGX Nano, Dell Pro Max, Lenovo, Acer Veriton GN100, GIGABYTE AI TOP ATOM, MSI et d'autres utilisent GB10",
            "Le calcul correspond à DGX Spark ; les différences sont le refroidissement du châssis, les ports, la garantie et les services de préinstallation",
            "Les acheteurs d'entreprise peuvent gérer les achats informatiques et la gestion des actifs standard.",
            "Idéal lorsque vous vous êtes engagé envers NVIDIA CUDA et que vous ne souhaitez pas créer de salle de serveurs"
          ],
          oemVariants: [
            "ASUS Ascent GX10",
            "HP ZGX Nano",
            "Dell Pro Max",
            "Poste de travail Lenovo IA",
            "Acer Veriton GN100",
            "GIGABYTE AI TOP ATOM",
            "Bureau MSI IA"
          ]
        },
        "ryzen-ai-halo": {
          title: "AMD Ryzen AI Halo · Mini PC de 128 Go",
          budget: "env. 2 000 à 4 000 $",
          form: "Mini PC IA (~ 193 × 186 × 77 mm)",
          os: "Windows 11 Professionnel / Ubuntu",
          bestFor: "Apprenants avancés et développeurs indépendants qui souhaitent des LLM locaux de 128 Go inférieurs au prix DGX Spark",
          tradeoff: "Pas de CUDA ; PyTorch ROCm est toujours plus faible que NVIDIA ; La RAM est soudée ; La prise en charge des mini-PC tiers et le contrôle qualité varient selon la marque.",
          vsDiy: "par rapport à un ordinateur de bureau DIY de 128 Go DDR5 : les boîtiers Halo sont plus petits avec une alimentation gérée ; Le bricolage permet les échanges de GPU et les mises à niveau de RAM avec plus de marge dans 3 à 5 ans. vs DGX Spark : AMD est moins cher et compatible avec Windows, mais le réglage des grands modèles et les piles officielles sont moins complets.",
          specs: {
            chip: "Zen 5 à 16 cœurs / 32 threads, jusqu'à 5,1 GHz ; 50 HAUTS NPU",
            memory: "Mémoire unifiée soudée LPDDR5X 64/128 Go 8 000 MHz",
            storage: "SSD PCIe 4.0 de 2 à 4 To ; double M.2 extensible jusqu'à 16 To",
            aiCompute: "Radeon 8060S 40CU RDNA 3.5 ; SoC entier ~ 126 TOPS",
            networking: "2,5GbE + Wi-Fi 7 + double USB4"
          },
          capabilities: {
            inference: "Modèle 128 Go : 70B quant, Qwen3 235B quant, Llama4 109B et similaire",
            finetune: "La LoRA légère est réalisable ; les grandes formations appartiennent toujours au cloud",
            agents: "OpenClaw, bases de connaissances locales, LM Studio / Ollama"
          },
          reasoning: [
            "Gamme Ryzen AI Halo d'AMD : Strix Halo regroupe le CPU, l'iGPU, le NPU et une énorme mémoire dans un mini châssis",
            "Les configurations de 128 Go telles que GMKtec EVO-X2 et Geekom A9 Max se situent autour du niveau d'environ 2 000 $, bien en dessous des boîtes GB10",
            "Fenêtres prêtes à l'emploi ; Ollama / LM Studio / llama.cpp sont rapides à adopter",
            "RDNA iGPU gère également les jeux et le travail léger sur les images ComfyUI : une machine, plusieurs rôles"
          ],
          oemVariants: [
            "GMKtec EVO-X2",
            "Geekom A9 Max",
            "Double cluster DGX Spark"
          ]
        },
        "dual-dgx-spark": {
          title: "Double cluster DGX Spark",
          budget: "env. 6 300 à 9 150 $",
          form: "Deux unités de bureau + interconnexion haut débit",
          os: "Système d'exploitation NVIDIA DGX",
          bestFor: "Groupes de recherche, startups natives de l'IA et cas extrêmes qui ont besoin d'énormes modèles locaux sans cloud",
          tradeoff: "Le coût total est proche d'un Mac Pro haut de gamme ; vous conservez toujours le logiciel de cluster, ce qui est excessif pour environ 99 % des apprenants individuels.",
          vsDiy: "par rapport à un serveur 4×4090 : le double Spark est plus silencieux, consomme moins et convient au bureau ; Les plates-formes multi-GPU x86 offrent un débit de formation plus élevé et un marché mature des GPU d'occasion.",
          specs: {
            chip: "Deux unités GB10 reliées via le réseau haut débit ConnectX",
            memory: "Pool de mémoire unifiée de 256 Go (128 Go × 2)",
            storage: "8 To NVMe combinés (4 To × 2)",
            aiCompute: "~2 PFLOP FP4 combinés",
            networking: "Liaison inter-nœuds ConnectX-7 200 Gbit/s"
          },
          capabilities: {
            inference: "Inférence de modèle de paramètres jusqu'à ~ 405 B",
            finetune: "Expériences de réglage fin distribuées à plus grande échelle",
            agents: "Parallélisme multi-agents, routage de contexte très large"
          },
          reasoning: [
            "NVIDIA prend officiellement en charge la liaison de deux unités DGX Spark, dépassant ainsi le plafond d'inférence d'environ 200 B pour un boîtier unique.",
            "Bien moins cher qu'une station DGX tout en couvrant des expériences de classe ~ 400B",
            "Une « salle des machines de bureau » à côté de votre bureau pour une validation privée des grands modèles",
            "Démarreur d'apprentissage dans le cloud"
          ],
          oemVariants: []
        }
      },
      devicePresets: {
        "cloud-starter": {
          title: "Démarreur d'apprentissage dans le cloud",
          budget: "env. 570 à 860 $",
          form: "Ultrabook",
          os: "Windows ou macOS",
          bestFor: "Compléter le parcours de 7 jours de ce site, apprentissage quotidien ChatGPT/Claude, rédaction de bureau",
          reasoning: [
            "Environ 90 % de l'apprentissage s'effectue dans le navigateur et les applications ; aucun calcul local n'est requis",
            "16 Go conservent de nombreux onglets + clients IA réactifs",
            "Les Ultrabooks sont portables : bibliothèque, café, n'importe où",
            "Économisez d'abord le budget pour 1 à 2 mois d'abonnement aux outils d'IA"
          ],
          tradeoff: "Pas confortable pour les modèles locaux ou la génération d'images SD ; un codage multi-dépôt lourd peut sembler difficile.",
          specs: {
            gpu: "Graphiques intégrés"
          }
        },
        "coding-mac": {
          title: "Codage + écosystème Apple",
          budget: "env. 1 290 à 2 000 $",
          form: "MacBook Air/Pro",
          os: "macOS",
          bestFor: "Développement de curseurs, apprentissage iOS, synergie d'appareils Apple, IA cloud comme moteur principal",
          reasoning: [
            "À partir de 24 Go, vous pouvez exécuter des expériences Ollama 7B légères en parallèle",
            "Le transfert avec iPhone/iPad facilite la recherche et les tests d’applications",
            "Le transfert avec iPhone/iPad facilite la recherche et les tests d’applications",
            "Chaîne d’outils Apple complète : Final Cut, Keynote et plus"
          ],
          tradeoff: "Mémoire unifiée de 24 à 36 Go",
          specs: {
            ram: "Mémoire unifiée de 24 à 36 Go",
            gpu: "Graphiques intégrés (mémoire unifiée)",
            storage: "512 Go à 1 To"
          }
        },
        "coding-win": {
          title: "Le cheval de bataille du codage de l'IA",
          budget: "env. 1 000 à 1 430 $",
          form: "Ordinateur portable Windows/ordinateur de bureau compact",
          os: "Windows 11",
          bestFor: "Curseur, VS Code, Docker, développement multi-repo assisté par IA",
          reasoning: [
            "32 Go est la ligne « sans regrets » pour le codage de l'IA : plusieurs dépôts + navigateur + IA ensemble",
            "Windows s'adapte aux environnements de développement d'entreprise et à divers outils CLI",
            "Les configurations RTX 4050 en option ajoutent une capacité de modèle local léger",
            "SSD de 1 To pour WSL, images Docker et plusieurs environnements Node/Python"
          ],
          tradeoff: "Graphiques intégrés ou RTX 4050",
          specs: {
            gpu: "Graphiques intégrés ou RTX 4050"
          }
        },
        "local-ai": {
          title: "Poste de travail IA local",
          budget: "env. 1 710 à 2 570 $",
          form: "Ordinateur de bureau/ordinateur portable de jeu Windows",
          os: "Windows 11",
          bestFor: "Modèles locaux Ollama, génération d'images ComfyUI, projets de revenus secondaires d'IA",
          reasoning: [
            "Le RTX 4060 Ti 16 Go est le roi de la valeur de l'IA locale en 2026 : suffisamment de VRAM pour SDXL et 13B",
            "La RAM système de 32 Go laisse de la marge lors du chargement des modèles",
            "Les ordinateurs de bureau refroidissent mieux : inférence soutenue sans limitation",
            "Moins cher que Mac avec un calcul similaire ; Les tutoriels CUDA sont partout"
          ],
          tradeoff: "Non portable ; consommation d'énergie plus élevée ; les configurations d’ordinateurs portables s’accélèrent sous de longues charges."
        },
        "creator-pro": {
          title: "Production créative",
          budget: "env. 2 570 à 4 290 $",
          form: "Ordinateur portable créateur MacBook Pro / Windows",
          os: "macOS/Windows",
          bestFor: "Vidéo IA, génération d'images par lots, édition de podcasts, expériences de modèles locaux de classe 70B",
          reasoning: [
            "À partir de 64 Go, vous pouvez exécuter 34 Go quant ; 128 Go Studio Ultra atteint ~ 70 milliards d'inférences locales",
            "2 To pour les poids des modèles, les bibliothèques multimédias et les archives de projets",
            "Sur Mac, configurez la mémoire pour un horizon de 3 ans : aucune mise à niveau ultérieure ; sous Windows, choisissez RTX 4070+",
            "Transformez ce que vous apprenez ici en revenus liés au contenu ou à la conception"
          ],
          tradeoff: "Prix ​​élevé ; les débutants doivent valider la direction dans le cloud avant d’acheter.",
          specs: {
            ram: "64 à 128 Go de mémoire unifiée / 64 Go+",
            gpu: "Mémoire élevée intégrée / RTX 4070+"
          }
        },
        "desktop-value": {
          title: "Création de valeur sur ordinateur",
          budget: "env. 1 140 à 1 710 $",
          form: "Bureau de bricolage",
          os: "Windows 11",
          bestFor: "Les ordinateurs de bureau offrent le plus de calcul par dollar ; Le GPU et la RAM sont évolutifs",
          reasoning: [
            "RTX 4060 8 Go suffisent pour les modèles d’entrée SD et 7B",
            "RTX 4060 8 Go suffisent pour les modèles d’entrée SD et 7B",
            "32 Go de RAM peuvent atteindre 64 Go et prolonger la durée de vie de 3 à 5 ans",
            "Idéal pour l'apprentissage à domicile fixe avec les expériences ComfyUI et Ollama"
          ],
          tradeoff: "Pas mobile ; un certain savoir-faire en matière d'assemblage et de maintenance est utile."
        },
        "luxury-mbp": {
          title: "env. 6 430 à 9 710 $",
          budget: "MacBook Pro 16\"",
          form: "MacBook Pro 16\"",
          os: "macOS",
          bestFor: "Expériences 34B à 70B en déplacement, montage mobile, démos en voyage",
          reasoning: [
            "128 Go est la limite de mémoire actuelle du MacBook : tout votre laboratoire d’IA dans un sac",
            "M4 Max est un puissant monocœur et multicœur ; Curseur + Final Cut + Ollama ensemble, c'est bien",
            "Ajoutez Pro Display XDR à la maison et il devient un poste de travail de bureau",
            "Ajoutez Pro Display XDR à la maison et il devient un poste de travail de bureau"
          ],
          tradeoff: "SSD de 2 à 4 To",
          specs: {
            ram: "Mémoire unifiée de 64 à 128 Go",
            gpu: "Graphiques intégrés (mémoire unifiée)",
            storage: "SSD de 2 à 4 To"
          }
        },
        "luxury-studio": {
          title: "Produit phare de bureau · Mac Studio Ultra",
          budget: "env. 11 430 à 17 140 $",
          form: "Studio Mac",
          os: "macOS",
          bestFor: "Studio de création d'IA personnel, inférence locale 70B, ordinateur de bureau silencieux et haut de gamme",
          reasoning: [
            "128 Go est le « point idéal » d'Apple pour la plupart des professionnels de l'IA : 70 B sans le prix du Mac Pro.",
            "Châssis minuscule et presque silencieux : élégant sur un bureau par rapport aux tours refroidies à l'eau",
            "L'écosystème MLX + Ollama est mature pour les ménages Apple lourds",
            "Couvre environ 90 % des cas d'utilisation de l'IA locale pour beaucoup moins cher que Mac Pro"
          ],
          tradeoff: "La mémoire et le stockage sont BTO et fixes ; pas de CUDA : certains outils de recherche nécessitent des solutions de contournement.",
          specs: {
            ram: "128 à 192 Go de mémoire unifiée",
            gpu: "Graphiques intégrés (GPU 60 cœurs)",
            storage: "SSD de 2 à 4 To"
          }
        },
        "luxury-macpro": {
          title: "Plafond Apple · Mac Pro",
          budget: "env. 25 700 à 64 300 $",
          form: "Tour Mac Pro",
          os: "macOS",
          bestFor: "Studios de cinéma, équipes natives de l'IA, grands modèles privés, multi-flux 8K",
          reasoning: [
            "Pour les équipes qui refusent le cloud mais ont besoin d'une RAM de classe datacenter",
            "Pour les équipes qui refusent le cloud mais ont besoin d'une RAM de classe datacenter",
            "After Effects + ComfyUI + un assistant local 70B en rotation",
            "Symbole de statut au sein de l’écosystème Apple – avec un débit réel, pas un décor d’étagère"
          ],
          tradeoff: "Prix ​​extrême ; M2 Ultra est une génération derrière M4 pour le calcul brut par rapport aux clusters NVIDIA à prix similaire.",
          specs: {
            ram: "Mémoire unifiée de 256 à 512 Go",
            gpu: "Graphiques intégrés (GPU 76 cœurs)",
            storage: "SSD de 4 à 8 To"
          }
        },
        "luxury-dual-gpu": {
          title: "Bête à double GPU · Station de travail NVIDIA",
          budget: "env. 11 430 à 25 700 $",
          form: "Poste de travail pleine tour",
          os: "Windows 11/Linux",
          bestFor: "Utilisateurs expérimentés CUDA, formation LoRA, pipelines multi ComfyUI, réglage fin du modèle local",
          reasoning: [
            "Double 4090 = pool VRAM de 48 Go : flux de travail SDXL/FLUX parallèles représentant environ 2 × une seule carte",
            "128 Go de RAM système + grande VRAM constituent le plafond rigide de l'IA locale de Windows",
            "Les didacticiels Ollama, ComfyUI et PyTorch sont les plus riches ici : les favoris des ingénieurs",
            "Échangez les GPU et augmentez la RAM plus tard – plus « bricoleur » qu’Apple"
          ],
          tradeoff: "Fort, gourmand en énergie, remplissant le bureau ; les conducteurs et les environnements ont besoin de soins continus.",
          specs: {
            gpu: "2 × RTX 4090 24 Go ou 2 × RTX 5090",
            storage: "RAID NVMe de 4 To"
          }
        },
        "luxury-apple-win": {
          title: "env. 21 430 à 40 000 $",
          budget: "env. 21 430 à 40 000 $",
          form: "Mac Studio + tour Windows",
          os: "macOS + Windows",
          bestFor: "Utilisateurs ultimes qui souhaitent une expérience quotidienne Apple et un CUDA complet",
          reasoning: [
            "Mac gère le travail créatif quotidien, la mobilité, Final Cut et l'inférence lumineuse MLX",
            "La tour Windows exécute les lots ComfyUI, la formation CUDA et les jeux",
            "Combien de véritables studios d’IA réussissent : pas une seule omni-machine, mais une division claire du travail",
            "Coût total le plus élevé ; câble et synchronisation, bien au-delà de ce dont la plupart des gens ont besoin."
          ],
          tradeoff: "Coût total le plus élevé ; câble et synchronisation, bien au-delà de ce dont la plupart des gens ont besoin.",
          specs: {
            ram: "128 Go + 128 Go",
            gpu: "4 To chacun",
            storage: "4 To chacun"
          }
        }
      },
      deviceSubsections: {
        needs: {
          title: "① Commencez par votre cas d'utilisation principal",
          desc: "Choisissez l’option la plus proche de vous : les préréglages correspondants ci-dessous seront automatiquement mis en surbrillance."
        },
        os: {
          title: "② Windows ou macOS ?",
          desc: "Ni l’un ni l’autre n’est universellement meilleur : faites correspondre votre écosystème logiciel et votre feuille de route IA."
        },
        memory: {
          title: "③ Combien de RAM ?",
          desc: "La RAM est le premier levier du multitâche de l’IA. La RAM Windows peut être étendue ultérieurement ; Apple Silicon utilise une mémoire unifiée (RAM = VRAM). Mac Studio/Pro propose 128 à 512 Go."
        },
        gpu: {
          title: "④ Quel niveau de GPU ?",
          desc: "Les apprenants uniquement cloud peuvent ignorer les GPU discrets ; La génération d'images locales et les modèles ont besoin d'une VRAM sérieuse."
        },
        storage: {
          title: "⑤ Capacité de stockage",
          desc: ""
        },
        aiBoxes: {
          title: "⑥ Boîtiers de calcul dédiés à l'IA",
          desc: ""
        },
        presets: {
          title: "⑦ Configurations recommandées",
          desc: "De l'entrée à <strong>builds sans compromis</strong> : sélectionnez « Sans compromis » ci-dessus pour filtrer rapidement. Chacun explique à qui il est destiné, pourquoi il est configuré de cette façon et les compromis."
        }
      },
      deviceFieldLabels: {
        chooseWhen: "Quand le choisir",
        avoidWhen: "Quand le sauter",
        aiNotePrefix: "Conseil d'apprentissage de l'IA :",
        commonModels: "Modèles courants :",
        suitable: "Idéal pour :",
        aiCapability: "Capacité IA :",
        recommendedApps: "Applications recommandées",
        forWho: "Idéal pour :",
        canDo: "Peut faire :",
        cannotDo: "Lutte / ne peut pas :",
        examples: "Exemple de matériel :",
        ram: "Mémoire",
        gpu: "GPU",
        storage: "Stockage",
        needResultPrefix: "Concentration recommandée :",
        needResultEmpty: "aucun pour l'instant",
        weekN: "Semaine {n}",
        focusThisWeek: "Focus cette semaine",
        practice1: "Pratique 1",
        practice2: "Pratique 2"
      }
  });
})();
