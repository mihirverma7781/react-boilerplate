export const getTokenLocal = () => {
  return localStorage.getItem("userToken");
};

export const getUserLocal = () => {
  localStorage.getItem("userInfo");
};

export const setTokenLocal = (token) => {
  localStorage.setItem("userToken", token);
};

export const setUserLocal = (user) => {
  localStorage.setItem("userInfo", user);
};

