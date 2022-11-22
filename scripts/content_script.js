let i = 0;
// alert(`켜진횟수 ${String(i)}`);
const host = "m98.mailplug.com";
const destination = "https://m98.mailplug.com/ra/worknote/users/check/";
const login = "https://m98.mailplug.com/member/login";
const middle = "/webmail/lists";
const inTheCompany = "출근";
if (location.host !== host) {
  location.href = destination;
} else {
  if (location.pathname === "/member/login") {
    document.querySelector("#cid").value = "kkn";
    document.querySelector("#cpw").value = "1234";
    document.querySelector("#btnlogin").click();
  }
  if (location.pathname === middle) {
    location.href = destination;
  }
  if (location.href === destination) {
    const loop = setInterval(() => {
      const target = document.querySelector(
        "#commute-check > div.dashboard-left > div.dashboard.today > div.dashboard-cont > div.today-commute > button.commute-button.able"
      );
      if (target) {
        clearInterval(loop);
        if (target.innerText.trim() === inTheCompany) {
          target.style.backgroundColor = "green";
        }
      }
    }, 16);
  }
}

i++;
// console.log(chrome)
