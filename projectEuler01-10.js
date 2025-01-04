function projectEuler1() {

  const doc = `<div id="content">


<h2>1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면?</h2>
<h4 title="난이도 &#9749;">Problem 1</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=1">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.</p>
<p>1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?</p></div>

<br/>`
  let result = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }

  return {
    doc: doc,
    result: result
  };
}

function projectEuler2() {
  const doc = `<div id="content">


<h2>피보나치 수열에서 4백만 이하이면서 짝수인 항의 합</h2>
<h4 title="난이도 &#9749;">Problem 2</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=2">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>피보나치(Fibonacci) 수열의 각 항은 바로 앞의 항 두 개를 더한 것입니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.</p>

<blockquote> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... </blockquote>

<p>4백만 이하의 짝수 값을 갖는 모든 피보나치 항을 더하면 얼마가 됩니까?</p></div>

<br/>`

  let result = 0;
  let first = 1;
  let second = 1;
  let now = 0;
  while (first + second <= 4000000) {
    now = first + second;
    if (now % 2 == 0) {
      result += now;
    }
    first = second;
    second = now;
  }

  return {
    doc: doc,
    result: result
  };
}

function projectEuler3() {
  const doc = `<div id="content">


<h2>가장 큰 소인수 구하기</h2>
<h4 title="난이도 &#9749;">Problem 3</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=3">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 합니다.<br/>
 예를 들면 13195의 소인수는 5, 7, 13, 29 입니다.</p>
<p>600851475143의 소인수 중에서 가장 큰 수를 구하세요.</p></div>

<br/>`

  const num = 600851475143;
  let primeNum = prime(num);
  let result = Math.max(...primeNum);

  return {
    doc: doc,
    raw_result: result,
    result: result +
      '<hr/>' +
      num + '의 소인수 : ' + primeNum
  };

}
function projectEuler4() {
  const doc = `<div id="content">


<h2>세자리 수를 곱해 만들 수 있는 가장 큰 대칭수</h2>
<h4 title="난이도 &#9749;">Problem 4</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=4">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.</p>
<p>두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 <b>9009</b> (= 91 &times; 99) 입니다.</p>
<p>세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?</p></div>

<br/>`
  let result = 0;
  let result_a;
  let result_b;

  for (let a = 1; a <= 999; a++) {
    for (let b = 1; b <= a; b++) {
      let compare = a * b;
      if (compare > result) {
        if (palindrome(String(compare))) {
          result = compare;
          result_a = a;
          result_b = b;
        }
      }
    }
  }

  return {
    doc: doc,
    raw_result: result,
    result: result +
      '<hr/>' +
      result_a + ' × ' + result_b + ' = ' + result
  };
}


function projectEuler5() {

  const doc = `<div id="content">


<h2>1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수</h2>
<h4 title="난이도 &#9749;">Problem 5</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=5">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.</p>
<p>그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?</p></div>

<br/>`

  let result = 1;
  for (let i = 2; i <= 20; i++) {
    result = lcm(result, i);
  }

  return {
    doc: doc,
    result: result
  };
}

function projectEuler6() {
  const doc = `<div id="content">


<h2>1부터 100까지 &quot;제곱의 합&quot;과 &quot;합의 제곱&quot;의 차는?</h2>
<h4 title="난이도 &#9749;">Problem 6</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=6">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>1부터 10까지 자연수를 각각 제곱해 더하면 다음과 같습니다 (제곱의 합).</p>
<blockquote>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</blockquote>
<p>1부터 10을 먼저 더한 다음에 그 결과를 제곱하면 다음과 같습니다 (합의 제곱).</p>
<blockquote>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</blockquote>
<p>따라서 1부터 10까지 자연수에 대해 &quot;합의 제곱&quot;과 &quot;제곱의 합&quot; 의 차이는 3025 - 385 = 2640 이 됩니다.</p>
<p>그러면 1부터 100까지 자연수에 대해 &quot;합의 제곱&quot;과 &quot;제곱의 합&quot;의 차이는 얼마입니까?</p></div>

<br/>`

  let endNum = 100;
  let powSum = 0;
  let sumPow = 0;
  for (let i = 1; i <= endNum; i++) {
    powSum += i ** 2;
  }

  sumPow = ((1 + endNum) * endNum / 2) ** 2;
  let 차이 = sumPow - powSum;

  return {
    doc: doc,
    raw_result: 차이,
    result: 차이
      + '<hr/>'
      + '합의 제곱 : ' + sumPow + '<br/>'
      + '제곱의 합 : ' + powSum
  };
}



function projectEuler7() {
  const doc = `<div id="content">


<h2>10001번째의 소수</h2>
<h4 title="난이도 &#9749;">Problem 7</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=7">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.</p>
<p>이 때 10,001번째의 소수를 구하세요.</p></div>

<br/>`

  let 결과 = 0;
  let count = 0;
  let number = 1;
  while (true) {
    if (isPrime(number)) {
      count++;
      결과 = number;
      if (count == 10001) {
        break;
      }
    }
    number++;
  }
  return {
    doc: doc,
    result: 결과
  };
}

