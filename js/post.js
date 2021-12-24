function previewFiles() {
  var preview = document.querySelector("#preview");
  var PostImage = document.querySelector("#postImgs").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild(image);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (PostImage) {
    [].forEach.call(PostImage, readAndPreview);
  }
}
