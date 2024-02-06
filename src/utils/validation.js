function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function slugValidation(slug) {
  const slugRegex = /^[a-zA-Z0-9-]{3,25}$/;
  return !slugRegex.test(slug);
}

export { validateEmail, slugValidation };
