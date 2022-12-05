module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "lianna" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        error: "username or password is wrong!",
      });
    }
  } else if (req.method === "POST" && req.path === "/register") {
    return res.status(200).json({
      user: {
        token: new Date().getTime(),
      },
    });
  }
  next();
};
