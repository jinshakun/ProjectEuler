function projectEuler21() {
  const doc = `<div id="content">


<h2>10000 이하 모든 친화수(우애수)의 합은?</h2>
<h4 title="난이도 ☕">Problem 21</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=21">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p> <var>n</var>의 약수들 중에서 자신을 제외한 것의 합을 <span class="eqn"><i>d</i>(<i>n</i>)</span>으로 정의했을 때,<br>
서로 다른 두 정수 <var>a</var>, <var>b</var>에 대하여
 <span class="eqn"><i>d</i>(<i>a</i>) = <i>b</i></span> 이고 <span class="eqn"><i>d</i>(<i>b</i>) = <i>a</i></span> 이면 <br>
 <var>a</var>, <var>b</var>는 친화쌍이라 하고 <var>a</var>와 <var>b</var>를 각각 친화수(우애수)라고 합니다. </p>
<p>예를 들어 220의 약수는 자신을 제외하면 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 이므로 그 합은 <var>d</var>(220) = 284 입니다.<br>
또 284의 약수는 자신을 제외하면 1, 2, 4, 71, 142 이므로 <var>d</var>(284) = 220 입니다.<br>
따라서 220과 284는 친화쌍이 됩니다. </p>
<p>10000 이하의 친화수들을 모두 찾아서 그 합을 구하세요.</p></div>
`
  let result = 0;
  let 친화수 = [];

  for (let i = 1; i <= 10000; i++) {
    약수의합a = 약수(i).reduce((sum, curr) => { return sum + curr }, 0) - i;
    약수의합b = 약수(약수의합a).reduce((sum, curr) => { return sum + curr }, 0) - 약수의합a;

    if (약수의합b == i && 약수의합a != 약수의합b) {
      result += i;
      친화수.push(i);
    }
  }


  return {
    doc: doc,
    친화수목록: 친화수,
    result: result + "<hr/>"
    + 친화수 + "<br/>"
  }

}

function projectEuler23() {
  let doc = `<div id="content">


<h2>두 과잉수의 합으로 나타낼 수 없는 모든 양의 정수의 합은?</h2>
<h4 title="난이도 ☕">Problem 23</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=23">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>자신을 제외한 약수(진약수)를 모두 더하면 자기 자신이 되는 수를 완전수라고 합니다.<br>
예를 들어 28은 1 + 2 + 4 + 7 + 14 = 28 이므로 완전수입니다.<br>
또, 진약수의 합이 자신보다 작으면 부족수, 자신보다 클 때는 과잉수라고 합니다.</p>
<p>12는 1 + 2 + 3 + 4 + 6 = 16 &gt; 12 로서 과잉수 중에서는 가장 작습니다.<br>
 따라서 과잉수 두 개의 합으로 나타낼 수 있는 수 중 가장 작은 수는 24 (= 12 + 12) 입니다.</p>
<p>해석학적인 방법을 사용하면, 28123을 넘는 모든 정수는 두 과잉수의 합으로 표현 가능함을 보일 수가 있습니다.<br>
 두 과잉수의 합으로 나타낼 수 없는 가장 큰 수는 실제로는 이 한계값보다 작지만, 해석학적인 방법으로는 더 이상 이 한계값을 낮출 수 없다고 합니다.</p>
<p>그렇다면, 과잉수 두 개의 합으로 나타낼 수 없는 모든 양의 정수의 합은 얼마입니까?</p></div>
`;
  let result = new Set([...Array(28123).keys()]);
  let 과잉수 = [];
  for (let i = 1; i < 28123; i++) {
    if (pNumber(i) == '과잉수') {
      과잉수.push(i);
    }
  }

  for (let i = 0; i < 과잉수.length; i++) {
    for (let j = i; j < 과잉수.length; j++) {
      let sum = 과잉수[i] + 과잉수[j];
      if (sum < 28123) {
        result.delete(sum)
      }
    }
  }

  let resultsum = 0;
  result.forEach((num) => {
    resultsum += num;
  });

  let graph = '';

  for (let i = 0 ; i < 28123 ; i++) {
    if (result.has(i)) {
      graph += '! ';
    } else {
      graph += '. ';
    }
  }

  return {
    doc: doc,
    raw_result: result,
    result: resultsum + '<hr/>'
      + '과잉수 두 개의 합으로 나타낼 수 없는 모든 양의 정수 : ' + [...result] + '<br/>'
    + graph
  }
}


