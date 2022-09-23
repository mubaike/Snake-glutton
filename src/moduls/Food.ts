//定义食物类
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物 X 轴坐标
    get X () {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物 Y 轴坐标
    get Y () {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change () {
        //生成一个随机的位置
        //食物的位置最小是0 最大是290
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

//测试代码
// const food = new Food();
// food.change();

export default Food;