console.log('---------------関数-----------------')
// 関数の書き方
// funstion 関数名(){
// 	処理
// }
function myalert(){
	// alert('自作関数からhello');
	// アラートを表示したあとにも自由に処理を追加できる

	let hantei = confirm('このボタン押してもいいですか？');
	let messageSpan = document.getElementById('message');
// console.log(hantei);


// 問題
// OKボタンが押されたら「大丈夫」、
// キャンセルが押されたら「やり直し」
// とコンソールに表示しましょう。

if (hantei === true ) {
	console.log('大丈夫');
		messageSpan.textContent = '大丈夫';
}else{
	console.log('やり直し');
		messageSpan.textContent = 'やり直し';
}
}

// 文字の変え方
let messageSpan = document.getElementById('message');
messageSpan.textContent = '変わりました';
messageSpan.style.color = 'blue';

// 今日の宿題
// OKボタンが押されたら「大丈夫」、
// キャンセルが押されたら「やり直し」
// とid="message"のspanタグの部分に表示しましょう


// if (hantei === true) {
// 	messageSpan.textContent = '大丈夫';
// }else{
// 	messageSpan.textContent = 'やり直し';
// }
// }

// function myalert(){
// messageSpan = document.getElementById('message'); {
// 		messageSpan.textContent = '大丈夫';}
// }