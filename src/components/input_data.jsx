const inputData = async (data) => {
  try {
    const response = await fetch("/api/create_root", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const result = await response.json()
    console.log("Success:", result)
  } catch (error) {
    console.error("Error:", error)
  }
}

export default inputData
