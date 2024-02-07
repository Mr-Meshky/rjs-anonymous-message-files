import html2canvas from "html2canvas";
import image from "./../assets/images/story.png";
import toast from "react-hot-toast";

const createStory = (text, name) => {
  const link = location.origin.split("//")[1];

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const img = document.createElement("img");
  img.src = image;
  const textHtml = document.createElement("div");
  textHtml.classList.add("text");
  textHtml.innerText = text;
  const nameHtml = document.createElement("div");
  nameHtml.classList.add("name");
  nameHtml.innerText = name;
  const linkHtml = document.createElement("div");
  linkHtml.classList.add("link");
  linkHtml.innerText = link;

  wrapper.appendChild(img);
  wrapper.appendChild(nameHtml);
  wrapper.appendChild(textHtml);
  wrapper.appendChild(linkHtml);
  document.body.appendChild(wrapper);

  html2canvas(wrapper)
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = "story.png";
      link.href = canvas.toDataURL("image/jpg");
      link.click();

      toast.success("استوری پیام مورد نظر با موفقیت دانلود شد");
    })
    .catch((err) => {
      toast.error("مشکلی پیش آمد مجدد تلاش نمایید");
    });
  document.body.removeChild(wrapper);
};

export { createStory };
