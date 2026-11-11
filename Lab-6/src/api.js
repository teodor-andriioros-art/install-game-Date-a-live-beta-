export const API_URL = 'http://localhost:3001';

export async function request(path, options) {
  let response;

  try {
    response = await fetch(API_URL + path, options);
  } catch {
    throw new Error(
      'Не вдалося з’єднатися із сервером. Перевірте, чи запущено json-server.'
    );
  }

  if (!response.ok) {
    throw new Error('Помилка сервера: ' + response.status);
  }

  return response.json();
}
