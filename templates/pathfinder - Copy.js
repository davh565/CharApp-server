exports.characteristics = {
    ac: {
      total: { type: Number, default: 10 },
      armor: { type: Number, default: 10 },
      shield: { type: Number, default: 10 },
      dex: { type: Number, default: 10 },
      size: { type: Number, default: 10 },
      deflect: { type: Number, default: 10 },
      dodge: { type: Number, default: 10 },
      natural: { type: Number, default: 10 },
      misc: { type: Number, default: 10 },
      touch: { type: Number, default: 10 },
      flatFooted: { type: Number, default: 10 }
    },
    age: { type: Number, default: 10 },
    alignment: { type: String, default: 'string' },
    campaign: { type: String, default: 'string' },
    characterName: { type: String, default: 'string' },
    'class': { type: String, default: 'string' },
    combat: {
      bab: { type: Number, default: 10 },
      melee: {
        attack1: { type: Number, default: 10 },
        attack2: { type: Number, default: 10 },
        attack3: { type: Number, default: 10 },
        attack4: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        size: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      },
      ranged: {
        attack1: { type: Number, default: 10 },
        attack2: { type: Number, default: 10 },
        attack3: { type: Number, default: 10 },
        attack4: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        size: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      }
    },
    concentration: { type: Number, default: 10 },
    diety: { type: String, default: 'string' },
    dr: { type: Number, default: 10 },
    eyes: { type: String, default: 'string' },
    gender: { type: String, default: 'string' },
    hair: { type: String, default: 'string' },
    height: { type: String, default: 'string' },
    homeland: { type: String, default: 'string' },
    hp: {
      max: { type: Number, default: 10 },
      wounds: { type: Number, default: 10 },
      temp: { type: Number, default: 10 },
      nonLethal: { type: Number, default: 10 }
    },
    initiative: {
      total: { type: Number, default: 10 },
      dex: { type: Number, default: 10 },
      misc: { type: Number, default: 10 }
    },
    level: { type: Number, default: 10 },
    maneuvers: {
      cmb: {
        total: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        bab: { type: Number, default: 10 },
        misc: { type: Number, default: 10 },
        size: { type: Number, default: 10 },
        temp: { type: Number, default: 10 }
      },
      cmd: {
        total: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        bab: { type: Number, default: 10 },
        misc: { type: Number, default: 10 },
        size: { type: Number, default: 10 },
        temp: { type: Number, default: 10 }
      }
    },
    misc: {
      name: [
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' }
      ],
      value: [
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' }
      ]
    },
    money: {
      name: [
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' }
      ],
      value: [
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' },
        { type: String, default: 'string' }
      ]
    },
    playerName: { type: String, default: 'string' },
    race: { type: String, default: 'string' },
    ruleset: { type: String, default: 'string' },
    saves: {
      fort: {
        total: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        magic: { type: Number, default: 10 },
        misc: { type: Number, default: 10 },
        temp: { type: Number, default: 10 }
      },
      ref: {
        total: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        magic: { type: Number, default: 10 },
        misc: { type: Number, default: 10 },
        temp: { type: Number, default: 10 }
      },
      will: {
        total: { type: Number, default: 10 },
        magic: { type: Number, default: 10 },
        stat: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 },
        temp: { type: Number, default: 10 }
      }
    },
    size: {
      category: { type: String, default: 'string' },
      modifier: { type: Number, default: 10 }
    },
    speed: {
      total: { type: Number, default: 10 },
      land: { type: Number, default: 10 },
      misc: { type: Number, default: 10 },
      fly: { type: Number, default: 10 },
      flyManeuverability: { type: String, default: 'string' },
      swim: { type: Number, default: 10 },
      climb: { type: Number, default: 10 },
      burrow: { type: Number, default: 10 }
    },
    sr: { type: Number, default: 10 },
    stats: {
      str: {
        total: { type: Number, default: 10 },
        modifier: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      },
      dex: {
        total: { type: Number, default: 10 },
        modifier: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      },
      con: {
        total: { type: Number, default: 10 },
        modifier: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      },
      'int': {
        total: { type: Number, default: 10 },
        modifier: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      },
      wis: {
        total: { type: Number, default: 10 },
        modifier: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      },
      cha: {
        total: { type: Number, default: 10 },
        modifier: { type: Number, default: 10 },
        base: { type: Number, default: 10 },
        misc: { type: Number, default: 10 }
      }
    },
    weight: { type: Number, default: 10 }
  }