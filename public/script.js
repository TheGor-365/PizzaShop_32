function test() {
  let x = window.localStorage.getItem('aaa');

  window.localStorage.setItem('aaa', 555);
  alert(x);

}
