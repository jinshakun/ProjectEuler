function projectEuler32() {
  const doc = `<div id="content">


<h2>1~9 팬디지털 곱셈식을 만들 수 있는 모든 수의 합</h2>
<h4 title="난이도 ☕">Problem 32</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=32">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>1부터 <var>n</var>까지의 각 숫자를 한 번씩만 써서 만들 수 있는 수를 팬디지털(pandigital)이라고 합니다.<br>
예를 들면 15234는 1부터 5의 숫자가 한 번씩만 쓰였으므로 1 ~ 5 팬디지털입니다.</p>
<p>7254라는 수는 그런 면에서 특이한데, 39 × 186 = 7254 라는 곱셈식을 만들 때 이것이 1 ~ 9&nbsp;팬디지털이 되기 때문입니다.</p>
<p>이런 식으로 <span class="eqn"><i>a</i> × <i>b</i> = <i>c</i></span> 가 1 ~ 9 팬디지털이 되는 모든 <var>c</var>의 합은 얼마입니까?</p>
<p>(참고: 어떤 <var>c</var>는 두 개 이상의&nbsp;(<var>a</var>, <var>b</var>)쌍에 대응될 수도 있는데, 이런 경우는 하나로 칩니다)</p></div>
`;
  let result = new Set();
  const pandi_check = (a, b, c) => {
    let str = String(a) + String(b) + String(c);
    if (str.length != 9 || str.split('').sort().join('') != '123456789') {
      return false;
    }
    return true;
  }
const start = 1;
const end = 9876;

  for (let a = start; a <= end; a++) {
    let start_b = start + a;
    for (let b = start_b; b <= end && a != b; b++) {
      let c = a * b;
      if (pandi_check(a, b, c)) {
        result.add(c);
      }
    }
  }

  let result_sum = 0;
  [...result].forEach((num) => {
    result_sum += num;
  })

  return {
    doc: doc,
    result: result_sum + '<hr/>'
      + [...result]
  }
}

function projectEuler36() {
  const doc = `<div id="content">


<h2>10진법과 2진법으로 모두 대칭수인 1,000,000 미만 수의 합</h2>
<h4 title="난이도 ☕">Problem 36</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=36">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>대칭수(palindrome)인 585는 2진수로 나타내도&nbsp;1001001001<sub>2</sub>가 되어 여전히 대칭수입니다.</p>
<p>10진법과 2진법으로 모두 대칭수인 1,000,000 미만 수의 합을 구하세요.</p>
<p>(주의: 첫번째 자리가 0이면 대칭수가 아님)</p></div>
`

  let result = 0;
  let raw = [];

  for (let i = 1; i < 1000000; i++) {
    if (palindrome(String(i)) && palindrome(i.toString(2))) {
      result += i;
      raw.push(i)
    }
  }

  return {
    doc: doc,
    raw_result : raw,
    result: result + '<hr/>'
    + raw
  };
}















