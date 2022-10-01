const faqContentList = document.querySelectorAll(".card__faq-content");

faqContentList.forEach((faq) =>
  faq.addEventListener("toggle", () => {
    if (faq.open) closeOtherFAQs(faq, faqContentList);
  })
);

function closeOtherFAQs(faqSelected, faqList) {
  [...faqList]
    .filter((n) => n != faqSelected)
    .forEach((n) => n.removeAttribute("open"));
}
