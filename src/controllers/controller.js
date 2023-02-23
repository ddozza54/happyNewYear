import User from "../models/User";

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  console.log(req.body);
  const { email, username, password, password2, name, contry } = req.body;
  //비번이 맞는지
  if (password == !password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Password Confirmation does not match",
    });
  }
  return res.redirect("/join");
};
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  //유저가 입력한 값을 받아온다
  //유저가 있는지 (username이 있는지) 확인한다.
  //유
  //유저의 정보를 넘겨준다
};
