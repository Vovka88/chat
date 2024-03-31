const loginUser = { flexDirection: "row-reverse", backgroundColor: "#2F70AF", borderRadius: "20px 20px 0 20px" };

const otherUsers = {
    backgroundColor: "#806491",
    borderRadius: "20px 20px 20px 0"
};

export function styleMessageByUser(messages, user) {
  return messages.uid === user.id ? loginUser : otherUsers;
}
