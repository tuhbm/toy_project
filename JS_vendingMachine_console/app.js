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

//기본 자판기 클래스 구성
class VendingMachine {
  constructor() {
    this.power = false;
    this.drinks = [];
    this.moneyCase = 0;
    this.profitCase = 0; //음료수를 판 금액
  }

  turnPower() {
    this.power = !this.power;
    let powerState = this.power ? '켜져' : '꺼져';
    return `전원이 ${powerState}있습니다.`
  }

  checkPower() {
    if (!this.power) {
      throw '전원이 꺼져있습니다.'
    }
  }

  applyDrinks(name, quantity) {
    this.checkPower();
    for (let index = 0, len = this.drinks.length; index <= len; index++) {
      if (name !== this.drinks[index].name) {
        throw '선택하신 음료가 없습니다.';
      }
      this.drinks[index].quantity += quantity;
    }
    return `음료수 ${name}을 ${quantity}개 추가하여 총 ${this.drinks.quantity}개 있습니다.`
  }

  newDrinkAdd(name, price, quantity) {
    this.checkPower();
    this.drinks.push({
      name: name,
      price: price,
      quantity: quantity
    });
    return `새로운 종류의 음료수 ${name}을 가격${price}의 판매가격으로 ${quantity}개 추가등록하였습니다.`
  }

  giveMoney(money) {
    this.checkPower();
    this.moneyCase = money;
    return `자판기에 ${money}를 넣어, 총 ${this.moneyCase}를 넣으셨습니다.`
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

  showSellingMoney() {
    this.checkPower();
    return `현재 총 판매금액은 ${this.profitCase}원 입니다.`
  }
}


const v = new VendingMachine();
v.turnPower(); //전원켜짐
v.newDrinkAdd('콜라', 700, 50); // 음료수 목록에 콜라가 700원에 50개가 들어감
v.newDrinkAdd('사이다', 600, 50);

/**
 HotOrColdVendingMachine 데이터 형태 예제
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
   }
 ]
 */
class HotOrColdVendingMachine extends VendingMachine {
  constructor() {
    super();
  }
  applyDrinks(name, temp, quantity) {
    this.checkPower();
    for (let index = 0, len = this.drinks.length; index <= len; index++) {
      if (name !== this.drinks[index].name && temp !== this.drinks[index].temp) {
        throw '선택하신 음료가 없습니다.';
      }
      this.drinks[index].quantity += quantity;
    }
    return `${temp} 음료수 ${name}을 ${quantity}개 추가하여 총 ${this.drinks.quantity}개 있습니다.`
  }

  newDrinkAdd(name, price, temp, quantity) {
    this.checkPower();
    this.drinks.push({
      name: name,
      price: price,
      quantity: quantity,
      temp: temp
    });
    return `새로운 종류의 ${temp} 음료수 ${name}을 가격${price}의 판매가격으로 ${quantity}개 추가등록하였습니다.`
  }

  getDrink(drink, temp) {
    this.checkPower();
    let index = 0;
    while (index <= this.drinks.length) {
      if (this.moneyCase <= this.drinks[index].price) throw '잔액이 부족하거나 없습니다.';
      if (this.drinks[index].name === drink && this.drinks[index].temp === temp) {
        this.moneyCase -= this.drinks[index].price;
        this.profitCase += this.drinks[index].price;
        this.drinks[index].quantity -= 1;
        return `음료수 ${this.drinks[index].name}가 나왔습니다.
                잔액이 ${this.moneyCase}원 남았습니다.`
      }
      index++
    }
  }
}

const v2 = new HotOrColdVendingMachine();
v2.turnPower();
v2.newDrinkAdd('콜라', 700, '차가운', 50); // 음료수 목록에 콜라가 700원에 50개가 들어감
v2.newDrinkAdd('맥심', 600, '따듯한', 50);
v2.newDrinkAdd('사이다', 500,'차가운', 50);


