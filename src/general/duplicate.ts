export const duplicate = (pu) => {
  var address = pu.maketext();
  if (pu.mmode === "solve") {
    address = address + "&l=solvedup";
  }
  window.open(address);
};
