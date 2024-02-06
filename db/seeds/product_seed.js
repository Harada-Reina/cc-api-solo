/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('product').del();
  await knex('product').insert([
    { id: 1, name: 'ちいかわ' },
    { id: 2, name: 'ハチワレ' },
    { id: 3, name: 'うさぎ' },
    { id: 4, name: 'モモンガ' },
    { id: 5, name: 'くりまんじゅう' },
    { id: 6, name: 'ラッコ' },
    { id: 7, name: 'シーサー' },
    { id: 8, name: 'キメラ' },
    { id: 9, name: 'ちいかわ(カニ)' },
    { id: 10, name: 'ハチワレ(カニ)' },
    { id: 11, name: 'うさぎ(ロブスター)' },
    { id: 12, name: 'ハチワレとうさぎ' },
    { id: 13, name: 'ハチワレとラッコ' },
    { id: 14, name: 'あのことでかつよ' },
    { id: 15, name: '水風呂' },
    { id: 16, name: '【レア】お布団' },
  ]);
};
