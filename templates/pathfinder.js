exports.characteristics = {
    ac: {
      total: 'Number',
      armor: 'Number',
      shield: 'Number',
      dex: 'Number',
      size: 'Number',
      deflect: 'Number',
      dodge: 'Number',
      natural: 'Number',
      misc: 'Number',
      touch: 'Number',
      flatFooted: 'Number'
    },
    age: 'Number',
    alignment: 'String',
    campaign: 'String',
    characterName: 'String',
    'class': 'String',
    combat: {
      bab: 'Number',
      melee: {
        attack1: 'Number',
        attack2: 'Number',
        attack3: 'Number',
        attack4: 'Number',
        stat: 'Number',
        size: 'Number',
        misc: 'Number'
      },
      ranged: {
        attack1: 'Number',
        attack2: 'Number',
        attack3: 'Number',
        attack4: 'Number',
        stat: 'Number',
        size: 'Number',
        misc: 'Number'
      }
    },
    concentration: 'Number',
    diety: 'String',
    dr: 'Number',
    eyes: 'String',
    gender: 'String',
    hair: 'String',
    height: 'String',
    homeland: 'String',
    hp: {
      max: 'Number',
      wounds: 'Number',
      temp: 'Number',
      nonLethal: 'Number'
    },
    initiative: {
      total: 'Number',
      dex: 'Number',
      misc: 'Number'
    },
    level: 'Number',
    maneuvers: {
      cmb: {
        total: 'Number',
        stat: 'Number',
        bab: 'Number',
        misc: 'Number',
        size: 'Number',
        temp: 'Number'
      },
      cmd: {
        total: 'Number',
        stat: 'Number',
        bab: 'Number',
        misc: 'Number',
        size: 'Number',
        temp: 'Number'
      }
    },
    misc: {
      name: [
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String'
      ],
      value: [
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String',
        'String'
      ]
    },
    money: {
      name: [
        'String',
        'String',
        'String',
        'String',
        'String',
        'String'
      ],
      value: [
        'String',
        'String',
        'String',
        'String',
        'String',
        'String'
      ]
    },
    playerName: 'String',
    race: 'String',
    ruleset: 'String',
    saves: {
      fort: {
        total: 'Number',
        stat: 'Number',
        base: 'Number',
        magic: 'Number',
        misc: 'Number',
        temp: 'Number'
      },
      ref: {
        total: 'Number',
        stat: 'Number',
        base: 'Number',
        magic: 'Number',
        misc: 'Number',
        temp: 'Number'
      },
      will: {
        total: 'Number',
        magic: 'Number',
        stat: 'Number',
        base: 'Number',
        misc: 'Number',
        temp: 'Number'
      }
    },
    size: {
      category: 'String',
      modifier: 'Number'
    },
    speed: {
      total: 'Number',
      land: 'Number',
      misc: 'Number',
      fly: 'Number',
      flyManeuverability: 'String',
      swim: 'Number',
      climb: 'Number',
      burrow: 'Number'
    },
    sr: 'Number',
    stats: {
      str: {
        total: 'Number',
        modifier: 'Number',
        base: 'Number',
        misc: 'Number'
      },
      dex: {
        total: 'Number',
        modifier: 'Number',
        base: 'Number',
        misc: 'Number'
      },
      con: {
        total: 'Number',
        modifier: 'Number',
        base: 'Number',
        misc: 'Number'
      },
      'int': {
        total: 'Number',
        modifier: 'Number',
        base: 'Number',
        misc: 'Number'
      },
      wis: {
        total: 'Number',
        modifier: 'Number',
        base: 'Number',
        misc: 'Number'
      },
      cha: {
        total: 'Number',
        modifier: 'Number',
        base: 'Number',
        misc: 'Number'
      }
    },
    weight: 'Number'
  }