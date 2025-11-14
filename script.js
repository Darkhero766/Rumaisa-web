const modal = document.getElimentById('productModal')
const closeBtn = document.querySelector('.close')
const modalImg = document.getElimentById("modalImg")
const modalTitle = document.getElimentById("modalTitle")
const modalNotes = document.getElimentById("modalNotes")

document.querySelectorAll(".viewBtn").forEach(btn=> {
   btn.addEventListener("click", e=> {
      const product = e.target.closest(".product");
      modalTitle.textContent = product.querySelector("h3").textContent;
      modalNotes.textContent = product.querySelector("p").textContent;
      modalImg.src = product.querySelector("img").src;
      modal.style.display = "flex";
   });


});

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none";};


document.getElementById("searchBox").addEventListener("input", e=> {
   const term = e.target.value.toLowerCase();
   document.querySelectorAll(".product").forEach(prod => {
      const name = prod.getAttribute("data-name").toLowerCase();
      prod.style.display = name.includes(term) ? "block" : "none";

    });
   });

document.getElementById("quizBtn").addEventListener("click", ()=> {
   alert("scent finder coomming sonon")
});


