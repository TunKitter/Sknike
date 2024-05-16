class GameData {
  static init() {
    if (!localStorage.getItem('c')) {
      localStorage.setItem('c', 0);
    }
    if (!localStorage.getItem('i')) {
      localStorage.setItem('i', '');
    }
  }
  static getCoin() {
    return parseInt(localStorage.getItem('c')) || 0;
  }
  static setCoin(coin) {
    localStorage.setItem('c', coin);
  }
  static increaseCoin(coin) {
    this.setCoin(this.getCoin() + coin);
  }
  static decreaseCoin(coin) {
    this.setCoin(this.getCoin() - coin);
  }
  static getItems() {
    return localStorage.getItem('i');
  }
  static setItem(item) {
    if (localStorage.getItem('i') == '' || localStorage.getItem('i') == null) {
      localStorage.setItem('i', item);
    } else localStorage.setItem('i', localStorage.getItem('i') + ',' + item);
  }
  static isItemExist(key) {
    return this.getItems().indexOf(key) > -1;
  }
}
