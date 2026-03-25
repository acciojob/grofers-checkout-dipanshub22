const getSum = () => {
  const prices = document.querySelectorAll('.prices');

  let total = 0;
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  let ans = document.getElementById('ans');

  if (!ans) {
    ans = document.createElement('div');
    ans.setAttribute('id', 'ans');
    document.body.appendChild(ans);
  }

  ans.textContent = total;
};