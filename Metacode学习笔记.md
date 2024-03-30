## Metacode学习笔记

#### 1.a标签target属性

![image-20240323171155374](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240323171155374.png)

#### 2.当一个元素有很多类名时

![image-20240324161009472](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240324161009472.png)

#### 3.100%和auto的区别

##### width：100%

100%表示子元素的宽度和父元素的宽度相等，其中并不包括子元素内外边距以及边框的值，为子元素真正的宽度



##### width：auto

auto表示子元素的 宽度+内边距+外边距+边框 才等于父元素的宽度

![image-20240326190432297](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240326190432297.png)

##### height：auto

默认情况下，浏览器会计算出实际的高度并填充

##### height：100%

基于包含它的块级对象的百分比高度

#### 4.min-width和max-width

##### max-width：防止`width`属性使用的值超过`max-width`的指定值

常见且简单的用例是将其与图像一起使用

图像比它的父元素大：通过使用`max-width: 100%`，图像的宽度不会超过其父图像的宽度。

#### 5.flex: 1

`flex: 1`就是 `flex: 1 1 任意数字+任意长度单位`的简写

- 第一个参数表示: **flex-grow 定义项目的放大比例 (默认为0，即如果存在剩余空间，也不放大)**
- 第二个参数表示: **flex-shrink 定义了项目的缩小比例 (默认为1，即如果空间不足，该项目将缩小)**
- 第三个参数表示: **flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间 (默认值为 auto, 即项目本身的大小)**

































## JS部分

![image-20240327081107835](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327081107835.png)

![image-20240327083454082](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327083454082.png)

![image-20240327083511358](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327083511358.png)

![image-20240327084330604](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327084330604.png)

![image-20240327084618877](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327084618877.png)

![image-20240327090309935](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327090309935.png)

![image-20240327090834174](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327090834174.png)

![image-20240327091349334](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327091349334.png)

![image-20240327093814661](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327093814661.png)

for循环先执行完所有语句，再执行更新表达式

![image-20240327095919860](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327095919860.png)

![image-20240327095959399](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327095959399.png)

![image-20240327213423407](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327213423407.png)

换行要用<br>

![image-20240327214522681](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327214522681.png)

![image-20240327215327499](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327215327499.png)

![image-20240327215443457](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327215443457.png)

![image-20240327215453999](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327215453999.png)

![image-20240327220140200](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327220140200.png)

![image-20240327231029565](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327231029565.png)

![image-20240327231246892](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327231246892.png)

![image-20240327231339728](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327231339728.png)

这样str变成了属性名，不是address=“花果山”，是str=“花果山”

![image-20240327231904384](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327231904384.png)

![image-20240327231936863](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327231936863.png)

![image-20240327232503554](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327232503554.png)



![image-20240327232421108](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327232421108.png)

里面也可以直接套对象

![image-20240327232615195](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327232615195.png)



![image-20240327233121728](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327233121728.png)

![image-20240327233039322](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327233039322.png)

![image-20240327233227879](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327233227879.png)

![image-20240327233304432](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240327233304432.png)

![image-20240328093335114](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328093335114.png)

![image-20240328093930180](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328093930180.png)

![image-20240328094216332](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328094216332.png)

![image-20240328094227156](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328094227156.png)

![image-20240328094302376](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328094302376.png)

![image-20240328094946486](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328094946486.png)

![image-20240328094959952](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328094959952.png)

![image-20240328095016731](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328095016731.png)

用const修饰，对象只能设置一次

函数也是一个对象

![image-20240328100128107](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328100128107.png)



![image-20240328100647665](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328100647665.png)



![image-20240328100536813](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328100536813.png)

![image-20240328101913304](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328101913304.png)

![image-20240328102519149](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328102519149.png)

![image-20240328102816907](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328102816907.png)

![image-20240328103101271](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328103101271.png)

```
function fn(a) {
	console.log("a=",a)
	console.log(a.name)
}
let obj={name:"孙悟空"}
fn(obj)
```

![image-20240328103709178](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328103709178.png)

![image-20240328103739712](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328103739712.png)

![image-20240328104058964](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328104058964.png)

但是如果是这样：

![image-20240328104115551](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328104115551.png)

