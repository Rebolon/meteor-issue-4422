Meteor.startup(() => {

  if (Citations.find().count() === 0) {
    var cites = [
      {
        cite: "La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit.",
        author: "Oscar Wilde"
      },
      {cite: "Eclaire demain avec aujourd'hui !", author: "Elizabeth Barret Browning"},
      {
        cite: "Maison de paille où l'on rit vaut mieux qu'un palais où l'on pleure.",
        author: "Proverbe chinois"
      },
      {cite: "Toute l'invention consiste à faire quelque chose de rien.", author: "Jean Racine"},
      {cite: "L'idéal de l'amitié c'est de se sentir un et de rester deux.", author: "Anne Sophie Swetchine"},
      {cite: "Un seul homme armé de courage vaut une majorité.", author: "Andrew Jackson"},
      {
        cite: "La Tour Eiffel ne devait durer que 20 ans, ... elle est devenue aussi éternelle que Paris !",
        author: ""
      },
      {cite: "Un peu de jalousie éveille un amour heureux qui s'endort.", author: "Mme Deshoulières"},
      {cite: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci"},
      {
        cite: "Quelque délicat que l'on soit en amour, on pardonne plus de fautes que dans l'amitié.",
        author: "Jean de La Bruyère"
      },
      {
        cite: "Le travail, en autres avantages, a celui de raccourcir les journées et d'étendre la vie.",
        author: "Denis Diderot"
      },
      {cite: "Si nous prenons la nature pour guide, nous ne nous égarerons jamais.", author: "Cicéron"},
      {cite: "L'accent circonflexe est l'hirondelle de l'écriture.", author: "Jules Renard"},
      {cite: "L'accent est l'âme du discours, il lui donne le sentiment et la vérité.", author: "Jean-Jacques Rousseau"},
      {
        cite: "La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conquête.",
        author: "Georges Meredith"
      },
      {
        cite: "Jamais les mots ne manquent aux îdées ; ce sont les îdées qui manquent aux mots.",
        author: "Joseph Joubert"
      },
      {cite: "L'âge auquel on partage tout est généralement l'âge où on n'a rien.", author: "Alphonse Karr"},
      {cite: "Une erreur originale vaut mieux qu'une vérité banale.", author: "Fiodor Dostoïevski"},
      {
        cite: "Le veinard est celui qui arrive à tout ; le malchanceux est celui à qui tout arrive.",
        author: "Eugène Labiche"
      },
      {cite: "Il n'y a pas de moyen pour polir le hérisson.", author: "Aristophane"},
      {cite: "L'amour qui naît subitement est le plus long à guérir.", author: "Jean de La Bruyère"},
      {
        cite: "J'aime le lit, c'est le seul endroit où, comme le chat, je puis faire le mort en respirant, tout en étant vivant.",
        author: "Arthur Cravan"
      },
      {
        cite: "Pour l'amour d'une rose, le jardinier devient l'esclave de mille épines.",
        author: "Proverbe turc"
      },
      {
        cite: "Déploie ton jeune courage, enfant ; c'est ainsi qu'on s'élève jusqu'aux astres.",
        author: "Virgile"
      },
      {
        cite: "Nul ne veut le bien public que quand il s'accorde avec le sien.",
        author: "Jean-Jacques Rousseau"
      },
      {
        cite: "On avale à pleine gorgée le mensonge qui nous flatte, et l'on boit goutte à goutte une vérité qui nous est amère.",
        author: "Denis Diderot"
      },
      {
        cite: "Appelons hommes de génie qui font vite ce que nous faisons lentement.",
        author: "Joseph Joubert"
      },
      {
        cite: "Les paroles sages tombent quelquefois dans l'oreille d'un sourd ; mais un mot gentil n'est jamais perdu.",
        author: "Arthur Helps"
      },
      {
        cite: "Je crois beaucoup en la chance, et je constate que plus je travaille, plus elle me sourit.",
        author: "T. Jefferson"
      },
      {
        cite: "L'expérience est un peigne que la nature nous donne une fois que nous sommes chauves.",
        author: "Proverbe belge"
      },
      {cite: "Le rire et le sommeil sont les meilleurs remèdes du monde.", author: "Proverbe irlandais"},
      {
        cite: "L'enfance est un papillon qui se hâte de brûler ses blanches ailes aux flammes de la jeunesse.",
        author: "Aloysius Bertrand"
      },
      {
        cite: "La puissance, c'est imposer sa volonté aux autres. La force, c'est se l'imposer à soi-même.",
        author: "Lao Zi"
      },
      {cite: "Le meilleur secret pour ne jamais tomber c'est de rester toujours assis.", author: "Stendhal"},
      {cite: "Ne juge aucun homme avant d'avoir marché avec ses mocassins durant deux lunes.", author: "Proverbe amérindien"},
      {cite: "Vous ne parviendrez jamais à faire des sages si vous ne faites d'abord des polissons.", author: "Jean-Jacques Rousseau"},
      {
        cite: "Ce qui étonne, étonne une fois, mais ce qui est admirable est de plus en plus admiré.",
        author: "Joseph Joubert"
      },
      {
        cite: "Ce qui est admirable, ce n'est pas que le champ des étoiles soit si vaste, c'est que l'homme l'ait mesuré.",
        author: "Anatole France"
      },
      {
        cite: "Les plus beaux mots du monde ne sont que des sons inutiles si vous ne pouvez pas les comprendre.",
        author: "Anatole France"
      },
      {
        cite: "Si haut que parvienne une chose lancée, c'est à terre qu'elle retourne.",
        author: "Proverbe africain"
      },
      {cite: "Tout âge porte ses fruits, il faut savoir les cueillir.", author: "Raymond Radiguet"},
      {cite: "Nul devoir n'est plus sous-estimé que celui d'être heureux.", author: "R. L. Stevenson"},
      {cite: "Peu de gens ont le courage d'être lâches devant témoins.", author: "Théophile Gautier"},
      {cite: "L'or te donne la terre, la terre te donne de l'or.", author: "Proverbe indien"},
      {cite: "Le regard est le médiateur des coeurs.", author: "Anonyme"},
      {
        cite: "Les petits cadeaux entretiennent l'amitié. Le premier qui a dit dela voulait se faire donner quelque chose.",
        author: "Eugène Scribe"
      },
      {cite: "Les premiers sentiments sont toujours les plus naturels.", author: "Madame de Sévigné"},
      {cite: "Qui ne peut comme il veut, doit vouloir comme il peut.", author: "Térence"},
      {
        cite: "Etre jeune, c'est avoir un esprit qui calcule et un coeur qui ne calcule pas.",
        author: "René Bazin"
      },
      {
        cite: "La séduction suprême n'est pas d'exprimer ses sentiments. C'est de les faire soupçonner.",
        author: "Barbey d'Aurevilly"
      },
      {cite: "L'action ne doit pas être une réaction mais une création.", author: "Censier (droit féodal)"},
      {cite: "On ne devrait s'étonner que de pouvoir encore s'étonner.", author: "François de La Rochefoucauld"},
      {
        cite: "Le coeur n'a pas de maître, il n'est pas un esclave, et de toute contrainte il sait briser l'entrave.",
        author: "Adam Mickiewicz"
      },
      {cite: "Le passé est un phare, et non un port.", author: "Proverbe russe"},
      {cite: "Dans une avalanche, aucun flocon ne se sent jamais responsable.", author: "Voltaire"},
      {
        cite: "A vingt ans, c'est la volonté qui règne, à trente ans l'esprit, et à quarante le jugement.",
        author: "Benjamin Franklin"
      },
      {
        cite: "Ayez le courage de ne pas savoir un grand nombre de choses afin d'éviter la certitude de ne rien savoir.",
        author: "Sydney Smith"
      },
      {
        cite: "Je crois pouvoir dire d'un poste éminent et délicat qu'on y monte plus aisément qu'on ne s'y conserve.",
        author: "Jean de La Bruyère"
      },
      {cite: "Ecrire, c'est déjà mettre du noir sur du blanc.", author: "Stéphane Mallarmé"},
      {cite: "Qu'importe aux coeurs unis ce qui change autour d'eux.", author: "Alphonse de Lamartine"},
      {
        cite: "N'allez pas là où le chemin peut mener. llez là où il n'y a pas de chemin et laissez une trace.",
        author: "Ralph Waldo Emerson"
      },
      {
        cite: "Lorsqu'on tire sur un seul fil de la nature, on découvre qu'il est attaché au reste du monde.",
        author: "John Muir"
      },
      {
        cite: "L'expérience est une lanterne que l'on porte sur le dos et qui n'éclaire jamais que le chemin parcouru.",
        author: "Confucius"
      },
      {
        cite: "Apprends comme si tu devais vivre pour toujours et vis comme si tu devais mourrir ce soir !",
        author: "Proverbe Tibétain"
      },
      {
        cite: "LE grand inconvénient des livres nouveaux est de nous empêcher de lire les anciens.",
        author: "Joseph Joubert"
      },
      {
        cite: "On ne doit pas juger du mérite d'un homme par ses grandes qualités, mais par l'usage qu'il en sait faire.",
        author: "Jean de La Bruyère"
      },
      {cite: "J'ai décidé d'être heureux, c'est meilleur pour la santé.", author: "Voltaire"},
      {cite: "Toute beauté est une joie éternelle.", author: "John Keats"},
      {cite: "Un seul être vous manque et tout est dépeuplé.", author: "Alphonse de Lamartine"},
      {
        cite: "Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.",
        author: "Nicolas Boileau"
      },
      {cite: "Années de cerises rouges met le rire sur les bouches.", author: "Dicton français"},
      {
        cite: "Quelle noblesse d'avoir un ami, mais combien plus noble d'être un ami.",
        author: "Richard Wagner"
      },
      {
        cite: "Pour les femmes, la douceur est le meilleur moyen d'avoir raison.",
        author: "Madame de Maintenon"
      },
      {cite: "La perfection est un chemin, non une fin.", author: "Proverbe coréen"},
      {
        cite: "Quiconque a bu une tasse de chocolat résiste à une journée de voyage.",
        author: "J W von Goethe"
      },
      {
        cite: "Dis-toi d'abord ce que tu veux être, puis fais ce qu'il faut pour le devenir.",
        author: "Epictète"
      },
      {cite: "L'art est une démonstration dont la nature est la preuve.", author: "Georges Sand"},
      {cite: "L'art de l'écrivain consiste surtout à nous faire oublier qu'il emploie des mots.", author: "Henri Bergson"},
      {cite: "Le désordre est simplement l'ordre que nous ne cherchons pas.", author: "Henri Bergson"},
      {
        cite: "Le défaut de l'égalité, c'est que nous ne la voulons qu'avec nos supérieurs.",
        author: "Henri Becquet"
      },
      {cite: "Papillon, ce billet doux plié cherche une adresse de fleur.", author: "Jules Renard"},
      {cite: "Si vous voulez que vos rêves se réalisent, ne dormez pas.", author: "Proverbe juif"},
      {cite: "Si les cieux pleurent, la terre vivra.", author: "Proverbe hawaiien"},
      {
        cite: "Tout ce que tu feras sera dérisoire, mais il est essentiel que tu le fasses.",
        author: "Gandhi"
      },
      {cite: "La rose n'a d'épines que pour celui qui veut la cueillir.", author: "Proverbe chinois"},
      {cite: "Pour savoir où l'on va, il faut savoir où l'on est.", author: "Proverbe tchadien"},
      {cite: "Sans la musique, la vie serait une erreur.", author: "F. Nietzsche"},
      {cite: "Un homme sans culture, tel un chat sans moustaches, se sent perdu.", author: "Anonyme"},
      {
        cite: "La science décrit la nature, la poésie la peint et l'embellit.",
        author: "Georges-Louis Leclerc de Buffon"
      },
      {
        cite: "Une fleur fane même si on l'aime ; une mauvaise herbe croît même si on ne l'aime pas.",
        author: "Dôgen"
      },
      {
        cite: "Quand tu lances la flèche de la vérité, trempe toujours la pointe dans du miel.",
        author: "Proverbe arabe"
      },
      {cite: "L'espérance d'une joie est presque égale à la joie.", author: "William Shakespeare"},
      {
        cite: "Qui donne ne doit jamais s'en souvenir. Qui reçoit ne doit jamais oublier.",
        author: "Proverbe hébreu"
      },
      {
        cite: "Une fois la partie terminée, le roi et le pion retournent dans la même boîte.",
        author: "Proverbe italien"
      },
      {
        cite: "Bien être : état d'esprit produit par la contemplation des ennuis d'autrui.",
        author: "Ambrose Bierce"
      },
      {cite: "Accepter l'îdée d'une défaite, c'est être vaincu.", author: "Maréchal Foch"},
      {
        cite: "Parmi les cinq sens, la vue, l'ouïe et l'odorat connaissent moins d'interdits que le toucher et le goût.",
        author: "Léonard de Vinci"
      },
      {
        cite: "On n'a jamais fait de grande découverte sans hypothèse audacieuse.",
        author: "Léonard de Vinci"
      },
      {
        cite: "L'attention de celui qui écoute sert d'accompagnement dans la musique du discours.",
        author: "Joseph Joubert"
      },
      {
        cite: "L'homme n'a point de port, le temps n'a pas de rive ; Il coule et nous passons !",
        author: "Alphonse Lamartine"
      },
      {cite: "On se sert des couleurs, mais on peint avec le sentiment.", author: "Jean Chardin"},
      {
        cite: "Nous pesons rarement dans la même balance des offenses que nous faisons et les offenses que l'on nous fait.",
        author: "Esope"},
      {
        cite: "Il faut toujours se réserver le droit de rire le lendemain de ses îdées de la veille.",
        author: "Napoléon Bonaparte"
      },
      {
        cite: "Le cri du sentiment est toujours absurde ; mais il est sublime parce qu'il est absurde.",
        author: "Charles Baudelaire"
      },
      {
        cite: "Lorsque les hommes travaillent ensemble, les montagnes se changent en or.",
        author: "Proverbe chinois"
      },
      {
        cite: "Sourire trois fois par tous les jours rend inutile tout médicament.",
        author: "Proverbe chinois"
      },
      {cite: "C'est par l'adresse que vaut le bûcheron, bien plus que par la force.", author: "Homère"},
      {
        cite: "Nous tissons notre destin, nous le tirons de nous comme l'araignée de la toile.",
        author: "François Mauriac"
      },
      {cite: "La musique commence là où s'arrête le pouvoir des mots.", author: "Richard Wagner"},
      {cite: "La joie n'est pas dans les choses, elle est en nous.", author: "Richard Wagner"},
      {
        cite: "Toute ascension vers un endroit merveilleux se fait par un escalier en spirale.",
        author: "François Bacon"
      },
      {cite: "La nature fait les hommes semblables, la vie les rend différents.", author: "Confucius"},
      {cite: "Une heure de conversation vaut mieux que cinquante lettres.", author: "Madame de Sévigné"},
      {
        cite: "Ce qui est haïssable, ne le fait pas à ton prochain ; c'est là toute la loi. Le reste n'est que commentaire.",
        author: "R. Hillel"
      },
      {
        cite: "Je ne te dis pas que tu es un bon à rien, je te dis que tu es mauvais en tout !",
        author: "Le schpountz"
      },
      {cite: "Trouver n'est rien, c'est le plan qui est difficile.", author: "Fiodor Dostoïevski"},
      {cite: "La modestie est le meilleur appât pour aller à la pêche aux compliments.", author: "Gilbert Keith Chersterton"},
      {
        cite: "Une civilisation me parait se définir à la fois pas des questions qu'elle pose et par celles qu'elle ne pose pas.",
        author: "André Malraux"
      },
      {
        cite: "Si vous voulez que la vie vous sourie, apportez-lui d'abord votre bonne humeur.",
        author: "Spinoza"
      },
      {
        cite: "Tant de mains pour transformer ce monde, et si peu de regards pour le contempler !",
        author: "Julien Gracq"
      },
      {
        cite: "Trois bougies repoussent les ténèbres ; la vérité, la connaissance et les lois de la nature.",
        author: "Proverbe celtique"
      },
      {
        cite: "Une fleur fane même si on l'aime ; une mauvaise herbe croit même si on ne l'aime pas.",
        author: "Dögen"
      },
      {cite: "Lire, c'est voyager ; voyager, c'est lire.", author: "Victor Hugo"},
      {cite: "Un roman, c'est un miroir qu'on promène le long du chemin.", author: "Stendhal"},
      {cite: "Il n'est pas de plus lourd fardeau que d'avoir trop de désirs.", author: "Lao Zi"},
      {
        cite: "Le plaisir de l'habitude est souvent plus doux encore que celui de la nouveauté.",
        author: "Marcel Proust"
      },
      {cite: "La nuit n'est peut-être que la paupière du jour.", author: "Omar Khayyâm"},
      {
        cite: "Le parfait bonheur ne consiste qu'à rendre les hommes heureux.",
        author: "Jean-Baptiste Rousseau"
      },
      {cite: "Le soir de la vie apporte avec soi sa lampe.", author: "Joseph Joubert"},
      {
        cite: "Ne fais rien dans ta vie, qui te fasse redouter que ton voisin en prenne connaissance.",
        author: "Epicure"
      },
      {
        cite: "Qu'on me donne six heures pour couper un arbre, j'en passerai quatre à préparer ma hache.",
        author: "Abraham Lincoln"
      },
      {
        cite: "Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever chaque fois.",
        author: "Confucius"
      },
      {
        cite: "Les conséquences de la colère sont beaucoup plus graves que les causes.",
        author: "Marc Aurèle"
      },
      {
        cite: "Chaque coup de colère est un coup de vieux, chaque sourire est un coup de jeune.",
        author: "Proverbe chinois"
      },
      {
        cite: "Aliments. La découverte d'un mets nouveau fait plus pour le bonheur du genre humain que la découverte d'une étoile.",
        author: "Brillat-Savarin"
      },
      {cite: "La science est le savoir organisé. La sagesse est la vie organisée.", author: "Emmanuel Kant"},
    ];

    _.each(cites, (item) => {
      if (Citations.findOne({cite: item.cite})) {
        console.log(`double: ${item.cite}, ${item.author}`);
        return;
      }

      Citations.insert(item);
    });

    console.info(`${cites.length} citations inserted at ${new Date()}`);
  }
});