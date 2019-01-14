exports.characteristics = {

  ac: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        armor: 0,
        shield: 0,
        dex: 0,
        size: 0,
        deflect: 0,
        dodge: 0,
        natural: 0,
        misc: 0,
        touch: 0,
        flatFooted: 0,
      },
    },
  combat: {
    bab: { type: Number, default: 0 },
    melee: {
      type: Map,
      of: Number,
      default: {
        attack: 0,
        stat: 0,
        size: 0,
        misc: 0,
      },
    },
    ranged: {
      type: Map,
      of: Number,
      default: {
        attack: 0,
        stat: 0,
        size: 0,
        misc: 0,
      },
    },

  },
  hp: {
    type: Map,
    of: Number,
    default: {
      max: 0,
      wounds: 0,
      temp: 0,
      nonLethal: 0,
    },
  },
  initiative: {
    type: Map,
    of: Number,
    default: {
      total: 0,
      dex: 0,
      misc: 0,
    },
  },
  classLevel: {
    totalLevel: { type: Number, default: 1},
    class: {
      type: Map,
      of: Number,
      default: {
        fighter: 1,
      },
    },
  },
  maneuvers: {
    cmb: {
      type: Map,
      of: Number,
      default: {
        total: 0,
        stat: 0,
        bab: 0,
        size: 0,
        misc: 0,
        temp: 0,
      },
    },
    cmd: {
      type: Map,
      of: Number,
      default: {
        total: 0,
        stat: 0,
        bab: 0,
        size: 0,
        misc: 0,
        temp: 0,
      },
    },
  },
  saves: {
    fort: {
      type: Map,
      of: Number,
      default: {
        total: 0,
        stat: 0,
        base: 0,
        magic: 0,
        misc: 0,
        temp: 0,
      },
    },
    ref: {
      type: Map,
      of: Number,
      default: {
        total: 0,
        stat: 0,
        base: 0,
        magic: 0,
        misc: 0,
        temp: 0,
      },
    },
    will: {
      type: Map,
      of: Number,
      default: {
        total: 0,
        stat: 0,
        base: 0,
        magic: 0,
        misc: 0,
        temp: 0,
      },
    },
  },
  size: {
    category: { type: String, default: 'Medium' },
    modifier: { type: Number, default: 0 }
  },
  speed: {
    type: Map,
    of: Number,
    default: {
      land: 0,
      fly: 0,
      swim: 0,
      climb: 0,
      burrow: 0,
      misc: 0,
      temp: 0,
    },
  },
  stats: {
    str: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        modifier: 0,
        base: 0,
        misc: 0,
        temp: 0,
      },
    },
    dex: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        modifier: 0,
        base: 0,
        misc: 0,
        temp: 0,
      },
    },
    con: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        modifier: 0,
        base: 0,
        misc: 0,
        temp: 0,
      },
    },
    int: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        modifier: 0,
        base: 0,
        misc: 0,
        temp: 0,
      },
    },
    wis: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        modifier: 0,
        base: 0,
        misc: 0,
        temp: 0,
      },
    },
    cha: {
      type: Map,
      of: Number,
      default: {
        total: 10,
        modifier: 0,
        base: 0,
        misc: 0,
        temp: 0,
      },
    },
  },
  
  age: { type: Number, default: 10 },
  alignment: { type: String, default: '' },
  campaign: { type: String, default: '' },
  characterName: { type: String, default: '' },
  concentration: { type: Number, default: 10 },
  diety: { type: String, default: '' },
  dr: { type: Number, default: 10 },
  eyes: { type: String, default: '' },
  gender: { type: String, default: '' },
  hair: { type: String, default: '' },
  height: { type: String, default: '' },
  homeland: { type: String, default: '' },
  playerName: { type: String, default: 'Dave' },
  race: { type: String, default: '' },
  ruleset: { type: String, default: '' },
  sr: { type: Number, default: 10 },
  weight: { type: Number, default: 10 },

  }