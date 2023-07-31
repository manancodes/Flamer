const torch = document.getElementsByClassName("torch")[0];
let torchWidth = torch.clientWidth;
let torchHeight = torch.clientHeight;
const torchLight = document.getElementsByClassName("torch__light")[0];

const lamp = document.getElementsByClassName("lamp")[0];
let lampHeight = lamp.clientHeight;
let lampWidth = lamp.clientWidth;

const handleLampMove = (e) => {
  const torchPosX = e.clientX - torchWidth;
  const torchPosY = e.clientY - torchHeight;

  torchLight.style.top = 0;
  torchLight.style.left = 0;
  torchLight.style.transform = `translate(${torchPosX}px, ${torchPosY}px)`;

  const lampPosX = e.clientX - lampWidth / 2;
  const lampPosY = e.clientY - lampHeight / 2;

  lamp.style.top = 0;
  lamp.style.left = 0;
  lamp.style.transform = `translate(${lampPosX}px, ${lampPosY}px)`;
};

torch.addEventListener("mousemove", handleLampMove);
torch.addEventListener("touchstart", handleLampMove);
torch.addEventListener("touchend", handleLampMove);

window.addEventListener("resize", () => {
  torchWidth = torch.clientWidth;
  torchHeight = torch.clientHeight;
  lampHeight = lamp.clientHeight;
  lampWidth = lamp.clientWidth;
});
