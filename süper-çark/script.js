let wheel = document.querySelector('.wheel'),
  döndürmeBtn = document.querySelector('.döndürmeBtn'),
  value = Math.ceil(Math.random() * 2000);

döndürmeBtn.onclick = function () {
  wheel.style.transform = 'rotate(' + value + 'deg)';
  value += Math.ceil(Math.random() * 2000);
};