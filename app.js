console.log('---------------関数-----------------')
// 関数の書き方
// funstion 関数名(){
// 	処理
// }
// function myalert(){
	// alert('自作関数からhello');
	// アラートを表示したあとにも自由に処理を追加できる

// let hantei = confirm('このボタン押してもいいですか？');
// console.log(hantei);


// 問題
// OKボタンが押されたら「大丈夫」、
// キャンセルが押されたら「やり直し」
// とコンソールに表示しましょう。

// if (hantei === true ) {
// 	console.log('大丈夫');
// }else{
// 	console.log('やり直し');
// }
// }

// 文字の変え方
let messageSpan = document.getElementById('message');
messageSpan.textContent = '変わりました';
messageSpan.style.color = 'blue';

// 今日の宿題
// OKボタンが押されたら「大丈夫」、
// キャンセルが押されたら「やり直し」
// とid="message"のspanタグの部分に表示しましょう

function myalert(){
	let hantei = confirm('このボタン押してもいいですか？');
	let messageSpan = document.getElementById('message');
	if (hantei === true ) {
	console.log('大丈夫');
		messageSpan.textContent = '大丈夫';
		messageSpan.style.color = 'green';
		messageSpan.style.fontSize = '16px';
}else{
	console.log('やり直し');
		messageSpan.textContent = 'やり直し';
		messageSpan.style.color = 'red';
		messageSpan.style.fontSize = '24px';
}
}

console.log('---------------関数(引数付)---------------')
// 関数の書き方
// function 関数名(引数1,引数2,.....)｛
// 	処理
// }
// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字)この場合、表示した引数に当たる

function myalert2(displayMessage) {
	alert(displayMessage);
}

// function printHoge(msg) {
// 	console.log(msg);
// }
// 作った関数を実行
// printHoge('Hoge');

function printHoge() {
	console.log('Hoge');
}
// 作った関数を実行
printHoge();

// 以下の関数を作成して、作成した関数を実行してください

// 関数名:printNum
// 引数:一つの数値
// 処理内容:引数で受け取った数値をコンソールに表示する。

function printNum(msg) {
	console.log(msg);
}
printNum(90);

function printKuku(num) {
	for (let i = 1; i <= 9; i++) {
	console.log(i * num);
	}
}

printKuku(2);
printKuku(6);


// 以下の関数を作成して、作成した関数を実行してください

// 関数名：printKakezan
// 引数：2つの数字
// 処理内容：引数で受け取った数値の掛け算をコンソールに表示する

function printKakezan(num,msg) {
	console.log(num * msg);
}
printKakezan(6,5);

// 以下の関数を作成して、作成した関数を実行してください

// 関数名：printIsEven
// 引数：1つの数値
// 処理内容：因数で受け取った数値が偶数の場合は「偶数です」と出力し、
// 奇数の場合は「奇数です」と出力する


function printIsEven(num) {
	if (num % 2 === 0) {
		console.log('偶数です');
	}else {
	console.log('奇数です');
	}
}

printIsEven(4);
printIsEven(11);


// 関数名：printMessage
// 引数1：1つの文字列
// 引数2：1つの数字
// 処理内容：因数で受け取った文字列を、因数で受け取った数値分繰り返し出力する。
// どらえもん,4を指定したら、以下が正解。

function printMessage(msg,num) {
	for (let i = 1; i <= num; i++) {
		console.log(msg);
	}
}

printMessage('どらえもん',5);


console.log('---------------宿題-----------------');


// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printMaxNum
// 引数1：1つの数値
// 引数2：1つの数値
// 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。

function printMaxNum(num1,num2) {
	if (num1 > num2) {
		console.log(num1);
		}else  if (num1 < num2) {
			console.log(num2);
		}else {
			console.log('同じ');
		}
	}

printMaxNum(8,50);


// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す

// 戻り値(返り値)return 値;の形で、実行した側に戻される値
// 引数と逆方向に値を送る

function getSquared(num) {
	console.log(num * num);
}
getSquared(9);

// return使用

function getSquare(num) {
   return num * num;
}

var resuld = getSquare(10);
console.log(resuld);

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：createSelfIntroductionText
// 引数1：1つの文字列
// 処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す

function createSelfIntroductionText(message) {
	console.log(`私の名前は${message}です`);
}
createSelfIntroductionText('NexSeed');


function createSelfIntroductionTex(name) {
	var mess = '私の名前は' + name + 'です';
	return mess;
}

var message = createSelfIntroductionTex('NexSeed');
console.log(message);

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：isEvenNumber
// 引数1：1つの数値
// 処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。

function isEvenNumber(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

var result = isEvenNumber(3);
console.log(result);


// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：isSeedKun
// 引数1：任意の文字列
// 処理内容：引数で渡された文字列が「SeedKun」の場合は true、そうでない場合は false を返す。

function isSeedKun(boy) {
	if (boy == 'SeedKun') {
		return true;
	}else {
		return false;
	}
}

var result = isSeedKun('SeedKun');
console.log(result);