function projectEuler24() {
  const doc = `<div id="content">


<h2>0, 1, 2, 3, 4, 5, 6, 7, 8, 9로 만들 수 있는 1,000,000번째 사전식 순열은?</h2>
<h4 title="난이도 ☕">Problem 24</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=24">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>어떤 대상을 순서에 따라 배열한 것을 순열이라고 합니다. 예를 들어 3124는 숫자&nbsp;1, 2, 3, 4로 만들 수 있는 순열 중 하나입니다.</p>
<p>이렇게 만들 수 있는 모든 순열을 숫자나 문자 순으로 늘어놓은 것을 사전식(lexicographic) 순서라고 합니다.<br>
0, 1, 2로 만들 수 있는 사전식 순열은 다음과 같습니다.</p>
<blockquote>012&nbsp; &nbsp;021&nbsp; &nbsp;102&nbsp; &nbsp;120&nbsp; &nbsp;201&nbsp; &nbsp;210</blockquote>
<p>0, 1, 2, 3, 4, 5, 6, 7, 8, 9로 만들 수 있는 사전식 순열에서 1,000,000번째는 무엇입니까?</p></div>
`;

  const cases = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let resultRaw = [];
  let result = [];


  permute([], cases, resultRaw);

  resultRaw.map(_ => _.join("")).forEach(
    (num) => {
      result.push(Number(num));
    }
  );

  return {
    doc: doc,
    result: result[1000000 - 1],
    raw_result: result
  }
}

function projectEuler25() {
  let doc = `<div id="content">


<h2>피보나치 수열에서 처음으로 1000자리가 되는 항은 몇 번째?</h2>
<h4 title="난이도 ☕">Problem 25</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=25">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>피보나치 수열은 아래와 같은 점화식으로 정의됩니다.</p>
<blockquote>F<sub><em>n</em></sub> = F<sub><em>n</em>-1</sub> + F<sub><em>n</em>-2</sub>  &nbsp;(단, F<sub>1</sub> = 1, F<sub>2</sub> = 1).</blockquote>
<p>이에 따라 수열을 12번째 항까지 차례대로 계산하면 다음과 같습니다.</p>
<blockquote>
F<sub>1</sub> = 1<br>
F<sub>2</sub> = 1<br>
F<sub>3</sub> = 2<br>
F<sub>4</sub> = 3<br>
F<sub>5</sub> = 5<br>
F<sub>6</sub> = 8<br>
F<sub>7</sub> = 13<br>
F<sub>8</sub> = 21<br>
F<sub>9</sub> = 34<br>
F<sub>10</sub> = 55<br>
F<sub>11</sub> = 89<br>
F<sub>12</sub> = 144
</blockquote>
<p>수열의 값은 F<sub>12</sub>에서 처음으로 3자리가 됩니다.</p>
<p>피보나치 수열에서 값이 처음으로 1000자리가 되는 것은 몇번째 항입니까?</p></div>
`;
  let result = 0n;
  let num = 0;

  while (result < 10n ** (1000n - 1n)) {
    num++;
    result = fibo(num);

  }

  return {
    doc: doc,
    raw_Result: num,
    raw_Result_F: result,
    result: num + '<hr/>'
      + 'F<sub>' + num + '</sub> = ' + result + '</br>'
  }
}

