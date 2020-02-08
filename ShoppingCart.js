class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }

  addItem(itemName, quantity, price) {
    this.total += quantity * price;
    this.items[itemName] = quantity;
  }

  removeItem(itemName, quantity, price) {
    this.total -= quantity * price;
    this.items[itemName] = this.items[itemName] - quantity;
  }

  checkout(cashPaid) {
    if (cashPaid < this.total) {
      return "Cash paid not enough";
    }
    return cashPaid - this.total;
  }
}
class Shop extends ShoppingCart {
  constructor() {
    super();
    this.quantity = 100;
  }
  removeItem() {
    --this.quantity;
  }
}