/** vending machine
 필요기능
 - 전원 ON, OFF
 - 음료 체크
 * 음료수 종류
 * 음료수 수량
 * 음료수 가격
 - 금액 표시
 * 투입금액
 * 음료 선택 후 남은 금액
 * 반환(거스름돈) 될 금액
 - 금액 투입
 - 음료 선택
 - 거스름돈 반환
 - 음료수 채우기
 */
const drinks = [
  {
    name: '콜라',
    price: '700',
    quantity: 20,
    temperature: 'cold'
  },
  {
    name: '사이다',
    price: '500',
    quantity: 20,
    temperature: 'cold'
  },
]

class VendingMachine {
  constructor() {
    this.power = false;
    this.drinks = [];
    this.moneyCase = 0;
    this.profitCase = 0; //음료수를 판 금액
  }

  turnPower() {
    return this.power = !this.power;
  }

  checkPower() {
    if (!this.power) {
      throw '전원이 꺼져있어'
    }
  }

  applyDrinks(name, quantity, temper) {
    this.checkPower();
    let index = 0;
    let len = this.drinks.length;
    for (index; index <= len; i++) {
      if (name !== this.drinks.name) {
        throw '선택하신 음료가 없습니다.';

      }
      return this.drinks.quantity += quantity;
    }
  }

  newDrinkAdd(name, price, quantity) {
    this.checkPower();
    return this.drinks.push({
      name: name,
      price: price,
      quantity: quantity
    });
  }

  giveMoney(money) {
    this.checkPower();
    return this.moneyCase = money;
  }

  getDrink(drink) {
    this.checkPower();
    let index = 0;
    while (index <= this.drinks.length) {
      if (this.moneyCase <= this.drinks[index].price) throw '잔액이 부족하거나 없습니다.';
      if (this.drinks[index].name === drink) {
        this.moneyCase -= this.drinks[index].price;
        this.profitCase += this.drinks[index].price;
        this.drinks[index].quantity -= 1;
        return `음료수 ${this.drinks[index].name}가 나왔습니다.
                잔액이 ${this.moneyCase}원 남았습니다.`
      }
      index++
    }
  }

  getChange() {
    this.checkPower();
    const changeMoney = this.moneyCase;
    if (!changeMoney) {
      return `반환될 잔액이 없습니다.`;
    }
    this.moneyCase = 0;
    return `잔액 ${changeMoney}원이 반환 되었습니다.`;
  }
};


const v = new VendingMachine();
v.turnPower() //전원켜짐
v.newDrinkAdd('콜라', 700, 50) // 음료수 목록에 콜라가 700원에 50개가 들어감


class HotOrColdVendingMachine extends VendingMachine {
  constructor() {
    super();
  }
}

