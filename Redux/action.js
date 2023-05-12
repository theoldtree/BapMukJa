export const updateInfo = (userInfo) => {
  return {
    type: "UPDATE_USER",
    payload: userInfo,
  };
};
