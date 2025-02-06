
//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

//残り時間を取得する関数
function showRestTime() {
  const now = new Date();
  const goal = new Date(2025, 3, 5);
  // new Date(2050, 0, 1); //2050年1月1日の情報を取得する（※月は「実際の月の-1」にする）

  const restMillisecond = goal.getTime() - now.getTime();
  let day, hour, minute, second;

  if (restMillisecond <= 0) {
    // goalの日付を過ぎた、または目標日になった場合
    day = hour = minute = second = 0;
    // 当日または過ぎた場合の処理
    // document.getElementById('countdown').textContent = "Today";
    // clearInterval(timerId); // カウントダウンの更新を停止
    // return;
  } else {
    day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);
    hour = Math.floor(restMillisecond / 1000 / 60 / 60) % 24;
    minute = Math.floor(restMillisecond / 1000 / 60) % 60;
    second = Math.floor(restMillisecond / 1000) % 60;
  }

  document.getElementById('day').textContent = String(day).padStart(2, '0');
  document.getElementById('hour').textContent = String(hour).padStart(2, '0');
  document.getElementById('min').textContent = String(minute).padStart(2, '0');
  document.getElementById('sec').textContent = String(second).padStart(2, '0');
}

setInterval(showRestTime, 1000);


const box = document.querySelector('.logo');

// アニメーション終了時のイベントリスナー
box.addEventListener('animationend', function(event) {
  if (event.animationName === 'fadeOutLogo') { // アニメーション名を確認
    setTimeout(() => {
      box.style.zIndex = -1; // アニメーションが完全に終わった後に変更
    }, 100); // 少し遅延を追加してブラウザの描画を安定させる
  }
});
