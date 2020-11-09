export const postState = async(state) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/states`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  });

  const json = await res.json();

  if(!res.ok) throw state;

  return json;

};