![image-20240328104139510](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328104139510.png)

![image-20240328104154742](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328104154742.png)

```
function fn(a) {
	a()          //相当于执行fn2函数
}
let obj={name:"孙悟空"}
function fn2(){
	console.log("我是fn2")
}
fn(fn2)
```

![image-20240328105246666](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328105246666.png)

当只有一个语句时

![image-20240328110318130](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328110318130.png)

![image-20240328110329540](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328110329540.png)

![image-20240328110600122](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328110600122.png)

![image-20240328110607612](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328110607612.png)

![image-20240328111212036](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328111212036.png)

![image-20240328111405361](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328111405361.png)

![image-20240328134939397](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328134939397.png)

函数里面的块同理

对象里面也可以放函数

![image-20240328140411432](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328140411432.png)

![image-20240328140440983](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328140440983.png)

调用这个函数：

![image-20240328140539613](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328140539613.png)

![image-20240328141215603](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328141215603.png)

![image-20240328140836971](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328140836971.png)

![image-20240328141226282](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328141226282.png)

![image-20240328141240793](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328141240793.png)

![image-20240328141548186](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328141548186.png)

fn( )相当于windoe.fn( )

![image-20240328141715463](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328141715463.png)

这样一样会报错

![image-20240328141914793](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328141914793.png)

![image-20240328194841846](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328194841846.png)

只是会被声明，并没有提前赋值

![image-20240328195310469](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328195310469.png)

![image-20240328195425555](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328195425555.png)

```
var a=1
function fn(){
	a=2     //只是给a赋值，a还是全局的a
	console.log(a)     //2
}
fn()
console.log(a)       //2
```

```
var a=1
function fn(){
	console.log(a)     //undefined
	var a=2     //在函数里写var也会先提升，提升到最前面
	console.log(a)     //2
}
fn()
console.log(a)     //1  函数里的a和外面的a没有一点关系
```

```
var a=1
function fn(a){      //定义了形参就相当于在函数中声明了对应的变量，但是没有赋值
	console.log(a)     //undefined
	a=2    //这里是给形参这个a赋值为2
	console.log(a)     //2
}
fn()
console.log(a)    //1
```

```
var a=1
function fn(a){      
	console.log(a)     //10
	a=2    //这里是给形参这个a赋值为2
	console.log(a)     //2
}
fn(10)
console.log(a)    //1
```

```
var a=1
function fn(a){      
	console.log(a)     //1这是把1赋值给局部变量的a
	a=2    //这里是给形参这个a赋值为2
	console.log(a)     //2
}
fn(a)
console.log(a)    //1
```

![image-20240328204000638](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328204000638.png)

之间要用分号隔开

![image-20240328204210006](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328204210006.png)

![image-20240328205314255](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328205314255.png)

```
function fn(){
	console.log(this===window)    //true
}
```

```
function fn(){
	console.log(this)
}
const obj={name:"孙悟空"}
obj.test=fn
fn()   //跟obj.test()一样的效果
```

![image-20240328205713224](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328205713224.png)

```
function fn(){
	console.log(this)
}
const obj2={name:"猪八戒",test:fn}
obj2.test()  
```

![image-20240328230244508](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240328230244508.png)

![image-20240329112405409](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329112405409.png)

```
const obj={
	name:"沙和尚",
	sayHello:function(){    //可以省略为sayHello()
		console.log(this.name)   //相当于打印obj.name
	},
}
obj.sayHello()
```

![image-20240329112645682](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329112645682.png)

![image-20240329113032746](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329113032746.png)

箭头函数的this和它的调用形式无关

```
const obj={
	name:"孙悟空",
	fn,   //想要属性名和变量名一样，添加这个属性到对象里就可以直接写名字，相当于fn:fn
	fn2,
	sayHello(){
		const t2=()=>{
			console.log(this)
		}
		t2()     //由外层的sayHello决定，而sayHello的this是obj,所以这一行会打印obj的内容
	}
}
```

![image-20240329113945704](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329113945704.png)

![image-20240329121255041](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329121255041.png)

![image-20240329121204105](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329121204105.png)

![image-20240329131510590](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329131510590.png)

