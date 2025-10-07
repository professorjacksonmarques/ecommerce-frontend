fetch('https://ecommerce-backend-us6o.onrender.com/api/products')
  .then(res => {
    if (!res.ok) throw new Error('Falha ao buscar produtos: ' + res.status);
    return res.json();
  })
  .then(products => {
    const list = document.getElementById('product-list');
    if (!list) return;

    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <strong>${p.nome}</strong><br>
        R$ ${Number(p.preco).toFixed(2)}<br>
        Estoque: ${p.estoque}
      `;
      list.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Erro ao obter produtos', err);
  });
