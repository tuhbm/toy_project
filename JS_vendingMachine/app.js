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
        name:'콜라',
        price: '700',
        quantity: 20,
        temperature:'cold'
    },
    {
        name:'사이다',
        price: '500',
        quantity: 20,
        temperature:'cold'
    },
]
class VendingMachine {
    constructor() {
        this.power = false;
        this.drinks = [];
        this.moneyCase = 0;
        this.profitCase = 0; //음료수를 판 금액
    }
    applayDrinks(name, quantity, temper) {
        let index = 0;
        let len = this.drinks.length;
        for (index;index <= len;i++){
            if (name !== this.drinks.name) {
                return `선택하신 음료가 없습니다.`
            }
            return this.drinks.quantity += quantity;
        }
    }
    newDrinkAdd(name, price, quantity) {
        if(temper !== 'cold' && temper !== 'hot'){
            return;
        }
        return this.drinks.push(
            `name:${name},price: ${price},quantity:${quantity}`
        )
    }
    giveMoney(money) {
        return this.moneyCase = money;
    }
    getDrink(drink) {
        let index = 0;
        let name = drink.toString();
        while(index <= this.drinks.length){
            if(this.drinks[index].name === name){
                this.moneyCase -= this.drinks[index].price;
                this.profitCase += this.drinks[index].price;
                this.drinks.quantity -= 1;
                return `음료수 ${this.drinks.name}이 나왔습니다. |n 잔액이 ${this.drinks.moneyCase}원 남았습니다.`
            }
            index++
        }
    }
    getChange() {
        const changeMoney = this.moneyCase;
        if(!changeMoney) {
            return `반환될 잔액이 없습니다.`;
        }
        this.moneyCase = 0;
        return `잔액 ${changeMoney}원이 반환 되었습니다.`;
    }
    turnPower() {
        return !this.power;
    }
}

class HotOrColdVendingMachine extends VendingMachine {
    constructor() {
        super();
    }
}

