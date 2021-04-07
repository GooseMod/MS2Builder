export const sendToast = (_id, { header, content, type, buttons }) => {
  // TODO: implement full toast in future instead of just small current GM toast

  goosemodScope.showToast(content);
};