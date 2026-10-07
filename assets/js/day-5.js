var images = [];
for(let i = 1; i <= 16; i++)
    images.push(`../../images/day-5/1 (${i}).jpg`);

const container = document.getElementById("gallery-mansonry");

const htmlImages = images.map((url, i) => `<div class="masonry-item" style="cursor: pointer;"><img src="${url}" alt="Day 5 Photo" class="img-fluid" id="img-${i}" data-index="${i}"></div>`).join("");

container.innerHTML = htmlImages;

const modal = new bootstrap.Modal(document.getElementById("modalGalerie"));
const imgModal = document.getElementById("imgModal");

function showImage(index) {
    indexCurent = index;
    imgModal.src = images[index];
    imgModal.dataset.index = index;
}

container.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        const index = parseInt(e.target.dataset.index);  
        showImage(index);
        modal.show();
    }
})

document.getElementById('btnPrev').addEventListener('click', function() {
    let urmatorulIndex = indexCurent === 0 ? images.length - 1 : indexCurent - 1;
    showImage(urmatorulIndex);
});

document.getElementById('btnNext').addEventListener('click', function() {
    let urmatorulIndex = indexCurent === images.length - 1 ? 0 : indexCurent + 1;
    showImage(urmatorulIndex);
});

document.addEventListener('keydown', function(e) {
    if (document.getElementById('modalGalerie').classList.contains('show')) {
        if (e.key === "ArrowRight") document.getElementById('btnNext').click();
        if (e.key === "ArrowLeft") document.getElementById('btnPrev').click();
    }
});