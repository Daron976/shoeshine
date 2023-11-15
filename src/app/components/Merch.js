export async function merch() {
  const res = await fetch("http://127.0.0.1:5000/api/v1/merch");

  if (!res) {
    throw new Error("Something went wrong");
  }

  return res.json();
}
