abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(instances: number) {
    if (!instances) throw new Error('Not implemented');
    return instances;
  }

  // maxLife: number
  abstract get maxLifePoints(): number;
}

export default Race;