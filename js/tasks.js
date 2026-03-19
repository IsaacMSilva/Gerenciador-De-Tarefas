import supabase from './db.js';

export async function criarTarefa(titulo) {
  const user = await supabase.auth.getUser();

  if (!user.data.user) return;

  const { data, error } = await supabase
    .from('tasks')
    .insert([
      {
        titulo,
        status: 'a_fazer',
        user_id: user.data.user.id
      }
    ])
    .select();

  if (error) {
    console.error(error);
    return;
  }

  return data;
}

export async function listarTarefas() {
  const user = await supabase.auth.getUser();

  if (!user.data.user) return [];

  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', user.data.user.id);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function atualizarStatus(id, novoStatus) {
  const { error } = await supabase
    .from('tasks')
    .update({ status: novoStatus })
    .eq('id', id);

  if (error) {
    console.error(error);
  }
}