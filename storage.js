
export function saveUserData(data) {
  localStorage.setItem("userData", JSON.stringify(data));
}

export function loadUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}
