function reverse(s){
    return s.split("").reverse().join("");
  } // 문자열 역배열
function prime(number)  {
  var prime = number
  var result = []
  for (var i=2 ; i<Math.sqrt(number) ; i++){
    if (prime % i==0) {
      result.push(i)
      prime /= i
    }
  }
  return result
} // 소인수
function gcd(a,b){ 
  return b ? gcd(b, a%b) : a; 
} // 최대공약수
function lcm(a,b){
  return a * b / gcd(a,b);
} // 최소공배수
function isPrime(num) {
  if(num <= 1) { // 음수와 1은 소수가 아니다
    return false;
  }
  // 2는 짝수 중 유일한 소수이다
  if( num % 2 === 0) { 
    return num === 2 ? true : false;
  }
  // 이제 num이 홀수 일때 다른 수에 나눠지는지 판별한다
  
  // Math.sqrt(num) 즉, √num까지 나눠 떨어지는지 검사한다
  // 원리는 아래글 "에라토스테네스의 체" 참고
  const sqrt = parseInt(Math.sqrt(num));
  for( let divider = 3; divider <= sqrt; divider += 2) {
    if(num % divider === 0) {
      return false;
    }
  }
  return true;
} // 소수판별
function 약수(number) {
  if ( number == 1 ) {
    return [1]
  }
  let result = []
  for (var i = 1 ; i <= number/2 ; i++) {
    if (number % i == 0 ) {
      result.push(i)
    }
  }
  result.push(number)
  return result
}
function 약수의_겟수(N) {
  let count = 0
  for (var i = 1; i * i <= N; i++) {
	  if (i * i == N) count++;
	  else if (N % i == 0) count += 2;
  }
  return count;
}
function maxOfArray(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}