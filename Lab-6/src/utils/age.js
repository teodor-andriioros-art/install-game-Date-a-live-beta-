export function getAge(day, month, year) {
  if (day === '' || month === '' || year === '') {
    return null;
  }

  const d = Number(day);
  const m = Number(month);
  const y = Number(year);

  const birth = new Date(y, m, d);
  if (birth.getMonth() !== m) {
    return null;
  }

  const today = new Date();
  let age = today.getFullYear() - y;

  const hadBirthday =
    today.getMonth() > m || (today.getMonth() === m && today.getDate() >= d);
  if (!hadBirthday) {
    age = age - 1;
  }

  return age;
}
