function runproject(문제번호) {
  document.getElementById('처리시간').innerHTML = ''
  document.getElementById('문제').innerHTML = "준비중";
  document.getElementById('답').innerHTML = "준비중";
  //console.time('test');
  let starttime = performance.now();
  eval('solve = projectEuler' + String(문제번호) + '()');
  //console.log(문제번호 + '번 문제');
  //console.timeEnd('test')
  let endtime = performance.now();
  document.getElementById('문제').innerHTML = solve.doc;
  document.getElementById('답').innerHTML = solve.result;
  document.getElementById('처리시간').innerHTML = (solve.result == "" ? "작업중" : endtime - starttime + 'ms 소요됨.');
}

function drawHtmlButton(questionCount, amount) {
  let outDoc = '';
  let colorStyle = `"color : red"`;
  let disabled = `disabled`
  for (let i = questionCount; i < questionCount + amount; i++) {
    if (eval('typeof(projectEuler' + String(i) + ')') === 'function') {
      colorStyle = `"color : red"`;
      disabled = ``;
    } else {
      colorStyle = `"color : gray"`;
      disabled = `disabled`;
    }

    outDoc += `<button class='question` + String(i) + `, question' ` + disabled + ` style=` + colorStyle + ` onclick="runproject(` + String(i) + `)">` + i + '</button>';

    if (i % 10 == 0) {
      outDoc += '<br/>';
    }
  }
  return outDoc;
}