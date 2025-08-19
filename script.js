document.addEventListener('DOMContentLoaded', () => {

    // --- DATA MENU LENGKAP ---
    const menu = [
        // Minuman Panas
        { id: 'kopi-kapal-api', name: 'Kopi Kapal Api', price: 5000, category: 'minuman-panas-items', image: 'images/kapal_api.jpg' },
        { id: 'kopi-liong', name: 'Kopi Liong', price: 5000, category: 'minuman-panas-items', image: 'images/kopi_liong.jpg' },
        { id: 'kopi-abc-susu', name: 'Kopi ABC Susu', price: 5000, category: 'minuman-panas-items', image: 'images/abc_susu.jpg' },
        { id: 'indocaffe-coffeemix-panas', name: 'Indocaffe Coffeemix', price: 5000, category: 'minuman-panas-items', image: 'images/coffeemix.jpg' },
        { id: 'goodday-mocacinno-panas', name: 'Good Day Mocacinno', price: 6000, category: 'minuman-panas-items', image: 'images/goodday_mocacinno.jpg' },
        { id: 'goodday-cococinno-panas', name: 'Good Day Cococinno', price: 6000, category: 'minuman-panas-items', image: 'images/goodday_cococinno.jpg' },
        { id: 'goodday-original-panas', name: 'Good Day Original', price: 6000, category: 'minuman-panas-items', image: 'images/goodday_original.jpg' },
        { id: 'goodday-vanilalatte-panas', name: 'Good Day Vanilalatte', price: 6000, category: 'minuman-panas-items', image: 'images/goodday_vanilalatte.jpg' },
        { id: 'goodday-carrebian-nuts-panas', name: 'Good Day Carrebian Nuts', price: 6000, category: 'minuman-panas-items', image: 'images/goodday_carrebiannuts.jpg' },
        { id: 'teh-manis-panas', name: 'Teh Manis Panas', price: 4000, category: 'minuman-panas-items', image: 'images/teh_manis_panas.jpg' },
        { id: 'teh-tarik-panas', name: 'Teh Tarik Panas', price: 4000, category: 'minuman-panas-items', image: 'images/teh_tarik.jpg' },
        { id: 'jahe-susu', name: 'Jahe Susu', price: 7000, category: 'minuman-panas-items', image: 'images/jahe_susu.jpg' },
        { id: 'susu-putih-panas', name: 'Susu Putih Panas', price: 4000, category: 'minuman-panas-items', image: 'images/susu_putih.jpg' },
        { id: 'susu-coklat-panas', name: 'Susu Coklat Panas', price: 4000, category: 'minuman-panas-items', image: 'images/susu_coklat.jpg' },
        
        // Minuman Dingin
        { id: 'indocaffe-coffeemix-dingin', name: 'Es Indocaffe Coffeemix', price: 5000, category: 'minuman-dingin-items', image: 'images/coffeemix.jpg' },
        { id: 'goodday-mocacinno-dingin', name: 'Es Good Day Mocacinno', price: 6000, category: 'minuman-dingin-items', image: 'images/goodday_mocacinno.jpg' },
        { id: 'goodday-cococinno-dingin', name: 'Es Good Day Cococinno', price: 6000, category: 'minuman-dingin-items', image: 'images/goodday_cococinno.jpg' },
        { id: 'goodday-original-dingin', name: 'Es Good Day Original', price: 6000, category: 'minuman-dingin-items', image: 'images/goodday_original.jpg' },
        { id: 'goodday-vanilalatte-dingin', name: 'Es Good Day Vanilalatte', price: 6000, category: 'minuman-dingin-items', image: 'images/goodday_vanilalatte.jpg' },
        { id: 'goodday-carrebian-nuts-dingin', name: 'Es Good Day Carrebian Nuts', price: 6000, category: 'minuman-dingin-items', image: 'images/goodday_carrebiannuts.jpg' },
        { id: 'es-teh-manis', name: 'Es Teh Manis', price: 4000, category: 'minuman-dingin-items', image: 'images/es_teh_manis.png' },
        { id: 'es-teh-tarik', name: 'Es Teh Tarik', price: 4000, category: 'minuman-dingin-items', image: 'images/teh_tarik.jpg' },
        { id: 'es-susu-putih', name: 'Es Susu Putih', price: 4000, category: 'minuman-dingin-items', image: 'images/susu_putih.jpg' },
        { id: 'es-susu-coklat', name: 'Es Susu Coklat', price: 4000, category: 'minuman-dingin-items', image: 'images/susu_coklat.jpg' },
        
        // Indomie & Makanan Berat
        { id: 'indomie-soto-ayam', name: 'Indomie Soto Ayam', price: 8000, category: 'indomie-items', image: 'images/indomie_soto.png' },
        { id: 'indomie-kari-ayam', name: 'Indomie Kari Ayam', price: 8000, category: 'indomie-items', image: 'images/indomie_kari.jpg' },
        { id: 'indomie-ayam-bawang', name: 'Indomie Ayam Bawang', price: 8000, category: 'indomie-items', image: 'images/indomie_ayambawang.jpg' },
        { id: 'indomie-goreng', name: 'Indomie Goreng', price: 8000, category: 'indomie-items', image: 'images/indomie_goreng.jpg' },
        { id: 'indomie-goreng-rendang', name: 'Indomie Goreng Rendang', price: 8000, category: 'indomie-items', image: 'images/indomie_gorengrendang.jpg' },
        { id: 'telur', name: 'Telur', price: 6000, category: 'indomie-items', image: 'images/telur_rebus.png' },
        { id: 'popmie-ayam', name: 'Popmie Ayam', price: 6000, category: 'indomie-items', image: 'images/popmie_ayam.jpg' },
        { id: 'popmie-kari', name: 'Popmie Kari', price: 6000, category: 'indomie-items', image: 'images/popmie_kari.jpg' },
        { id: 'popmie-baso', name: 'Popmie Baso', price: 6000, category: 'indomie-items', image: 'images/popmie_baso.jpg' },
        { id: 'popmie-soto', name: 'Popmie Soto', price: 6000, category: 'indomie-items', image: 'images/popmie_soto.jpg' },
        { id: 'popmie-goreng', name: 'Popmie Goreng', price: 6000, category: 'indomie-items', image: 'images/popmie_goreng.jpg' },
        
        // Cemilan & Gorengan
        { id: 'tempe-goreng', name: 'Tempe Goreng', price: 2000, category: 'cemilan-items', image: 'images/tempe.png' },
        { id: 'bakwan-goreng', name: 'Bakwan Goreng', price: 2000, category: 'cemilan-items', image: 'images/bakwan.png' },
        { id: 'roti-bakar', name: 'Roti Bakar', price: 8000, category: 'cemilan-items', image: 'images/roti_bakar.png' },
        { id: 'sukro', name: 'Sukro', price: 8000, category: 'cemilan-items', image: 'images/sukro.jpg' },
    ];

    // --- VARIABEL & DOM ELEMENTS ---
    const cart = {};
    const cartCountSpan = document.getElementById('cart-count');
    const modal = document.getElementById('cart-modal');
    const checkoutButton = document.getElementById('checkout-button');
    const closeButton = document.querySelector('.close-button');

    // --- FUNGSI UTAMA ---
    function renderMenu() {
        document.getElementById('minuman-panas-items').innerHTML = '';
        document.getElementById('minuman-dingin-items').innerHTML = '';
        document.getElementById('indomie-items').innerHTML = '';
        document.getElementById('cemilan-items').innerHTML = '';

        menu.forEach(item => {
            const container = document.getElementById(item.category);
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Rp ${item.price.toLocaleString('id-ID')}</p>
                <button class="add-to-cart-btn" data-id="${item.id}">Tambah</button>
            `;
            container.appendChild(itemDiv);
        });
    }

    function renderCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.innerHTML = '';
        let total = 0;
        
        for (const itemId in cart) {
            const item = menu.find(i => i.id === itemId);
            const quantity = cart[itemId];
            if (item) {
                const itemTotal = item.price * quantity;
                total += itemTotal;
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item-row');
                cartItemDiv.innerHTML = `
                    <p>${item.name} x${quantity} - Rp ${itemTotal.toLocaleString('id-ID')}</p>
                    <div class="cart-item-actions">
                        <button class="remove-from-cart-btn" data-id="${itemId}">Hapus</button>
                        <button class="decrease-qty-btn" data-id="${itemId}">-</button>
                        <button class="increase-qty-btn" data-id="${itemId}">+</button>
                    </div>
                `;
                cartItemsDiv.appendChild(cartItemDiv);
            }
        }
        document.getElementById('cart-total').textContent = total.toLocaleString('id-ID');
        cartCountSpan.textContent = Object.values(cart).reduce((a, b) => a + b, 0);
    }

    // --- EVENT LISTENERS ---
    document.querySelector('main').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const itemId = e.target.dataset.id;
            if (cart[itemId]) {
                cart[itemId]++;
            } else {
                cart[itemId] = 1;
            }
            renderCart();
        }
    });

    document.querySelector('.cart-icon').addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Event listener untuk tombol Hapus, +, - di modal
    document.getElementById('cart-modal').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('remove-from-cart-btn')) {
            const itemId = target.dataset.id;
            delete cart[itemId];
            renderCart();
        } else if (target.classList.contains('increase-qty-btn')) {
            const itemId = target.dataset.id;
            if (cart[itemId]) {
                cart[itemId]++;
            }
            renderCart();
        } else if (target.classList.contains('decrease-qty-btn')) {
            const itemId = target.dataset.id;
            if (cart[itemId] > 1) {
                cart[itemId]--;
            } else {
                delete cart[itemId];
            }
            renderCart();
        }
    });

    checkoutButton.addEventListener('click', () => {
        const customerName = document.getElementById('customer-name').value;
        const paymentMethodElement = document.querySelector('input[name="payment-method"]:checked');
        
        if (!customerName) {
            alert('Mohon masukkan nama kamu sebelum memesan.');
            return;
        }

        if (Object.keys(cart).length === 0) {
            alert('Keranjang belanja masih kosong, silakan pilih menu terlebih dahulu.');
            return;
        }

        // Ambil nilai metode pembayaran
        const paymentMethod = paymentMethodElement ? paymentMethodElement.value : 'Tidak diketahui';

        // Buat pesan WhatsApp dengan format baru
        let orderList = `Assalamualaikum Kang, ane mau order\n\n`;
        orderList += `Menu yang dipesan:\n`;
        for (const itemId in cart) {
            const item = menu.find(i => i.id === itemId);
            if (item) {
                orderList += `• ${item.name} (${cart[itemId]}x)\n`;
            }
        }
        
        const total = Object.keys(cart).reduce((sum, itemId) => {
            const item = menu.find(i => i.id === itemId);
            return sum + (item.price * cart[itemId]);
        }, 0);
        
        orderList += `\nTotal Harga: Rp ${total.toLocaleString('id-ID')}`;
        orderList += `\nMetode Pembayaran: ${paymentMethod}`;
        orderList += `\n\nAtas Nama: ${customerName}`;

        // GANTI 'NOMOR_WA_ANDA' dengan nomor WhatsApp kasir
        const phoneNumber = '6285946420118';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderList)}`;
        
        window.open(whatsappUrl, '_blank');
    });

    // --- INISIALISASI ---
    renderMenu();
});
