/**
1000<sup>1000</sup> 의 마지막 10자리

@param doc 문제
@param result 답
@param thouTimeThou 10의 1000승

*/
function projectEuler48() {
  const doc = `<div id="content">


<h2>1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup> 의 마지막 10자리</h2>
<h4 title="난이도 ☕">Problem 48</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=48">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 10<sup>10</sup> = 10405071317 입니다.</p>
<p>1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup> 의 마지막 10자리 수는 무엇입니까?</p></div>`
  let times = 0n;

  for (let i = 1n; i <= 1000n; i++) {
    times += i ** i;
  }

  const result = String(times).substr(-10);

  return {

    doc: doc,
    thouTimeThou: times,
    result: result + '<hr/>'
      + times + '<br/>'
    
  };
}