一个对象由两部分组成：属性和方法（事物本身的信息和行为）

![image-20240329132057646](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329132057646.png)

![image-20240329132110909](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329132110909.png)

```
class Person {

}
//同类对象
const p1=new Person()
const p2=new Person()

console.log(p1 instantof Person)  //检查p1是不是由Person这个类创建的，返回true
```

![image-20240329181946652](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329181946652.png)

```
class Person{
	name="孙悟空"
	sayHello(){
		console.log('大家好，我是' + this.name)
	}
	static test(){
		console.log("我是静态方法" + this.name)
	}
}

const p1=new Person()
p1.sayHello()  //打印大家好，我是孙悟空 
Person.test()    //要通过类来调用，Person调用的，this就是Person
```

![image-20240329211816719](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329211816719.png)

```
class Person {
	constructor(nmae,age,gender){
		this.name=name
		this.age=age
		this.gender=gender
	}
}

const p1=new Person("孙悟空",18,"男")
console.log(p1)
```

![image-20240329214138466](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329214138466.png)

![image-20240329220110781](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329220110781.png)

```
class Person {
	#name
	#age         //私有属性要先声明才能访问
	#gender
	
	constructor(nmae,age,gender){
		this.name=name
		this.age=age
		this.gender=gender
	}
	
	sayHello(){
		console.log(this.name)
	}
}
```

```
class Person {
	#name
	#age         //私有属性要先声明才能访问
	#gender
	
	constructor(name,age,gender){
		this.name=name
		this.age=age
		this.gender=gender
	}
	
	sayHello(){
		console.log(this.name)
	}
	
	getName(){
		retuen this.#name
	}
	setName(name){
		this.#name=name
	}
}

p1.getName()
p1.setName('猪八戒')
```

![image-20240330152957792](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330152957792.png)

![image-20240329222454358](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329222454358.png)

![image-20240329222515146](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329222515146.png)

![image-20240329222529494](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240329222529494.png)

```
class Person {
	#name
	#age         //私有属性要先声明才能访问
	#gender
	
	constructor(name,age,gender){
		this.name=name
		this.age=age
		this.gender=gender
	}
	
	sayHello(){
		console.log(this.name)
	}
	
	get gender(){
		return this.#gender
	}
	set gender(gender){
		this.#gender=gender
	}
}

console.log(p1.gender)
p1.gender="女"
```

![image-20240330143926759](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330143926759.png)

```
const dog=new Dog('旺财')
function sayHello(obj){
	console.log("Hello,"+obj.name)   //只要有name的对象，就能实现这个函数
}
sayHello(dog)
```

![image-20240330152916552](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330152916552.png)

原：

```
class Dog{
	constructor(name){
		this.name=name
	}
	sayHello(){
		console.log("汪汪汪")
	}
}
class Cat{
	constructor(name){
		this.name=name
	}
	sayHello(){
		console.log("喵喵喵")
	}
}

const dog=new Dog("旺财")
const cat=new Cat("汤姆")

dog.sayHello()
cat.sayHello()
```

继承：

```
class Animal{
	constructor(name){
		this.name=name
	}
	sayHello{
		console.log("动物在叫")
	}
}

class Dog extends Animal{

}
class Cat extends Animal{

}

const dog=new Dog("旺财")
const cat=new Cat("汤姆")
dog.sayHello()
cat.sayHello()
console.log(dog)
console.log(cat)
```

![image-20240330152719452](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330152719452.png)

```
class Animal{
	constructor(name){
		this.name=name
	}
	sayHello{
		console.log("动物在叫")
	}
}

class Dog extends Animal{
	sayHello(){
		console.log("汪汪汪")    //可以重写（添加或修改父类）
	}
}
class Cat extends Animal{
	constructor(name,age){    
		super(name)           //重写构造函数时，构造函数的第一行代码必须为super()
		
		this.age=age
	}
	sayHello(){
		//打印“动物在叫”
		super.sayHello()  //在方法中可以使用super来引用父类的方法
		console.log("喵喵喵")
	}
}

const dog=new Dog("旺财")
const cat=new Cat("汤姆",3)
dog.sayHello()
cat.sayHello()
```

![image-20240330154507803](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330154507803.png)

