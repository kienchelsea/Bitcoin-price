setInterval(function(){ mapData(); }, 3000)


async function getData() {
    const res = await fetch('https://api.coinbase.com/v2/prices/spot?currency=USD');
    const rs = await res.json();
    return rs;
}

async function mapData(){
    const rs = await getData();
    console.log(rs);
    const h2 = document.getElementById('btc');
    h2.innerHTML = `
        <tr>
            <th>Giá hiện tại :</th>
        </tr>
        <tr>
            <th>${rs.data.amount}${rs.data.currency}</th>
        </tr>`;
    const table = document.getElementById('bang');
    table.innerHTML = `
        <tr>
            <th>Coin</th>
            <th>Giá hiện tại</th>
            <th>Cài đặt giá</th>
            <th>Trong khoảng</th>
            <th>Thong báo tới</th>
            <th>Chỉnh sửa/xóa</th>
        </tr>
        <tr style="text-align: center;">
            <td>${rs.data.base}</td>
            <td>${rs.data.amount}${rs.data.currency}</td>
            <td>Tăng $2000</td>
            <td>15m</td>
            <td>@minh</td>
            <td>hình bút/hình thùng rác</td>
        </tr>`;
}