function projectEuler27() {
  let doc = `<div id="content">


<h2>연속되는 <var>n</var>에 대해 가장 많은 소수를 만들어내는 이차식</h2>
<h4 title="난이도 ☕">Problem 27</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=27">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>오일러는 다음과 같은 멋진 이차식을 제시했습니다.</p>
<blockquote> <span class="eqn"><i>n</i><sup>2</sup> + <i>n</i> + 41 </span> </blockquote>
<p>이 식의 <var>n</var>에다 0부터 39 사이의 수를 넣으면, 그 결과는 모두 소수가 됩니다.<br>
하지만 <var>n</var> = 40일 때의 값 40<sup>2</sup> + 40 + 41 은 40×(40 + 1) + 41 이므로 41로 나누어지고, 
<var>n</var> = 41일 때 역시 41<sup>2</sup> + 41 + 41 이므로 소수가 아닙니다.</p>
<p>컴퓨터의 발전에 힘입어 <span class="eqn"><i>n</i><sup>2</sup> − 79<i>n</i> + 1601 </span> 이라는 엄청난 이차식이 발견되었는데, 이것은 <var>n</var>이 0에서 79 사이일 때 모두 80개의 소수를 만들어냅니다. 이 식의 계수의 곱은 -79 × 1601 = -126479가 됩니다.</p>
<p>아래와 같은 모양의 이차식이 있다고 가정했을 때,</p>
<blockquote> <span class="eqn"><i>n</i><sup>2</sup> + <i>an</i> + <i>b</i> </span>
 &nbsp; (단 <span class="eqn">| <i>a</i> | &lt; 1000, | <i>b</i> | &lt; 1000)
 </span></blockquote>
<p>
0부터 시작하는 연속된 <var>n</var>에 대해 가장 많은 소수를 만들어내는 이차식을 찾아서, 그 계수 <var>a</var>와 <var>b</var>의 곱을 구하세요.</p></div>
`;
  let result;
  let maxn = 0;
  const a_max = 1000;
  const b_max = 1000;
  for (let a = -a_max + 1; a < a_max; a++) {
    for (let b = -b_max + 1; b < b_max; b++) {
      let n = 0;
      while (isPrime((n ** 2) + (a * n) + b)) {
        n++;
      }
      if (maxn < n) {
        result = {
          'a': a,
          'b': b,
          'ab': a * b
        };
        maxn = n;
      }
    }
  }

  return {
    doc: doc,
    raw_Result_ab: result.ab,
    raw_Result_a: result.a,
    raw_Result_b: result.b,
    result: result.ab + '<hr/>'
      + 'a = ' + result.a + '<br/>'
      + 'b = ' + result.b + '<br/>'
      + 'a와 b의 곱 : ' + result.ab
  };
}

const projectEuler28 = () => {
  const doc = `<div id="content">


<h2>1001×1001 나선모양 행렬에서 대각선 원소의 합은?</h2>
<h4 title="난이도 ☕">Problem 28</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=28">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>수 1부터 시작해서 우측으로부터 시계방향으로 감아 5×5 행렬을 만들면 아래와 같이 됩니다.</p>
<p style="text-align:center;font-family:courier new;"><span style="color:#f00;"><b>21</b></span> 22 23 24 <span style="color:#f00;"><b>25</b></span><br>

20 &nbsp;<span style="color:#f00;"><b>7</b></span> &nbsp;8 &nbsp;<span style="color:#f00;"><b>9</b></span> 10<br>

19 &nbsp;6 &nbsp;<span style="color:#f00;"><b>1</b></span> &nbsp;2 11<br>

18 &nbsp;<span style="color:#f00;"><b>5</b></span> &nbsp;4 &nbsp;<span style="color:#f00;"><b>3</b></span> 12<br>

<span style="color:#f00;"><b>17</b></span> 16 15 14 <span style="color:#f00;"><b>13</b></span></p>

<p>여기서 대각선 상의 수를 모두 더한 값은 101 입니다.</p>
<p>같은 방식으로 1001×1001 행렬을 만들었을 때, 대각선 상의 수를 더하면 얼마가 됩니까?</p></div>`;
    let result = 1;
    for(i = 3 ; i <= 1001 ; i+=2) {
        let sq = i*i;
        let block = i - 1;
        result += sq + (sq-block) + (sq-(block*2)) + (sq-(block*3));
     
    }
    return {
      doc : doc,
      result : result
    }
}


function projectEuler29() {
  const doc = `<div id="content">


<h2>2 ≤ <var>a</var> ≤ 100 이고 2 ≤ <var>b</var> ≤ 100인 <var>a</var>, <var>b</var>로 만들 수 있는 <var>a</var><sup><var>b</var></sup>의 개수</h2>
<h4 title="난이도 ☕">Problem 29</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=29">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>2 ≤&nbsp;<var>a</var>&nbsp;≤ 5 이고 2&nbsp;≤&nbsp;<var>b</var>&nbsp;≤&nbsp;5인 두 정수 <var>a</var>, <var>b</var>로 만들 수 있는 <var>a</var><sup><var>b</var></sup>의 모든 조합을 구하면 다음과 같습니다.</p>
<blockquote>
2<sup>2</sup>=4,&nbsp; 2<sup>3</sup>=8,&nbsp; 2<sup>4</sup>=16,&nbsp; 2<sup>5</sup>=32<br>
3<sup>2</sup>=9,&nbsp; 3<sup>3</sup>=27,&nbsp; 3<sup>4</sup>=81,&nbsp; 3<sup>5</sup>=243<br>
4<sup>2</sup>=16,&nbsp; 4<sup>3</sup>=64,&nbsp; 4<sup>4</sup>=256,&nbsp; 4<sup>5</sup>=1024<br>
5<sup>2</sup>=25,&nbsp; 5<sup>3</sup>=125,&nbsp; 5<sup>4</sup>=625,&nbsp; 5<sup>5</sup>=3125</blockquote>
<p>여기서 중복된 것을 빼고 크기 순으로 나열하면 아래와 같은 15개의 수가 됩니다.</p>
<p style="text-align:center">4,&nbsp; 8,&nbsp; 9,&nbsp; 16,&nbsp; 25,&nbsp;
 27,&nbsp; 32,&nbsp; 64,&nbsp; 81,&nbsp; 125,&nbsp;
 243,&nbsp; 256,&nbsp; 625,&nbsp; 1024,&nbsp; 3125</p>
<p>그러면, 2 ≤ <var>a</var> ≤ 100 이고 2 ≤ <var>b</var> ≤ 100인 <var>a</var>, <var>b</var>를 가지고 만들 수 있는 <var>a</var><sup><var>b</var></sup>는 중복을 제외하면 모두 몇 개입니까?</p></div>

`
  let result = new Set(); // 중복 입렵이 되지 않는 Set객체 이용.
  let start = 2n;
  let end = 100n;
  for (let a = start; a <= end; a++) {
    for (let b = start; b <= end; b++) {
      result.add(a ** b);
    }
  }

  return {
    doc: doc,
    raw_result: [...result],
    result: result.size + "<hr/>"
    + [...result] + "<br/>"
  };
}