```
class Person {
	name="孙悟空"
	age=18
	//这样在对象里是看不到的
	sayHello(){
		console.log("Hello,我是", this.name)
	}
	//让他能看到
	sayHello =function(){
		console.log("Hello,我是", this.name)
	}
	//或者
	sayHello =()=>{
		console.log("Hello,我是", this.name)
	}
}

const p=new Person()
console.log(p)
```

![image-20240330155238063](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330155238063.png)

![image-20240330155421868](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330155421868.png)

![image-20240330160738389](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330160738389.png)

```
class Person {
	name="孙悟空"   //在类中通过x=y的形式添加的属性，位于对象自身中
	age=18         //在类中通过x=y的形式添加的属性，位于对象自身中
	
	constructor(){
		this.gender="男"  //直接通过对象所添加的属性，位于对象自身中
	}
	
	sayHello(){
		console.log("Hello,我是", this.name)
	}
}

const p=new Person()
p.address="花果山"        //直接通过对象所添加的属性，位于对象自身中
console.log(p)
```

![image-20240330155701164](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330155701164.png)

![image-20240330160340416](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330160340416.png)

```
class Person {
	sayHello(){
		console.log("Hello,我是", this.name)
	}
}

const p=new Person()
p.sayHello="hello"    //在p自身当中
console.log(p.sayHello)
```

![image-20240330160756825](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330160756825.png)

![image-20240330160851746](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330160851746.png)

![image-20240330162123670](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330162123670.png)

![image-20240330163820587](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330163820587.png)



![image-20240330163913490](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330163913490.png)

![image-20240330163923126](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330163923126.png)

![image-20240330163808969](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330163808969.png)

```
class Person {
	name="孙悟空"  
	age=18        
	
	sayHello(){
		console.log("Hello,我是", this.name)
	}
}

const p1=new Person()
const p2=new Person()    //它们是两个对象，只是同类型(同是Person类)
console.log(p1===p2)    //false
console.log(p1._ _proto_ _===p2._ _proto_ _)  //true
```

![image-20240330165147642](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330165147642.png)

![image-20240330170811098](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330170811098.png)

```
class Animal{

}
class Cat extends Animal {
	
}
class TomCat extends Cat{

}
const cat=new Cat()
console.log(cat._ _proto_ _)   //打印出Animal
```

![image-20240330170447737](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330170447737.png)

![image-20240330170507451](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330170507451.png)

![image-20240330170639762](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330170639762.png)

![image-20240330170830129](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330170830129.png)

![image-20240330170837514](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330170837514.png)

修改原型：只能通过类的prototype属性来访问实例的原型

```
class Person {
	name="孙悟空"  
	age=18        
	
	sayHello(){
		console.log("Hello,我是", this.name)
	}
}

const p1=new Person()
const p2=new Person()
console.log(Person.prototype)  //Person.prototype相当于p._ _proto_ _

Person.prototype.fly=()=>{
	console.log("我在飞")
}
```

![image-20240330183608359](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330183608359.png)

![image-20240330183824597](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330183824597.png)

![image-20240330185506552](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330185506552.png)

```
class Animal{}
class Dog extends Animal{}
const dog=new Dog()

console.log(dog instanceof Dog)   //true
console.log(dog instanceof Animal)  //true

//dog._ _proto_ _和Dog.prototype一样
```

![image-20240330185757960](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330185757960.png)

![image-20240330190240733](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330190240733.png)

![image-20240330190652676](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330190652676.png)

![image-20240330190559580](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330190559580.png)

![image-20240330190738547](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330190738547.png)

![image-20240330190902395](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330190902395.png)

![image-20240330191423489](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330191423489.png)

```
function Person(name,age){
	//this表示新建的对象
	this.name=name
	this.age=age
}
//向原型中添加方法要在外面加
Person.prototype.sayHello=function(){
	console.log(this.name)
}
//添加静态属性
Person.staticProperty="xxx"
//添加静态方法
Person.staticMethod=function(){}

const p=new Person("孙悟空",18)
```

太分散了，放到一个立即执行函数里

![image-20240330192647471](C:\Users\hisoh\AppData\Roaming\Typora\typora-user-images\image-20240330192647471.png)
