import supabase from './db.js';

export async function login(email, senha) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: senha
  });

  if (error) {
    alert('Erro no login');
  } else {
    window.location.href = 'dashboard.html';
  }
}