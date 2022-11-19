import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energy: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Mage;