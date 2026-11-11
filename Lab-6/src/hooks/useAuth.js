import { useState } from 'react';
import { request } from '../api';
import usePost from './usePost';

const STORAGE_KEY = 'user';

function readUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

export default function useAuth() {
  const [user, setUser] = useState(readUser);
  const { post } = usePost();

  function saveUser(newUser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
  }

  async function register(email, password) {
    const found = await request('/users?email=' + encodeURIComponent(email));

    if (found.length > 0) {
      throw new Error('Користувач з такою поштою вже існує');
    }

    const created = await post('/users', { email, password });
    saveUser({ id: created.id, email: created.email });
  }

  async function login(email, password) {
    const found = await request(
      '/users?email=' +
        encodeURIComponent(email) +
        '&password=' +
        encodeURIComponent(password)
    );

    if (found.length === 0) {
      throw new Error('Невірна пошта або пароль');
    }

    saveUser({ id: found[0].id, email: found[0].email });
  }

  function loginAsGuest() {
    saveUser({ id: null, email: '', guest: true });
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return { user, register, login, loginAsGuest, logout };
}
