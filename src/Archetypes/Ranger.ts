import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energy: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Ranger;