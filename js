 
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var thumbnails = document.querySelectorAll(".thumbnail");
    var closeBtn = document.getElementsByClassName("close")[0];
    var nextBtn = document.getElementById("next");
    var prevBtn = document.getElementById("prev");

    var currentIndex = 0;
    var images = Array.from(thumbnails).map(thumbnail => thumbnail.src);

    function showImage(index) {
        modalImg.src = images[index];
        currentIndex = index;
        modal.style.display = "flex";
    }

    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener("click", function() {
            showImage(index);
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    nextBtn.onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    prevBtn.onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
});