function projectEuler30() {
  const doc = `<div id="content">


<h2>각 자리 숫자를 5제곱해서 더했을 때 자기 자신이 되는 수들의 합은?</h2>
<h4 title="난이도 ☕">Problem 30</h4>

<div class="info" style="float:right; font-size:90%;">
    <a target="_blank" href="https://projecteuler.net/problem=30">[ProjectEuler.net 원본]</a>
</div>
<div style="color:#666;font-size:80%; margin-top:10px;">
    출제 일시 : 2012-01-03 19:11:35, ☕</div>
<br>

<div class="problem_content">
    <p>각 자리의 숫자를 4제곱해서 더했을 때 자기 자신이 되는 수는 놀랍게도 단 세 개밖에 없습니다.</p>
<blockquote>
1634 = 1<sup>4</sup>&nbsp;+ 6<sup>4</sup>&nbsp;+ 3<sup>4</sup>&nbsp;+ 4<sup>4</sup><br>
8208 = 8<sup>4</sup>&nbsp;+ 2<sup>4</sup>&nbsp;+ 0<sup>4</sup>&nbsp;+ 8<sup>4</sup><br>
9474 = 9<sup>4</sup>&nbsp;+ 4<sup>4</sup>&nbsp;+ 7<sup>4</sup>&nbsp;+ 4<sup>4</sup>
</blockquote>
<p>(1 = 1<sup>4</sup>의 경우는 엄밀히 말해 합이 아니므로 제외합니다)</p>
<p>위의 세 수를 모두 더하면&nbsp;1634 + 8208 + 9474 = 19316 입니다.</p>
<p>그렇다면, 각 자리 숫자를 5제곱해서 더했을 때 자기 자신이 되는 수들의 합은 얼마입니까?</p></div>
`;
  let result = 0;
  let raw_result = [];
  const times = 5;

  /** 케쉬 - 제곱값 10개를 미리 계산해 놓는다.
  */
  let pre_times = [0];
  for (let i = 1; i < 10; i++) {
    pre_times[i] = i ** times;
  }

  /**
  num 를 times 만큼 제곱했을때 자릿수가 넘어가는가
  */
  const length_Check = (num, times) => {
    let logten = Math.log10(num);
    let timeslog = Math.log10(logten * pre_times[9]);
    if (logten > timeslog) {
      return false;
    }
    return true
  }

  /**
  각 자리의 숫자를 times 만큼 제곱했을때 나올수 있는 최대 수
  */
  const max_Length = (times) => {
    let num = 9;
    while (length_Check(num, times)) {
      num = (num * 10) + 9;
    }
    return pow(num);
  }

  /**
  num의 각 자리를 times 제곱해서 더한값
  */
  const pow = (num) => {
    let result = 0;
    String(num).split("").forEach((str_chr) => {
      result += pre_times[Number(str_chr)];
    });
    return result;
  }

  let max_num = max_Length(times);

  for (let i = 2; i <= max_num; i++) {
    if (i == pow(i)) {
      raw_result.push(i);
      result += i;
    }
  }

  return {
    doc: doc,
    raw_result: raw_result,
    result: result + '<hr/>'
      + raw_result
  }


}