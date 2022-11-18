async function mapImageList() {
  const memesObject = [
    {
      "name": "chapolin",
      "path": "pictures/chapolin.jpg"
    },
    {
      "name": "chloe",
      "path": "pictures/chloe.jpg"
    },
    {
      "name": "funny-cat1",
      "path": "pictures/funny-cat1.jpg"
    },
    {
      "name": "funny-cat2",
      "path": "pictures/funny-cat2.jpg"
    },
  ];
  return memesObject;
}

async function createGallery(imagesList) {
  const memeSelector = document.querySelector("#memes-list");
  imagesList.forEach(picture => {
    let newOption = document.createElement("option");
    newOption.text = picture.name.toUpperCase();
    newOption.value = picture.path;
    memeSelector.appendChild(newOption);
  });
}

async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image");
  displayImage.style.backgroundImage = `url('${photo}')`;

  let image = document.querySelector("#display-image-bg");
  image.setAttribute("src", photo);
}

function enablePhotoUpload() {
  const imageInput = document.querySelector('#image-input');
  imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", async() => {
      const uploadImage = reader.result;
      await changeMemePicture(uploadImage);
    });
    reader.readAsDataURL(this.files[0]);
  });
}

async function main() {
  const memesImagesList = await mapImageList();
  enablePhotoUpload();
  await createGallery(memesImagesList);
  await changeMemePicture(memesImagesList[1].path);
}

main();
