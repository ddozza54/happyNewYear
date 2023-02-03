export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const login = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const join = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
