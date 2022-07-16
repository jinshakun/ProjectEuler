function projectEuler1() {

    var doc = `<div id="content">
  
  
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
  
    document.getElementById('문제').innerHTML = doc
  
    var 결과 = 0
    for (var i = 1; i < 1000; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        결과 += i
        //document.write(i+"="+결과+",\t")
      }
    }
  
    document.getElementById('답').innerHTML = 결과 // HTML 문서에 출력된다.
  }
  function projectEuler2() {
    let doc = `<div id="content">
  
  
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
  
    document.getElementById('문제').innerHTML = doc
  
    var 결과 = 0
    var first = 1
    var second = 1
    var now = 0
    while (first + second <= 4000000) {
      now = first + second
      if (now % 2 == 0) {
        결과 += now
      }
      first = second
      second = now
    }
    document.getElementById('답').innerHTML = 결과
  
  }
  function projectEuler3() {
    let doc = `<div id="content">
  
  
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
  
    document.getElementById('문제').innerHTML = doc
  
    document.getElementById('답').innerHTML = Math.max(...prime(600851475143))
  
  
  }
  function projectEuler4() {
    let 문제 = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = 문제
  
    var 결과 = 0
  
    for (var a = 1; a <= 999; a++) {
      for (var b = 1; b <= a; b++) {
        var compare = a * b
        var strCompare = String(compare)
        if (strCompare == reverse(strCompare) && 결과 < compare) {
          결과 = compare
        }
      }
    }
    document.getElementById('답').innerHTML = 결과
  }
  function projectEuler5() {
    let 문제 = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = 문제
  
    var 결과 = 1
    for (var i = 2; i <= 20; i++) {
      결과 = lcm(결과, i)
    }
    document.getElementById('답').innerHTML = 결과
  }
  function projectEuler6() {
    let doc = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = doc
    let endNum = 100
    var powSum = 0
    var sumPow = 0
    for (var i = 1; i <= endNum; i++) {
      powSum += i ** 2
    }
  
    sumPow = ((1 + endNum) * endNum / 2) ** 2
    let 차이 = sumPow - powSum
  
    document.getElementById('답').innerHTML = powSum + ',\t' + sumPow + ', 차이 = ' + 차이
  }
  function projectEuler7() {
    let doc = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = doc
    var 결과 = 0
    var count = 0
    var number = 1
    while (true) {
      if (isPrime(number)) {
        count++
        결과 = number
        if (count == 10001) {
          break
        }
      }
      number++
    }
    document.getElementById('답').innerHTML = 결과
  }
  function projectEuler8() {
    let doc = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = doc
    let 연속된1000개의숫자 = `73167176531330624919225119674426574742355349194934
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
    var 결과 = 0
    let 연속으로_곱할_겟수 = 5
    for (var i = 0; i <= 1000 - 연속으로_곱할_겟수; i++) {
      var 잘라낸값 = 연속된1000개의숫자.substr(i, 연속으로_곱할_겟수)
      var 연속된곱 = 1
      for (var count = 0; count < 연속으로_곱할_겟수; count++) {
        연속된곱 *= 잘라낸값.substr(count, 1)
      }
      if (연속된곱 > 결과) {
        결과 = 연속된곱
      }
    }
    document.getElementById('답').innerHTML = 결과
  }
  function projectEuler9() {
    let 문제 = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = 문제
    var result_a = 0
    var result_b = 0
    var result_c = 0
    for (var a = 1; a < (1000 / 3); a++) {
      for (var b = a + 1; b < (1000 - a) / 2; b++) {
        c = 1000 - (a + b)
        if (a ** 2 + b ** 2 == c ** 2) {
          result_a = a
          result_b = b
          result_c = c
          break
        }
      }
    }
    let 결과 = result_a * result_b * result_c
    document.getElementById('답').innerHTML = 결과 + "\t a=" + result_a + ", b=" + result_b + ", c=" + result_c
  }
  function projectEuler10() {
    let 문제 = `<div id="content">
  
  
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
    document.getElementById('문제').innerHTML = 문제
    var result = 0
    for (var i = 2; i <= 2000000; i++) {
      if (isPrime(i)) {
        result += i
      }
    }
    document.getElementById('답').innerHTML = result
  }
  function projectEuler11() {
    const 문제 = `<div id="content">
  
  
  <h2>20×20 격자에서 연속된 네 수의 곱 중 최댓값</h2>
  <h4 title="난이도 &#9749;">Problem 11</h4>
  
  <div class="info" style="float:right; font-size:90%;">
      <a target="_blank" href="https://projecteuler.net/problem=11">[ProjectEuler.net 원본]</a>
  </div>
  <div style="color:#666;font-size:80%; margin-top:10px;">
      출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
  <br/>
  
  <div class="problem_content">
      <p>아래와 같은 20×20 격자가 있습니다.</p>
  <blockquote><samp style="font-family:Menlo,monospace;">
  08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08<br />
  49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00<br />
  81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65<br />
  52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91<br />
  22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80<br />
  24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50<br />
  32 98 81 28 64 23 67 10 <span style="color:#f00;"><b>26</b></span> 38 40 67 59 54 70 66 18 38 64 70<br />
  67 26 20 68 02 62 12 20 95 <span style="color:#f00;"><b>63</b></span> 94 39 63 08 40 91 66 49 94 21<br />
  24 55 58 05 66 73 99 26 97 17 <span style="color:#f00;"><b>78</b></span> 78 96 83 14 88 34 89 63 72<br />
  21 36 23 09 75 00 76 44 20 45 35 <span style="color:#f00;"><b>14</b></span> 00 61 33 97 34 31 33 95<br />
  78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92<br />
  16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57<br />
  86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58<br />
  19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40<br />
  04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66<br />
  88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69<br />
  04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36<br />
  20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16<br />
  20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54<br />
  01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
  </samp></blockquote>
  <p>위에서 대각선 방향으로 연속된 붉은 수 네 개의 곱은 26 &times; 63 &times; 78 &times; 14 = 1788696 입니다.</p>
  <p>그러면 수평, 수직, 또는 대각선 방향으로 연속된 수 네 개의 곱 중 최댓값은 얼마입니까?</p></div>
  
  <br/>`
    document.getElementById('문제').innerHTML = 문제
    var result;
  
    document.getElementById('답').innerHTML = (result ?? '미해결')
  }
  function projectEuler12() {
    const 문제 = `<div id="content">
  
  
  <h2>500개 이상의 약수를 갖는 가장 작은 삼각수는?</h2>
  <h4 title="난이도 &#9749;">Problem 12</h4>
  
  <div class="info" style="float:right; font-size:90%;">
      <a target="_blank" href="https://projecteuler.net/problem=12">[ProjectEuler.net 원본]</a>
  </div>
  <div style="color:#666;font-size:80%; margin-top:10px;">
      출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
  <br/>
  
  <div class="problem_content">
      <p>1부터 n까지의 자연수를 차례로 더하여 구해진 값을 삼각수라고 합니다.<br/>
  예를 들어 7번째 삼각수는 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28이 됩니다.<br/>
  이런 식으로 삼각수를 구해 나가면 다음과 같습니다.</p>
  <blockquote>1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...</blockquote>
  <p>이 삼각수들의 약수를 구해 봅시다.</p>
  <blockquote><tt>
  <strong> 1</strong>: 1<br />
  <strong> 3</strong>: 1, 3<br />
  <strong> 6</strong>: 1, 2, 3, 6<br />
  <strong>10</strong>: 1, 2, 5, 10<br />
  <strong>15</strong>: 1, 3, 5, 15<br />
  <strong>21</strong>: 1, 3, 7, 21<br />
  <strong>28</strong>: 1, 2, 4, 7, 14, 28
  </tt></blockquote>
  <p>위에서 보듯이, 5개 이상의 약수를 갖는 첫번째 삼각수는 28입니다.</p>
  <p>그러면 500개 이상의 약수를 갖는 가장 작은 삼각수는 얼마입니까?</p></div>
  
  <br/>`
    var result
    document.getElementById('문제').innerHTML = 문제
    adder = 1
    삼각수 = 0
    while (true) {
      삼각수 += adder;
      if (약수의_겟수(삼각수) >= 500) {
        result = 삼각수;
        break
      }
      adder++
    }
    document.getElementById('답').innerHTML = (result ?? "미해결")
  }
  function projectEuler14() {
    const doc = `<div id="content">
  
  
    <h2>백만 이하로 시작하는 우박수 중 가장 긴 과정을 거치는 것은?</h2>
    <h4 title="난이도 &#9749;">Problem 14</h4>
    
    <div class="info" style="float:right; font-size:90%;">
        <a target="_blank" href="https://projecteuler.net/problem=14">[ProjectEuler.net 원본]</a>
    </div>
    <div style="color:#666;font-size:80%; margin-top:10px;">
        출제 일시 : 2012-01-03 19:11:35, &#9749;</div>
    <br/>
    
    <div class="problem_content">
        <p>양의 정수 n에 대하여, 다음과 같은 계산 과정을 반복하기로 합니다.</p>
    <p style="margin-left: 50.0px;">
     <span class="eqn"> <i>n</i> &rarr; <i>n</i> / 2 </span> (<span class="eqn"><i>n</i></span>이 짝수일 때)<br />
     <span class="eqn"><i>n</i> &rarr; 3 <i>n</i> + 1</span> (<span class="eqn"><i>n</i></span>이 홀수일 때)</p>
    <p>13에 대하여 위의 규칙을 적용해보면 아래처럼 10번의 과정을 통해 1이 됩니다.</p>
    <blockquote>13 &rarr; 40 &rarr; 20 &rarr; 10 &rarr; 5 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; 2 &rarr; 1</blockquote>
    <p>아직 증명은 되지 않았지만, 이런 과정을 거치면 어떤 수로 시작해도 마지막에는 1로 끝나리라 생각됩니다. <br/>
    <font size="-1">(역주: 이것은 콜라츠 추측 Collatz Conjecture이라고 하며, 이런 수들을 우박수 hailstone sequence라 부르기도 합니다)</font></p>
    <p>그러면, 백만(1,000,000) 이하의 수로 시작했을 때 1까지 도달하는데 가장 긴 과정을 거치는 수는 얼마입니까?</p>
    <p><b>참고:</b> 계산 과정에는 백만을 넘어가는 수가 나와도 괜찮습니다.</p></div>
    
    <br/>`
  
    var 우박수결과 = [];
    var result = 0;
    function 우박수(번호) {
      if (우박수결과[번호] != null) {
        return 우박수결과[번호];
      }
      if (번호 <= 1) {
        return 1;
      }
      if (번호 % 2 == 0) {
        return 우박수(번호 / 2) + 1;
      } else {
        return 우박수((번호 * 3) + 1) + 1;
      }
    }
    for (let i = 1; i <= 1000000; i++) {
      우박수결과[i] = 우박수(i);
      result = (result < 우박수결과[i] ? 우박수결과[i] : result);
    }
    document.getElementById('문제').innerHTML = doc;
    document.getElementById('답').innerHTML = (result ?? "미해결")
  }
  