function projectEuler8() {
  const doc = `<div id="content">


<h2>1000자리 수 안에서 연속된 13개 숫자 곱의 최댓값</h2>
<h4 title="난이도 &#9749;">Problem 8</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=8">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>다음은 연속된 1000자리 수입니다 (읽기 좋게 50자리씩 잘라 놓음).</p>
<p><samp style="font-family:Menlo,monospace;">
73167176531330624919225119674426574742355349194934<br />
96983520312774506326239578318016984801869478851843<br />
85861560789112949495459501737958331952853208805511<br />
12540698747158523863050715693290963295227443043557<br />
66896648950445244523161731856403098<span style="color:#f00;"><strong>71112</strong></span>1722383113<br />
62229893423380308135336276614282806444486645238749<br />
30358907296290491560440772390713810515859307960866<br />
70172427121883998797908792274921901699720888093776<br />
65727333001053367881220235421809751254540594752243<br />
52584907711670556013604839586446706324415722155397<br />
53697817977846174064955149290862569321978468622482<br />
83972241375657056057490261407972968652414535100474<br />
821663704844031<span style="color:#00f;"><strong>9989</strong></span>0008895243450658541227588666881<br />
16427171479924442928230863465674813919123162824586<br />
17866458359124566529476545682848912883142607690042<br />
24219022671055626321111109370544217506941658960408<br />
07198403850962455444362981230987879927244284909188<br />
84580156166097919133875499200524063689912560717606<br />
05886116467109405077541002256983155200055935729725<br />
71636269561882670428252483600823257530420752963450
</samp></p>
<p>여기서 붉게 표시된 71112의 경우 연속한 5개 숫자 7, 1, 1, 1, 2를 모두 곱하면 14입니다.<br />
또, 그 다음 연속한 5개 숫자 11121의 경우 1, 1, 1, 2, 1을 모두 곱하면 2입니다.</p>
<p>이런 식으로 맨 처음 (7 &times; 3 &times; 1 &times; 6 &times; 7 = 882) 부터
 맨 끝 (6 &times; 3 &times; 4 &times; 5 &times; 0 = 0) 까지 연속한 5개 숫자의 곱을 구할 수 있습니다.</p>
<p>이렇게 구할 수 있는 연속한 5개 숫자의 곱 중에서 가장 큰 값은 40824 입니다.</p>

<p>연속한 4개 숫자의 곱 중에서 가장 큰 값은 파랗게 표시된 9 × 9 × 8 × 9 = 5832 입니다.</p>

<p>위의 1000자리 수에서 연속한 13개 숫자의 곱이 가장 큰 값은 얼마입니까?</p></div>

<br/>`

  const 연속된1000개의숫자 = `73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`
  let 결과 = 0;
  let 연속으로_곱할_겟수 = 5;
  for (var i = 0; i <= 1000 - 연속으로_곱할_겟수; i++) {
    var 잘라낸값 = 연속된1000개의숫자.substr(i, 연속으로_곱할_겟수);
    var 연속된곱 = 1;
    for (var count = 0; count < 연속으로_곱할_겟수; count++) {
      연속된곱 *= 잘라낸값.substr(count, 1);
    }
    if (연속된곱 > 결과) {
      결과 = 연속된곱;
    }
  }
  return {
    doc: doc,
    result: 결과
  };
}

function projectEuler9() {
  const 문제 = `<div id="content">


<h2><var>a</var> + <var>b</var> + <var>c</var> = 1000 이 되는 피타고라스 수</h2>
<h4 title="난이도 &#9749;">Problem 9</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=9">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>세 자연수 <var>a</var>, <var>b</var>, <var>c</var> 가
 피타고라스 정리 <span class="eqn"> <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup> = <i>c</i><sup>2</sup></span> 를 만족하면 피타고라스 수라고 부릅니다
(여기서 <span class="eqn"> <i>a</i> &lt; <i>b</i> &lt; <i>c</i> </span>).<br />
예를 들면 <b>3</b><sup>2</sup> + <b>4</b><sup>2</sup> = 9 + 16 = 25 = <b>5</b><sup>2</sup>이므로 3, 4, 5는 피타고라스 수입니다.</p>
<p> <span class="eqn"> <i>a</i> + <i>b</i> + <i>c</i> = 1000 </span> 인 피타고라스 수
 <var>a</var>, <var>b</var>, <var>c</var>는 한 가지 뿐입니다.
 이 때, <span class="eqn"> <i>a</i> &times; <i>b</i> &times; <i>c</i> </span>는 얼마입니까?</p></div>

<br/>`

  let result_a = 0;
  let result_b = 0;
  let result_c = 0;
  for (let a = 1; a < (1000 / 3); a++) {
    for (let b = a + 1; b < (1000 - a) / 2; b++) {
      c = 1000 - (a + b);
      if (a ** 2 + b ** 2 == c ** 2) {
        result_a = a;
        result_b = b;
        result_c = c;
        break;
      }
    }
  }
  let 결과 = result_a * result_b * result_c;

  return {
    doc: 문제,
    raw_result: 결과,
    raw_a: result_a,
    raw_b: result_b,
    raw_c: result_c,
    result: 결과 + '<hr/>'
      + 'a × b × c = ' + 결과 + "<br/>"
      + "a : " + result_a + "<br/>"
      + "b : " + result_b + "<br/>"
      + "c : " + result_c + "<br/>"
  };
}

function projectEuler10() {
  const 문제 = `<div id="content">


<h2>이백만 이하 소수의 합</h2>
<h4 title="난이도 &#9749;">Problem 10</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=10">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
<br/>

<div class="problem_content">
    <p>10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.</p>
<p>이백만(2,000,000) 이하 소수의 합은 얼마입니까?</p></div>

<br/>`

  let result = 0;
  let raw_result = [];
  for (let i = 2; i <= 2000000; i++) {
    if (isPrime(i)) {
      result += i;
      raw_result.push(i);
    }
  }
  return {
    doc: 문제,
    raw_result: raw_result,
    result: result + '<hr/>'
      + raw_result + '<br/>'
  };
}



