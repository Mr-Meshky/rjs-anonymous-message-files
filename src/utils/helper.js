const isEnglish = (text) => {
  const englishTextRegex = /^[a-zA-Z0-9\s,*?><@!@#$%^&*()~`]+$/;
  return englishTextRegex.test(text);
};

const isPersian = (text) => {
  const persianTextRegex = /^[\u0600-\u06FF\s]+$/;
  return persianTextRegex.test(text);
};

const whatLanguage = (text) => {
  if (isPersian(text)) {
    return "rtl";
  } else if (isEnglish(text)) {
    return "ltr";
  } else {
    return "rtl";
  }
};

const toIranianTime = (time) => {
  let initialDate = new Date(time);
  let millisecondsToAdd = 3.3 * 64 * 60 * 1000;
  let finalDate = new Date(
    initialDate.getTime() + millisecondsToAdd - 73 * 1000
  );

  return finalDate.toLocaleTimeString("fa-IR");
};

export { whatLanguage, isPersian, isEnglish, toIranianTime };
