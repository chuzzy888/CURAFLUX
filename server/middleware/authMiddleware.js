// import admin from "../firebase.js";

// export const verifyFirebaseToken = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: "Unauthorized" });
//   }
// };

import admin from "../firebase.js";

export const verifyFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized" });
  }
};
