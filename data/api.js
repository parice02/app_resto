export const get_response = async (data) => {
  try {
    let response = await fetch("https://parice02.pythonanywhere.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    }).then((response) => response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
