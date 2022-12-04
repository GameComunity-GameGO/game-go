export const setMessageData = (messageData: any) => ({
  type: "SET_MESSAGE_DATA",
  data: messageData,
});
export const setCurrentMessageData = (setCurrentMessageData: any) => ({
  type: "SET_CURRENT_MESSAGE_DATA",
  data: setCurrentMessageData,
});

export const setNotificationCount = (setNotificationCount: any) => ({
  type: "SET_NOTIFICATION_COUNT",
  data: setNotificationCount,
});

export const setCurrentMessageClear = (setCurrentMessageClear: any) => ({
  type: "SET_CURRENT_MESSAGE_CLEAR",
  data: setCurrentMessageClear,
});
