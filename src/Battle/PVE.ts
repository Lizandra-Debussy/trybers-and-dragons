import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _enemies: SimpleFighter[];

  constructor(protected player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._enemies = enemies;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (enemy.lifePoints !== -1 && this.player.lifePoints !== -1) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });

    return super.fight();
  }
}

export default PVE;