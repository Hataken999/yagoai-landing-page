const fiturData = [
    {
        nama: "cepat",
        deskripsi: `Respon bot cepat. Kamu menunggu balasan doi seharian? Tenang saja, Yago AI akan langsung merespon pesanmu disaat itu juga tanpa perlu menunggu lama-lama`,
        icon: "fa-rocket"
    },
    {
        nama: "uptime 99%",
        deskripsi: `Bot akan selalu siap membantumu kapanpun dan dimanapun, karena kami menjamin Yago AI akan tetap online 99% (selama tidak ada masalah tentunya hehe).`,
        icon: "fa-server"
    },
    {
        nama: "privasi aman",
        deskripsi: `Kamu takut datamu tiba-tiba bocor? Jangan khawatir, karena semua datamu tersimpan dengan aman di database kami dan selalu dipantau setiap hari.`,
        icon: "fa-user-shield"
    },
    {
        nama: "banyak model AI",
        deskripsi: `Yago AI menyediakan banyak model AI yang dapat kamu gunakan. Contohnya seperti GPT-3.5 (default), Bing AI, Bard AI, Seneca AI, dan masih banyak lainnya.`,
        icon: "fa-layer-group"
    },
    {
        nama: "bantuan",
        deskripsi: `Kami siap selalu membantu pengguna yang memiliki kendala apapun dalam menggunakan bot Yago AI, jadi jangan ragu untuk chat kami ya.`,
        icon: "fa-headset"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const sidebarBtn = document.querySelector(".sidebar-btn");
    const footerYear = document.querySelector("#footerYear");

    fiturCard();

    sidebarBtn.addEventListener("click", sidebarToggle);
    footerYear.textContent = new Date().getFullYear();
});

function sidebarToggle() {
    const elAside = document.querySelector("aside");
    const elSidebar = document.querySelector(".sidebar-content");
    const sidebarBtn = document.querySelector(".sidebar-btn");
    const sidebarIcon = document.querySelector(".sidebar-btn i");

    elAside.classList.toggle("backdrop");
    elSidebar.classList.toggle("show");
    sidebarBtn.classList.toggle("show");
    sidebarIcon.classList.toggle("rotate");
    document.body.classList.toggle("overflow-hidden");
};

function fiturCard() {
    const fiturKonten = document.querySelector("#fitur .content");
    let elemen = '';

    fiturData.forEach(item => {
        elemen += `
        <article class="card">
            <header>
                <div class="icon">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div>
                    <h3>${item.nama}</h3>
                </div>
            </header>
            <div class="fitur-deskripsi">
                <p>${item.deskripsi}</p>
            </div>
        </article>
        `;
    });

    fiturKonten.innerHTML = elemen;
}