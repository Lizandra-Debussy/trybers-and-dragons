import { EnergyType } from '../Energy';

import Archetype from './Archetype';

class Necromancer extends Archetype {
  energy: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Necromancer;