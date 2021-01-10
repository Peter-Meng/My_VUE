export default {
  SET_PAYDETAILSDATA(state, payDetailsData) {
    if (payDetailsData) {
      state.payDetailsData = payDetailsData;
    } else {
      state.payDetailsData = {};
    }
  },
  SET_MESSAGEDETAILSDATA(state, messageDetailsData) {
    if (messageDetailsData) {
      state.messageDetailsData = messageDetailsData;
    } else {
      state.messageDetailsData = {};
    }
  }
};
