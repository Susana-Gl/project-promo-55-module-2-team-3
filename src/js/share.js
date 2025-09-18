import domToImage from "dom-to-image"; 

const downloadButton = document.querySelector(".create-card-btn");

downloadButton.addEventListener("click", (event) => {
  event.preventDefault();

  domToImage.toJpeg(document.getElementById("preview-card"), { quality: 0.95})
  .then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "my-card.jpeg";
    link.href = dataUrl;
    link.click();
  });
});

