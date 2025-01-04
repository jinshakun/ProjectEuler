
/**
케쉬
@param {}
*/
let cache = {};

/**
음성 읽어 주기
*/
const speakDoc = (sentence) => {
  const speak = new SpeechSynthesisUtterance(sentence);
  window.speechSynthesis.speak(speak);
}


cache.fibo = { 0: 0n };
/**
피보나치
케쉬를 사용해서속도를 높였다.
@param cache.fibo -{값:결과}
@param {Number} num
@return {BigInt} - BigInt
*/
const fibo = (num) => {
  
  if (num < 1) {
    return 0n;
  }
  if (num <= 2) {
    return 1n;
  }

  let first = (cache.fibo[num - 2] == undefined ? cache.fibo[num - 2] = fibo(num - 2) : cache.fibo[num - 2]);
  let last = (cache.fibo[num - 1] == undefined ? cache.fibo[num - 1] = fibo(num - 1) : cache.fibo[num - 1]);
  return first + last;
}

/**
순열 (Permutation)
순열(중복 허용안함)은 약간 복잡합니다.

참고로 splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
@param {array} array []-고정값
@param {String[]} eachElements 배열입력
@param {String[]} outArr 결과값출력
*/
const permute = (array, eachElements, outArr) => {
  let chr

  for (let i = 0; i < eachElements.length; i++) {
    chr = eachElements.splice(i, 1)[0] // i위치에서 1만큼 제거한 배열의 0번 요소 
    array.push(chr)

    if (eachElements.length == 0) {
      outArr.push(array.slice())
    }

    permute(array, eachElements, outArr)
    eachElements.splice(i, 0, chr) // i 위치에서 0만큼 제거(=아무것도 안함)한 뒤 chr을 i 위치에 삽입
    array.pop()
  }
  return

}

function getPermutation(elements) {
  // 기저사례: 원소가 하나만 있으면 자기 자신을 반환한다.
  if (elements.length === 1) return [elements];
  const permutations = [];

  // 첫 번째 원소를 제외한 순열을 구한다.
  const smallerPermutations = getPermutation(elements.slice(1));

  // 첫 번째 원소를 넣을 수 있는 모든 곳에 넣어준다.
  const fisrtElement = elements[0];
  smallerPermutations.forEach(permutation => {
    for (let positionIndex = 0; positionIndex <= permutation.length; positionIndex++) {
      const prefix = permutation.slice(0, positionIndex);
      const suffix = permutation.slice(positionIndex);
      permutations.push(prefix.concat([fisrtElement], suffix));
    }
  });

  return permutations;
}


/**팩토리알
@param {Number} num 숫자
@return {BigInt} num번째 팩토리알(BigInt)
*/
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  /** BigInt */
  let result = BigInt(num) * BigInt(factorial(num - 1))

  return result;
}

/**문자열 역배열
@param {String} s 문자열
@return {String} 역배열
*/
function reverse(s) {
  return s.split("").reverse().join("");
}

/**대칭수 찾기
@param str {String} 문자열
@return {boolean} 대칭수인지 판별
*/
function palindrome(str) {
  return (str == reverse(str) ? true : false)
}

/**
소인수
@param number {Number}
@return {Array}

*/
function prime(number) {
  let prime = number
  let result = []
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (prime % i == 0) {
      result.push(i)
      prime /= i
    }
  }
  return result
}

/** 최대공양수 */
function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

/** 최소공배수 */
function lcm(a, b) {
  return a * b / gcd(a, b);
}

/** 소수판별
@param {Number} num
@return {Boolean}
*/
function isPrime(num) {
  /** 음수와 1을 소수가 아니다 */
  if (num <= 1) {
    return false;
  }

  /** 2는 짝수 중 유일한 소수이다 */
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  /** 이제 num이 홀수 일때 다른 수에 나눠지는지 판별한다 */

  /** Math.sqrt(num) 즉, √num까지 나눠 떨어지는지 검사한다 */
  /** 원리는 아래글 "에라토스테네스의 체" 참고 */

  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {

    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}
/**
자기자신을 포함을 약수
*/
function 약수(number) {
  if (number == 1) {
    return [1]
  }
  let result = []
  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      result.push(i)
    }
  }
  result.push(number)
  return result
}

/**
약수의 겟수
@param N {Number}
*/
function 약수의_겟수(N) {
  let count = 0
  for (let i = 1; i * i <= N; i++) {
    if (i * i == N) count++;
    else if (N % i == 0) count += 2;
  }
  return count;
}

/** 배열의 최대값 */
function maxOfArray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

/**
완전수
@param num {Number}
@return 완전수,과잉수,부족수
*/
function pNumber(num) {
  const sum = 약수(num).reduce((a, b) => (a + b)) - num;
  if (num == sum) {
    return '완전수';
  } else if (num < sum) {
    return '과잉수';
  }
  return '부족수';

}
