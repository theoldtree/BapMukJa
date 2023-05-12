const initialInfo = {};

export function userReducer(state = initialInfo, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        userInfo: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
