  
function checkAuth(req, res, next) {
    const { user } = req.session;
    // if user not logged in, send 401 error
    if (!user) {
      return res.status(401).json({
        error: 'This shite isnt working',
      });
    } else {
      next();
    }
  }
  
  module.exports = checkAuth;