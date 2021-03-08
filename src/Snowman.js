class Snowman {
  constructor(obj) {
    obj = obj || {};
    this.carrots = obj.carrots;
    this.coal = obj.coal;
    this.buttons = obj.buttons;
    this.snowballs = obj.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    this.magicHat = true;
  }
}

module.exports = Snowman;
