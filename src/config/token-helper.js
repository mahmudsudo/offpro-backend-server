const jwt = require("jsonwebtoken");

class TokenHelper {
  static async verifyToken(token) {
    try {
      if (!token) {
        throw new Error("No token provided");
      }

      const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET, {
        maxAge: "12h", // or 3600 * 5 = 12 hours
      });

      return verifiedToken;
    } catch (error) {
      return false;
    }
  }

  static async createToken(payload) {
    try {
      if (!payload) {
        throw new Error("No payload provided");
      }

      const signedToken = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "12h", // or 3600 * 5 = 12 hours
      });

      return signedToken;
    } catch (error) {
      return false;
    }
  }
}

module.exports = TokenHelper;
