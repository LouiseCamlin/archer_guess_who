import Character from './Character.js'

const CharacterSeeds = function() {
  const Characters = [
    new Character({
      name: "Archer",
      gender: "male",
      eyes: "blue",
      hairColour: "black",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/archer_sterling_5461.jpg"
    }),

    new Character({
      name: "Lana",
      gender: "female",
      eyes: "green",
      hairColour: "brown",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/kane_lana_968.jpg"
    }),

    new Character({
      name: "Cyril",
      gender: "male",
      eyes: "brown",
      hairColour: "black",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/figgis_cyril_8946.jpg"
    }),

    new Character({
      name: "Malory",
      gender: "female",
      eyes: "blue",
      hairColour: "grey",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/archer_malory_190.jpg"
    }),

    new Character({
      name: "Krieger",
      gender: "male",
      eyes: "green",
      hairColour: "brown",
      moustache: "yes",
      url: "http://static.tvtropes.org/pmwiki/pub/images/krieger_algernop_2820.jpg"
    }),

    new Character({
      name: "Pam",
      gender: "female",
      eyes: "blue",
      hairColour: "blonde",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/pameladolphin_949.jpg"
    }),

    new Character({
      name: "Cheryl",
      gender: "female",
      eyes: "blue",
      hairColour: "brown",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/tunt_cherylcarol_3853.jpg"
    }),

    new Character({
      name: "Ray",
      gender: "male",
      eyes: "brown",
      hairColour: "blonde",
      moustache: "yes",
      url: "/public/images/ray-background3.jpg"
    }),

    new Character({
      name: "Woodhouse",
      gender: "male",
      eyes: "blue",
      hairColour: "grey",
      moustache: "no",
      url: "http://static.tvtropes.org/pmwiki/pub/images/woodhouse__7670.jpg"
    })

  ]

  return Characters
}

export default CharacterSeeds
