fetch('https://SEU_BACKEND_URL/api/products')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <strong>${product.name}</strong><br>
        R$ ${product.price.toFixed(2)}<br>
        Estoque: ${product.stock}
      `;
      list.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Erro ao obter produtos', err);
  });
