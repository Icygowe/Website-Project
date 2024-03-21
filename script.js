function previewImage() {
    var input = document.getElementById('imageInput');
    var preview = document.getElementById('imagePreview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.innerHTML = '<img id="source-img" src="' + e.target.result + '" alt="Preview" style="width: 100%;">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        preview.innerHTML = '';
    }
}

function upload(caption="0 comment"){
    let comment = document.getElementById('comment').value;
    let postSection = document.getElementById('postSection');
    var sourceImg = document.getElementById('source-img');
    // Create a new HTML into the postSection
    postSection.innerHTML += `
    <div class="comment-section">
        <h2>${comment}</h2>
        <div class="comment">
            <img src=${JSON.stringify(sourceImg.src)} style="width: 99%;" alt="Avatar">
            <p>${caption}</p>
            <div class="comment-footer">
                <button>Like</button>
                <button>Reply</button>
            </div>
        </div>
    </div>
    `
}